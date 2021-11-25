// open toggle
let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
let close = document.querySelector('.close');
let lis = document.querySelectorAll('nav ul li');

toggle.onclick = function () {
    nav.style.display = "block";
    if (nav.style.display == "block") {
        lis.forEach((li) => {
            li.classList.add('active');
        });
    }
}

close.onclick = function () {
    nav.style.display = "none";
}
