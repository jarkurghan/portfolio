if (lang === "uz") {
    document.getElementsByClassName("sider-profession")[0].textContent = "Full-Stack dasturchi";
    document.getElementsByClassName("sider-description")[0].textContent = "Men 2,5 yillik tajribaga ega Full-Stack dasturchisiman";
    document.querySelector('a[href="#about"]').textContent = "⊳ Men haqimda";
    document.querySelector('a[href="#experience"]').textContent = "⊳ Tajriba";
    document.querySelector('a[href="#projects"]').textContent = "⊳ Loyihalar";
} else if (lang === "ru") {
    document.getElementsByClassName("sider-profession")[0].textContent = "Full-stack разработчик";
    document.getElementsByClassName("sider-description")[0].textContent = "Я Full-Stack разработчик с опытом работы 2,5 года";
    document.querySelector('a[href="#about"]').textContent = "⊳ Обо мне";
    document.querySelector('a[href="#experience"]').textContent = "⊳ Опыт";
    document.querySelector('a[href="#projects"]').textContent = "⊳ Проекты";
} else if (lang === "en") {
    document.getElementsByClassName("sider-profession")[0].textContent = "Full stack developer";
    document.getElementsByClassName("sider-description")[0].textContent = "I am Full-Stack developer with 2.5 years experience";
    document.querySelector('a[href="#about"]').textContent = "⊳ About me";
    document.querySelector('a[href="#experience"]').textContent = "⊳ Experience";
    document.querySelector('a[href="#projects"]').textContent = "⊳ Projects";
}