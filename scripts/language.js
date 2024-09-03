if (lang === "uz") {
    document.getElementsByClassName("sider-profession")[0].textContent = "Full-Stack dasturchi";
    document.getElementsByClassName("sider-description")[0].textContent = "Men 2,5 yillik tajribaga ega Full-Stack dasturchisiman";
    document.querySelector('a[href="#about"]').textContent = "⊳ Men haqimda";
    document.querySelector('a[href="#experience"]').textContent = "⊳ Tajriba";
    document.querySelector('a[href="#projects"]').textContent = "⊳ Loyihalar";
    document.querySelector("#about>.title").textContent = "Men haqimda";
    document.querySelector("#about>.info").textContent = "Dasturlashga kirib kelishim universitet davrida bo'lgan. Dasturlash sohasiga yaqin bo'lgan axborot xavfsizligi yo'nalishi C++, Python va Web dasturlash bo'yicha boshlang'ich bilimlarimni olishimga sabab bo'lgan. Professional tajribam esa 2021-yil 4-kurslik davrimda boshlangan";
    document.querySelector("#experience>.title").textContent = "Tajriba";
    document.querySelector('a[href*="transoxania.uz"] .experience-profession').textContent = "Full-Stack dastruchi"
    document.querySelector('a[href*="transoxania.uz"] .exp-start').textContent = "2022 aprel"
    document.querySelector('a[href*="transoxania.uz"] .exp-end').textContent = "Hozirgi"
    document.querySelector('a[href*="transoxania.uz"] .experience-description-info').textContent = "Transoxania MChJda web-dasturchi. 2,5 yillik faoliyatim davomida o‘nlab loyihalarda ishtirok etdim. Texnik darajam anchagina oshdi. Men ba'zi loyihalarning obyekt modelini tayyorladim va hatto ba'zi loyihalarda TeamLead bo'ldim. Men asosan NodeJS, ExpressJS, KnexJS, PostgreSQL, Redis texnologiyalari yordamida APIlarni va ReactJS, Angular yordamida UI dasturlari yordamida yozganman. Va shunga o'xshash web-dasturlash bilan bog'liq boshqa ko'nikmalarni orttirdim"
    document.querySelector('a[href*="digitalgov.uz"] .exp-start').textContent = "2021 noyabr"
    document.querySelector('a[href*="digitalgov.uz"] .exp-end').textContent = "2021 dekabr"
    document.querySelector('a[href*="digitalgov.uz"] .experience-description-info').textContent = "DigitalGov Innovation HUB MChJda mentor. Maktab o'qituvchilariga C++ tilida dasturlash asoslaridan dars berganman. Lekin ustozlik davrim uzoq davom etmadi, chunki darslik ikki oyga mo‘ljallangan edi"
    document.getElementsByClassName("basic-of-programming")[0].textContent = "dasturlash asoslari";
    document.querySelector("#projects>.title").textContent = "Loyihalar";
    document.querySelector('a[href*="virtual-lugat.uz"] .project-description-info').textContent = "O'zbek tilidagi so'zlar ma'nolarining izohli lug'ati. G'oyasi o'zimga tegishli bo'lgan, har bir kodini o'zim yozgan birinchi proyekt. Proyekt admin va foydalanuvchi qismiga bo'linadi. Admin tomondan so'zlar va so'z haqida ma'lumotlar kiritiladi, foydalanuvchi tomon esa ochiq qidiruv tizimi kabi ishlaydi"
    document.querySelector('.project.portfolio .project-description-info').textContent = "Shaxsiy portfoliom. Oldingi loyihalarim, shaxsiy ko'nikmalarim va professional tajribam haqida web-sayt";
    document.querySelector('a[href*="hotel.karvonsaroyi.uz"] .project-description-info').textContent = "Mehmonxona ish kuni portali. Mehmonxona uchun mehmonlar bilan ishlashni elektronlashtirish tizimi. Loyiha bir nechta dasturlardan iborat: Main, Admin, Mobile (tugatilmagan).";
} else if (lang === "ru") {
    document.getElementsByClassName("sider-profession")[0].textContent = "Full-stack разработчик";
    document.getElementsByClassName("sider-description")[0].textContent = "Я Full-Stack разработчик с опытом работы 2,5 года";
    document.querySelector('a[href="#about"]').textContent = "⊳ Обо мне";
    document.querySelector('a[href="#experience"]').textContent = "⊳ Опыт";
    document.querySelector('a[href="#projects"]').textContent = "⊳ Проекты";
    document.querySelector("#about>.title").textContent = "Обо мне";
    document.querySelector("#about>.info").textContent = "Я начал заниматься программированием, когда учился в университете. Фокус на информационной безопасности, близкий к области программирования, привел к моим первоначальным знаниям C++, Python и веб-программирования. Мой профессиональный опыт начался на 4-м курсе 2021 года";
    document.querySelector("#experience>.title").textContent = "Опыт";
    document.querySelector('a[href*="transoxania.uz"] .experience-profession').textContent = "Full-stack разработчик"
    document.querySelector('a[href*="transoxania.uz"] .exp-start').textContent = "2022 апрель"
    document.querySelector('a[href*="transoxania.uz"] .exp-end').textContent = "до сих пор"
    document.querySelector('a[href*="transoxania.uz"] .experience-description-info').textContent = "Веб-разработчик в Transoxania LLC. За 2,5 года работы я принял участие в десятках проектов. Мой технический уровень немного вырос. Я подготовил модель сущности некоторых проектов и даже стал TeamLead в некоторых проектах. В основном я писал API с использованием технологий NodeJS, ExpressJS, KnexJS, PostgreSQL, Redis и UI-программы с использованием ReactJS, Angular. Я также получил другие знания, связанные с веб-программированием."
    document.querySelector('a[href*="digitalgov.uz"] .exp-start').textContent = "2021 ноябрь"
    document.querySelector('a[href*="digitalgov.uz"] .exp-end').textContent = "2021 Декабрь"
    document.querySelector('a[href*="digitalgov.uz"] .experience-description-info').textContent = "Mentor в DigitalGov Innovation HUB ООО. Я преподавал основы программирования на C++ школьным учителям. Мой период наставничества длился недолго, так как учебник был рассчитан на два месяца"
    document.getElementsByClassName("basic-of-programming")[0].textContent = "основы программирования";
    document.querySelector("#projects>.title").textContent = "Проекты";
    document.querySelector('a[href*="virtual-lugat.uz"] .project-description-info').textContent = "Толковый словарь значений слов узбекского языка. Это первый проект, где идея принадлежит мне и весь код я написал сам. Проект разделен на административную и пользовательскую часть. На стороне администратора вводятся слова и информация о словах, а на стороне пользователя работает как открытая поисковая система."
    document.querySelector('.project.portfolio .project-description-info').textContent = "Мое личное портфолио. Сайт о моих предыдущих проектах, личных навыках и профессиональном опыте.";
    document.querySelector('a[href*="hotel.karvonsaroyi.uz"] .project-description-info').textContent = "Портал операционного дня отеля. Электронная система работы с гостями отеля. Проект состоит из нескольких программ: Основная, Админская, Мобильная (недоработанная).";
} else if (lang === "en") {
    document.getElementsByClassName("sider-profession")[0].textContent = "Full stack developer";
    document.getElementsByClassName("sider-description")[0].textContent = "I am Full-Stack developer with 2.5 years experience";
    document.querySelector('a[href="#about"]').textContent = "⊳ About me";
    document.querySelector('a[href="#experience"]').textContent = "⊳ Experience";
    document.querySelector('a[href="#projects"]').textContent = "⊳ Projects";
    document.querySelector("#about>.title").textContent = "About me";
    document.querySelector("#about>.info").textContent = "I started programming when I was studying at the university. An information security focus close to the field of programming led to my initial knowledge of C++, Python and Web programming. My professional experience started during my 4th year of 2021";
    document.querySelector("#experience>.title").textContent = "Experience";
    document.querySelector('a[href*="transoxania.uz"] .experience-profession').textContent = "Full-Stack developer"
    document.querySelector('a[href*="transoxania.uz"] .exp-start').textContent = "2022 april"
    document.querySelector('a[href*="transoxania.uz"] .exp-end').textContent = "Present"
    document.querySelector('a[href*="transoxania.uz"] .experience-description-info').textContent = "Web developer at Transoxania LLC. During my 2.5 years of work, I participated in dozens of projects. My technical level has increased a bit. I prepared entity model of some projects and even became TeamLead in some projects. I mainly wrote APIs using NodeJS, ExpressJS, KnexJS, PostgreSQL, Redis technologies and UI programs using ReactJS, Angular. I also gained other knowledge related to web programming"
    document.querySelector('a[href*="digitalgov.uz"] .exp-start').textContent = "2021 nov"
    document.querySelector('a[href*="digitalgov.uz"] .exp-end').textContent = "2021 Dec"
    document.querySelector('a[href*="digitalgov.uz"] .experience-description-info').textContent = "Mentor at DigitalGov Innovation HUB LLC. I taught the basics of C++ programming to school teachers. My mentoring period did not last long because the textbook was designed for two months"
    document.getElementsByClassName("basic-of-programming")[0].textContent = "basic of programming";
    document.querySelector("#projects>.title").textContent = "Projects";
    document.querySelector('a[href*="virtual-lugat.uz"] .project-description-info').textContent = "An explanatory dictionary of the meanings of words in the Uzbek language. This is the first project where the idea belongs to me and I wrote all the code myself. The project is divided into admin and user part. On the admin side, words and word information are entered, while the user side works like an open search engine"
    document.querySelector('.project.portfolio .project-description-info').textContent = "My personal portfolio. A website about my previous projects, personal skills and professional experience";
    document.querySelector('a[href*="hotel.karvonsaroyi.uz"] .project-description-info').textContent = "Hotel operational day portal. Electronic system for working with guests for the hotel. The project consists of several programs: Main, Admin, Mobile (unfinished).";
}