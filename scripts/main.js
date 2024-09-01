document.onclick = (event) => {
    const isTranlate = event.target.getAttribute("class") === "translate-icon" || event.target.getAttribute("class") === "translate-text";
    if (!isTranlate) {
        let x = document.getElementsByClassName("translate-menu");
        x[0].setAttribute("class", "translate-menu");
    }
};

function showTranslate() {
    let x = document.getElementsByClassName("translate-menu");
    if (x[0].getAttribute("class") === "translate-menu active") x[0].setAttribute("class", "translate-menu");
    else if (x[0].getAttribute("class") === "translate-menu") x[0].setAttribute("class", "translate-menu active");
}

// scp -r . root@178.128.243.52:/var/www/portfolio
