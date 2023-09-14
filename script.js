window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("active", window.scrollY > 120);

    var eu = document.getElementById("eu");
    eu.classList.toggle("eu-ani", window.scrollY > 120);

    var sobre1 = document.getElementById("1sobre");
    sobre1.classList.toggle("sobre-ani", window.scrollY > 120);
})

const chk = document.getElementById('chk')
chk.addEventListener('change', (e) => {
    document.body.classList.toggle('light', e.target.checked);
})