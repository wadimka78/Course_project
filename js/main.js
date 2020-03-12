document.addEventListener("DOMContentLoaded", function (event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });
/*     document.addEventListener('keypress', function (e) {
        if(e.keyCode === 27) document.getElementById('modal_id').hidden= 1;
    });  */
    closeBtn.addEventListener('click', switchModal);
});