const button = document.getElementById('onAdd');
const input = document.getElementById('taskCreateInput');
const tasksContainer = document.getElementById('tasks-container');
const mainContainer = document.getElementById('main-container')
let data = JSON.parse(localStorage.getItem('data')) || []
const onClickAddButton = (e) => {
    const inputValue = e.target.parentElement.children[0].children[0].value
    const validationSpan = document.createElement('span')
    validationSpan.id = 'validationSpan'
    validationSpan.className = 'validationSpan'
    validationSpan.innerText = 'Нельзя отправлять пустую строку'
    if(inputValue.length === 0 && !document.getElementById('inputParent').children[1]) {
        document.getElementById('inputParent').append(validationSpan)
    }else if(document.getElementById('inputParent').children[1] && inputValue.length > 0){
            document.getElementById('validationSpan').remove()
            const obj = {
                content:inputValue,
                id:idGenerator()
            }
        createTaskCard(obj)
            if(JSON.parse(localStorage.getItem('data'))){
                data = JSON.parse(localStorage.getItem('data')).push(obj)
                localStorage.setItem('data',JSON.stringify(data))
            }else{
                const settedData= [obj]
                localStorage.setItem('data', JSON.stringify(settedData))
            }
    }else if(!document.getElementById('inputParent').children[1] && inputValue.length > 0){
        const obj = {
            content:inputValue,
            id:idGenerator()
        }
        createTaskCard(obj)
        if(localStorage.getItem('data')){
            data = JSON.parse(localStorage.getItem('data')) || []
            data.push(obj)
            localStorage.setItem('data',JSON.stringify(data))
        }else{
            let arr = []
            arr.push(obj)
            localStorage.setItem('data', JSON.stringify(arr))
        }
    }
}

const idGenerator = () => {
    return crypto.randomUUID()
}

const createTaskCard = (info) => {
    const {content,id} = info
    const taskCard = document.createElement('div')
    taskCard.id = id;
    taskCard.setAttribute('class','taskCard')
    const spanContent = document.createElement('span')
    spanContent.innerText = content
    spanContent.id = 'spanContent'
    const inputCheckbox = document.createElement('input')
    inputCheckbox.id = 'inputCheckbox'
    inputCheckbox.type = 'checkbox'
    inputCheckbox.addEventListener('change',(e) => {
        if(inputCheckbox.checked){
            e.target.parentElement.children[1].classList.add('line-through')
            const checkBoxInfo = JSON.parse(localStorage.getItem('checkBoxData')) || []
            checkBoxInfo.push(e.target.parentElement.parentElement.id)
            localStorage.setItem('checkBoxData',JSON.stringify(checkBoxInfo))

            if(!mainContainer.children[3]){
                const removeAllButton = document.createElement('button')
                removeAllButton.id = 'removeAllButton'
                removeAllButton.innerText = 'Remove all selected'
                removeAllButton.addEventListener('click',() => {
                    console.log(tasksContainer.parentElement.children)
                    const checkBoxData = JSON.parse(localStorage.getItem('checkBoxData')) || []
                    let data = JSON.parse(localStorage.getItem('data')) || []
                    data = data.filter(item => {
                        return !checkBoxData.includes(item.id)
                    })
                    localStorage.setItem('checkBoxData',JSON.stringify([]))
                    localStorage.setItem('data',JSON.stringify(data))
                    checkBoxData.forEach(id => {
                        const element = document.getElementById(id);
                        if (element) {
                            element.remove();
                        }
                    });
                    tasksContainer.classList.remove('personalCardStyles')
                    document.getElementById('removeAllButton').remove()
                })
                mainContainer.append(removeAllButton)
            }
        }else{
            let checkBoxInfo = JSON.parse(localStorage.getItem('checkBoxData')) || []
            checkBoxInfo = checkBoxInfo.filter(item => item !== e.target.parentElement.parentElement.id)
            localStorage.setItem('checkBoxData',JSON.stringify(checkBoxInfo))
            e.target.parentElement.children[1].classList.remove('line-through')
            const checkBoxData = JSON.parse(localStorage.getItem('checkBoxData')) || []
            if(checkBoxData.length === 0){
                mainContainer.children[3].remove()
            }
        }

    })
    const conteinerOfSpanAndCheckbox = document.createElement('div')
    conteinerOfSpanAndCheckbox.id = 'conteinerOfSpanAndCheckbox'
    conteinerOfSpanAndCheckbox.append(inputCheckbox)
    conteinerOfSpanAndCheckbox.append(spanContent)
    taskCard.append(conteinerOfSpanAndCheckbox)
    const customDeleteButton = document.createElement('img')
    customDeleteButton.id = 'customDeleteButton'
    customDeleteButton.src = './icons/box.png'
    customDeleteButton.addEventListener('click',(e)  => {
        data = JSON.parse(localStorage.getItem('data')) || []
        data = data.filter(obj => {
            return obj.id !== e.target.parentElement.id
        })
        localStorage.setItem('data',JSON.stringify(data))
        e.target.parentElement.remove()
        if(tasksContainer.childElementCount === 0){
            tasksContainer.classList.remove('personalCardStyles')
        }
    })
    taskCard.append(customDeleteButton)
    tasksContainer.append(taskCard)
    console.log(tasksContainer.classList)
    if(!tasksContainer.classList.contains('personalCardStyles')){
        tasksContainer.className = 'personalCardStyles'
    }
}

onRendering = () => {
    if(data.length > 0){
        data.map(item => {
            createTaskCard(item)
        })
    }
}

onRendering()

button.addEventListener('click', onClickAddButton)
