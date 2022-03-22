let position = 0;
const slidesToShow=1;
const slidesToGo=1;
const container = document.querySelector('.slider__container') ;
const track = document.querySelector('.slider__track')
const items = document.querySelectorAll('.slider__item');
const button_next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToGo * itemWidth;

items.forEach((item) =>{
    item.style.minWidth = `${itemWidth}px`
});

prev.addEventListener('click', () =>{
    const itemLeft = Math.abs(position) / itemWidth;

    position += itemLeft >= slidesToGo ? movePosition : itemLeft * itemWidth;

    setPosition();
    checkBtns();
});

next.addEventListener('click', rer);
 function rer(){
    const itemLeft =itemsCount - (Math.abs(position)  + slidesToShow * itemWidth)/ itemWidth;

    position -= itemLeft >= slidesToGo ? movePosition : itemLeft * itemWidth;

    setPosition();
    checkBtns();
};

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    prev.disabled = position ===0;
    next.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}
checkBtns();
