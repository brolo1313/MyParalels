
const navMobile = document.getElementById ('nav-mobile');
const burger = document.getElementById ('burgerId');
const fixedNavBar = document.querySelector ('.navbar')
const tabsBtn = document.querySelectorAll ('.tabs__item');
const tabsItems = document.querySelectorAll('.tabs-content');
const body = document.querySelector('body');





tabsBtn.forEach(onTabClick) ;
  


function onTabClick (item) {
  item.addEventListener("click", function(){
    let currentBtn = item;
    let tabId = currentBtn .getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (! currentBtn.classList.contains('active__tabs')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active__tabs')
      })
  
      tabsItems.forEach(function (item) {
        item.classList.remove('active__content')
      })
      
      currentBtn.classList.add('active__tabs');
      currentTab.classList.add('active__content')
    }

  
  })
}

//произвольный клик на первый элемент
document.querySelector('.tabs__item').click();


window.addEventListener('scroll', function() {
  checkscroll ();

})


document.addEventListener("DOMContentLoaded", function(){
  checkscroll ();
})

// ф-я проверяет позицию скрола экрана и добавляет класс хедеру

function checkscroll () {
  let scrollPos = window.scrollY;
  
  if(scrollPos > 0 ){
    fixedNavBar.classList.add('fixed');
    
  }

  else if(scrollPos < 100 ) {
    fixedNavBar.classList.remove('fixed');
    
  }
}

// бургер анимация 

document.querySelector('.burger').addEventListener('click', function(){
  document.querySelector('.burger span').classList.toggle('active');
  
})
document.querySelector('.burger').addEventListener('blur', function(){
  document.querySelector('.burger span').classList.remove('active');
  
})

// навигация мобильная
burger.addEventListener('click', function() {
  
    (navMobile.classList == 'nav__mobile') ? 
          navMobile.classList.add ('active') : 
          navMobile.classList.remove ('active');


 
})

burger.addEventListener('focusout', function(){
  if(true) navMobile.classList.remove ('active');
})





// якоря на секции

const anchors = document.querySelectorAll('a[href^="#"]');

for(let anchor of anchors) {
    anchor.addEventListener("click", function(event){
        event.preventDefault();

        const blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior:"smooth",
            block: "start"
        })
    })
}





// SlICK слайдер

  $('.header-slider').slick({
    
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:2000,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 800,
    
    
  });



  //ТЕСТ ЗАКРЫТЬ ФОТО В ПОРТФОЛИО

  const imgPortfolio = document.querySelector('.block-img8');
  const closeItem = document.querySelector('.close__content');
  const container = document.querySelector('.tabs-content')
 
  

  container.onclick= function (event) {
    if (event.target.className != 'close__item') return;

    let pane = event.target.closest('.block-img8');
    pane.remove();
  };

//МОДАЛЬНОЕ ОКНО

  const modalBtn = document.querySelector(".write_me");
  const modalShow = document.querySelector(".modal");
  const modalMask = document.querySelector(".modal__mask")
 
   
  modalBtn.addEventListener ('click', function (){
    if(modalShow.classList == 'modal'){
      modalShow.classList.add('modal__open');
      if(modalMask.classList == 'modal__mask'){
        modalMask.classList.add('mask__open')
        body.style.overflow = 'hidden';
      }
    }else {
      modalMask.classList.remove('mask__open');
      modalShow.classList.remove('modal__open');
      body.style.overflow = 'auto';
    }
  })



  modalMask.onclick = () => {
    if(true)  modalShow.classList.remove('modal__open');
              modalMask.classList.remove('mask__open');
              body.style.overflow = 'auto';
  }



 

//  portfolio foto like animation
const likeImageOff = document.querySelectorAll('.heart__off'); 
const likeImageOn = document.querySelectorAll('.heart__on'); 
const boxComments = document.querySelectorAll('.box-comments'); 
const cntLike = document.querySelectorAll('.counter__like')
   
console.log(boxComments)


likeImageOff.forEach((item, index) =>{
  item.addEventListener('click', function (){
    item.classList.toggle('active');
    const current = Number(cntLike[index].innerHTML);
    // console.log(current)
    const inc = item.classList.contains("active") ? 1 : -1;
    cntLike[index].innerHTML = current + inc;
  })
});

  

// function checkOnChangeLike (i){
//     console.log(i);
 
//     i.addEventListener('click', ({ target: t }) => {
//       console.log(t)
//       if (t.classList.contains('heart__off')) {
//         const index = [...document.querySelectorAll('.heart__off')].indexOf(t);
        
//         const count = document.querySelectorAll('.counter__like')[index];
//         console.log(count)
//         i.classList.toggle('active');
//         count.textContent -= [ 1, -1 ][+i.classList.contains('active')];
//       }
//     });
      

//   } 





