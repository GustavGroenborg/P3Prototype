const open = document.getElementById('CreateNewButton');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.toggle('hidden');
});

close.addEventListener('click', () => {
    modal_container.classList.toggle('hidden');
});