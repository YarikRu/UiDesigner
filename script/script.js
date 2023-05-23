const hireMe = document.getElementById('hire_me');
const download = document.getElementById('download');

download.addEventListener('mouseover', e => {
    download.style.backgroundColor = "#00ADB5"
    hireMe.style.backgroundColor = "rgba(57, 62, 70, 0.75)"
})

download.addEventListener('mouseleave', e => {
    hireMe.style.backgroundColor = "#00ADB5";
    download.style.backgroundColor = "rgba(57, 62, 70, 0.75)";
})

const project = document.querySelectorAll(".project_inside button");
const btn_1 = document.getElementById('btn_1');

project.forEach(function(elem) {
    elem.addEventListener('mouseover', e => {
        btn_1.classList.remove('active');
        elem.classList.add('active');
    })
    elem.addEventListener('mouseleave', e => {
        elem.classList.remove('active');
    })
})