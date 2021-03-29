
const navMobile = document.getElementById ('nav-mobile');
const burger = document.getElementById ('burgerId');
const fixedNavBar = document.querySelector ('.navbar')
const tabsBtn = document.querySelectorAll ('.tabs__item');
const tabsItems = document.querySelectorAll('.tabs-content');




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
  

  (scrollPos > 0 ) ? fixedNavBar.classList.add('fixed') : 
                     fixedNavBar.classList.remove('fixed');
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
  const closeItem = document.querySelector('.close__content')

 
  

  closeItem.onclick = () => {
    closeBlock();
  }

  function closeBlock() {

    
  

    if(imgPortfolio.classList.contains('hidden')){
      
      setTimeout(function() {
        imgPortfolio.classList.remove('visuallyhiden');
      }, 20);
      
     }else {
      imgPortfolio.classList.add('visuallyhiden');
      imgPortfolio.addEventListener("transitionend" , function(e) {
        imgPortfolio.classList.add('hidden');
      })
     }
  }