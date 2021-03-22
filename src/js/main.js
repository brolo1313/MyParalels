
const navMobile = document.getElementById ('nav-mobile');
const burger = document.getElementById ('burgerId');
const fixedNavBar = document.querySelector ('.navbar')
const tabsBtn = document.querySelectorAll ('.tabs__item');
const tabsItems = document.querySelectorAll('.tabs-content');
const body = document.body;



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
  }else {
    fixedNavBar.classList.remove('fixed');
  }
}

// навигация мобильная
burger.addEventListener('click', function() {
  if(navMobile.classList == 'nav__mobile'){
    navMobile.classList.add ('active');
  }else if (navMobile.classList == 'nav__mobile active') {
    navMobile.classList.remove ('active');

  }
})



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


// document.onclick = function(event){
//   console.log(event.target.tagName);
//   }


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



  //ТЕСТ ИСТОРИЯ