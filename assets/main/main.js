// выпадающее меню
let items = document.getElementById('menu-items');
menu.addEventListener('mouseover', function () {
    items.style.display = 'flex';
    items.style.transform = 'translateY(0)';
    items.style.transition = 'transform 0.3s ease-in-out';
});
menu.addEventListener('mouseout', function () {
    items.style.transform = 'translateY(-200px)';
    items.style.transition = 'transform 0.3s ease-in-out'; 
        items.style.display = 'none';

});
// конец

// акардион
let menuElems = document.querySelectorAll('.menu__elem')

menuElems.forEach(menuElem=>{
    let submenu = menuElem.querySelector('.submenu');
    let btn = menuElem.querySelector('.menu__btn');

    menuElem.addEventListener('mouseenter',function(){
        submenu.classList.add('active');
        btn.classList.add('active');
    })
    menuElem.addEventListener('mouseleave',function(){
        submenu.classList.remove('active');
        btn.classList.remove('active');
    })
})

document.querySelector('.faq').addEventListener('click', function(event){
    let target = event.target.closest('.faq__item');
    if(!target) return;

    target.classList.toggle('active');
    let p21 = target.querySelector('.p21');

    if(target.classList.contains('active')){
        p21.style.height = p21.scrollHeight + 'px';
    }else{
        p21.style.height = '';
    }
})
// конец
 
 
let sliderBody = document.querySelector('.slider__body') 
let sliderNav = document.querySelector('.slider__nav') 
let sliderImages = document.querySelector('.slider__images') 
let sliderItems = Array.from(document.querySelectorAll('.slider__item')) 
let sliderDots = Array.from(document.querySelectorAll('.slider__dot')) 
 
sliderBody.addEventListener('click', function(event){ 
    let targetArrow = event.target.closest('.slider__arrow'); 
    if(!targetArrow) return; 
 
    let currentActiveImage = document.querySelector('.slider__item.active'); 
    let currentActiveIndex = sliderItems.indexOf(currentActiveImage); 
 
    currentActiveImage.classList.remove('active'); 
    document.querySelector('.slider__dot.active').classList.remove('active'); 
 
    changeActive(targetArrow, currentActiveIndex) 
 
    let newActiveImage = document.querySelector('.slider__item.active'); 
    let newActiveIndex = sliderItems.indexOf(newActiveImage); 
 
    scrollSlider(newActiveIndex) 
 
 
}) 
