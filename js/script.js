const menuBody=document.querySelector('.hamburger');
document.addEventListener('click',hamb);

function hamb (event){
    if (event.target.closest('.hamburger')){
        menuBody.classList.toggle('hamburger_active');
    }

    if (!event.target.closest('.hamburger')){
        menuBody.classList.remove('hamburger_active');

    }

}


const menuleft=document.querySelector('.menu');
document.addEventListener('click',menu);

function menu (event){
    if (event.target.closest('.hamburger')){
        menuleft.classList.toggle('menu_active');
    }

    if (!event.target.closest('.hamburger')){
        menuleft.classList.remove('menu_active');

    }

}