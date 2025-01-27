const footerContent = {
    langBlock:[
        "Русский",
        "English (US)",
        "Türkçe",
        "Bahasa Indonesia",
        "Қазақша",
        "中文(简体)",
        "Deutsch",
        "한국어",
        "Shqip",
        "Español",
        "Português (Brasil)",
    ],
    contentBlock:[
        "Регистрация",
        "Вход",
        "Messenger",
        "Facebook Lite",
        "Watch",
        "Люди",
        "Страницы",
        "Категории Страниц",
        "Места",
        "Игры",
        "Facebook Pay",
        "Группы",
        "Вакансии",
        "Oculus",
        "Portal",
        "Instagram",
        "Местные",
        "Благотворительные акции",
        "Услуги",
        "О нас",
        "Создать рекламу",
        "Создать Страницу",
        "Разработчикам",
        "Вакансии",
        "Конфиденциальность",
        "Файлы cookie",
        "Места",
        "Marketplace",
        "Центр информации о голосовании",
        "Выбор рекламы",
        "Условия использования",
        "Справка",
    ],
    metaData:[
        "Facebook © 2021"
    ]
}

const footerChild1 = document.querySelector('.footer-1');
const footerChild2 = document.querySelector('.footer-2');
const footerChild3 = document.querySelector('.footer-3');

Object.entries(footerContent).forEach(([key, values]) => {
    values.forEach(value => {
        const footerSpan = document.createElement("span");
        footerSpan.setAttribute("id", "footerSpan");
        const linkOfSpan = document.createElement("a");
        linkOfSpan.href = '#';
        linkOfSpan.textContent = value;
        footerSpan.append(linkOfSpan);

        switch (key) {
            case 'langBlock':
                footerChild1.append(footerSpan);
                break;
            case 'contentBlock':
                if(value === 'Регистрация'){
                    const addButton = document.createElement("button");
                    addButton.innerText = '+'
                    addButton.style.padding = '2px 5px'
                    addButton.style.marginTop = '-5px'
                    addButton.style.marginBottom = '3px'
                    footerChild1.append(addButton)
                }
                footerChild2.append(footerSpan);
                break;
            case 'metaData':
                footerChild3.append(footerSpan);
                break;
        }
    });
});