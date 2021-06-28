let imagens = document.querySelectorAll('.small');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcValue = '';

for(let i =0; i<imagens.length; i++){
    imagens[i].addEventListener('click', function(){
        srcValue = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcValue);
        modal.classList.toggle('modal_active')
    })
}

btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
})