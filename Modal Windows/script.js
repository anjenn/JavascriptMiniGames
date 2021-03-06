'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//we can treat the above as an array
console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
/*we shouldn't write closeModal(), because it's gonna call the function immediately
NOT as we click.*/
overlay.addEventListener('click', closeModal);

//we can call the parameter of this below function anything
//it's an event object of the key pushed down.
document.addEventListener('keydown', function (e) {
  console.log(e.key); //this should print 'escape'
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log(`ESC was pressed`);
    closeModal();
  }
});
