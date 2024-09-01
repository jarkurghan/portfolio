if (lang === "uz") {
    document.getElementsByClassName("sider-profession")[0].textContent = "Full-Stack dasturchi";
    document.getElementsByClassName("sider-description")[0].textContent = "Men 2,5 yillik tajribaga ega Full-Stack dasturchisiman";
    document.querySelector('a[href="#about"]').textContent = "⊳ Men haqimda";
    document.querySelector('a[href="#experience"]').textContent = "⊳ Tajriba";
    document.querySelector('a[href="#projects"]').textContent = "⊳ Loyihalar";
    document.querySelector("#about>.title").textContent = "Men haqimda";
    document.querySelector("#about>.info").textContent = "Dasturlashga kirib kelishim universitet davrida bo'lgan. Dasturlash sohasiga yaqin bo'lgan axborot xavfsizligi yo'nalishi C++, Python va Web dasturlash bo'yicha boshlang'ich bilimlarimni olishimga sabab bo'lgan. Professional tajribam esa 2021-yil 4-kurslik davrimda boshlangan";
} else if (lang === "ru") {
    document.getElementsByClassName("sider-profession")[0].textContent = "Full-stack разработчик";
    document.getElementsByClassName("sider-description")[0].textContent = "Я Full-Stack разработчик с опытом работы 2,5 года";
    document.querySelector('a[href="#about"]').textContent = "⊳ Обо мне";
    document.querySelector('a[href="#experience"]').textContent = "⊳ Опыт";
    document.querySelector('a[href="#projects"]').textContent = "⊳ Проекты";
    document.querySelector("#about>.title").textContent = "Обо мне";
    document.querySelector("#about>.info").textContent = "Я начал заниматься программированием, когда учился в университете. Фокус на информационной безопасности, близкий к области программирования, привел к моим первоначальным знаниям C++, Python и веб-программирования. Мой профессиональный опыт начался на 4-м курсе 2021 года";
} else if (lang === "en") {
    document.getElementsByClassName("sider-profession")[0].textContent = "Full stack developer";
    document.getElementsByClassName("sider-description")[0].textContent = "I am Full-Stack developer with 2.5 years experience";
    document.querySelector('a[href="#about"]').textContent = "⊳ About me";
    document.querySelector('a[href="#experience"]').textContent = "⊳ Experience";
    document.querySelector('a[href="#projects"]').textContent = "⊳ Projects";
    document.querySelector("#about>.title").textContent = "About me";
    document.querySelector("#about>.info").textContent = "I started programming when I was studying at the university. An information security focus close to the field of programming led to my initial knowledge of C++, Python and Web programming. My professional experience started during my 4th year of 2021";
}