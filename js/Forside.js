//Magasin
const hide = document.getElementById('hideText')
const btn = document.getElementById('btn1')
//Kop og kande
const hide2 = document.getElementById('hideElem2')
const btn2 = document.getElementById('btn2')

//spar
const hide3 = document.getElementById('hideElem3')
const btn3 = document.getElementById('btn3')

//spar
const hide4 = document.getElementById('hideElem4')
const btn4 = document.getElementById('btn4')

//spar
const hide5 = document.getElementById('hideElem5')
const btn5 = document.getElementById('btn5')



//menu i bunden
const plusButton = document.getElementById('plusMaster')
const menu = document.getElementById('popup')
const closeMenu = document.getElementById('close')
const createToDo = document.getElementById('lavToDo')
const open = document.getElementById('toDoOpen');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('closeToDo');
btn.addEventListener("click", () => {
    hide.classList.toggle('hidden')
    hide.classList.toggle('fly')

    btn.classList.toggle('toggleOut')
    btn.classList.toggle('toggleIn')
})
btn3.addEventListener("click", () => {
    hide3.classList.toggle('hidden')
    hide3.classList.toggle('fly')

    btn3.classList.toggle('toggleOut')
    btn3.classList.toggle('toggleIn')
})
btn2.addEventListener("click", () => {
    hide2.classList.toggle('hidden')
    hide2.classList.toggle('fly')
    btn2.classList.toggle('toggleOut')
    btn2.classList.toggle('toggleIn')
})
btn4.addEventListener("click", () => {
    hide4.classList.toggle('hidden')
    hide4.classList.toggle('fly')
    btn4.classList.toggle('toggleOut')
    btn4.classList.toggle('toggleIn')
})
btn5.addEventListener("click", () => {
    hide5.classList.toggle('hidden')
    hide5.classList.toggle('fly')
    btn5.classList.toggle('toggleOut')
    btn5.classList.toggle('toggleIn')
})
createToDo.addEventListener('click', (e) => {
    //ToDo make work and happy not shit like now
    window.location.href = "/html/Forside.html"
    console.log("helloblyat")
})


open.addEventListener('click', () => {
    modal_container.classList.toggle('modal_container');
    modal_container.classList.toggle('hidden');
});

close.addEventListener('click', () => {
    modal_container.classList.toggle('modal_container'); 
    modal_container.classList.toggle('hidden');
});


plusButton.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menu.classList.toggle('fly')
})
closeMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menu.classList.toggle('fly')
})
open.addEventListener('click', () => {
    modal_container.classList.toggle('hidden');
});

close.addEventListener('click', () => {
    modal_container.classList.toggle('hidden');
});
function hideElem(id) {
    let parent = document.getElementById(id);
    console.log(parent)
    parent.remove()
}