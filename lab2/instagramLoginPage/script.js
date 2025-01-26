const instagramLoginPageFooterFirstBlock = document.getElementById('instagramLoginPageFooterFirstBlock')
const instagramLoginPageFooterSecondBlock = document.getElementById('instagramLoginPageFooterSecondBlock')
const footerContent = {
    firstBlockInfo:["Meta", "Информация", "Блог", "Вакансии", "Помощь", "API", "Конфиденциальность",
        "Условия", "Места", "Instagram Lite", "Threads",
        "Загрузка контактов и лиц, не являющихся пользователями", "Meta Verified"],
    SecondBlockInfo:["Русский", "© 2025 Instagram from Meta"]
}
Object.keys(footerContent).forEach(footerKeys => {
    switch (footerKeys){
        case 'firstBlockInfo':
            footerContent.firstBlockInfo.forEach(footerElem => {
            const spanElem = document.createElement("span")
            spanElem.id = 'footer_span'
            const linkOfSpan = document.createElement("a")
            linkOfSpan.style.color = 'grey'
            linkOfSpan.href = '#'
            linkOfSpan.textContent = footerElem
            spanElem.append(linkOfSpan)
            instagramLoginPageFooterFirstBlock.append(spanElem)
            })
            break
        case 'SecondBlockInfo':
            footerContent.SecondBlockInfo.forEach(footerElem => {
            const spanElem = document.createElement("span")
            spanElem.id = 'footer_span'
            const linkOfSpan = document.createElement("a")
            linkOfSpan.style.color = 'grey'
            linkOfSpan.href = '#'
            linkOfSpan.textContent = footerElem
            spanElem.append(linkOfSpan)
            instagramLoginPageFooterSecondBlock.append(spanElem)
            if(footerElem === 'Русский'){
                const img = document.createElement("img")
                img.src = 'assets/icons/down-chevron.png'
                img.style.width = '15px'
                img.style.height = '15px'
                img.style.alignSelf = 'center'
                img.style.marginLeft = '-7px'
                instagramLoginPageFooterSecondBlock.append(img)
            }
            })
            break
    }
})