const modal = document.querySelector('.backdrop');

const modalIsOpen = document.querySelector('.modal-open');
const modalIsClose = document.querySelector('.modal-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalIsOpen.addEventListener('click', toggleModal);
modalIsClose.addEventListener('click', toggleModal);
