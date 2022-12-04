showMoreText()

document.querySelector('.dropdown-menu__btn').onclick = function addClassHeader(){
  let menuBtn = document.querySelector('.dropdown-menu__wrapper')
  let menuDrop = document.querySelector('.dropdown-menu__btn-item')
  menuBtn.classList.toggle('active')
  menuDrop.classList.toggle('active')
}

document.getElementById('Submenu').onclick = function addClassHeaderMenu(){
  let menuDrop = document.querySelector('.menu__bottom-sublist')
  menuDrop.classList.toggle('active')
}

if(!document.getElementById('Submenu').onclick) {
  let menuDrop = document.querySelector('.menu__bottom-sublist')
  menuDrop.classList.toggle('active')
}

function showMoreText(){
    let cardList = document.querySelectorAll('.services__card');
    cardList.forEach((element) => {
        element.addEventListener('mouseover', () => {
          element.querySelector('.services__card-more').style.display = "flex";
        });
    });
    cardList.forEach((element) => {
        element.addEventListener('mouseout', () => {
          element.querySelector('.services__card-more').style.display = "none";
        });
    });
}