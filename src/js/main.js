
const navMobile = document.getElementById ('nav-mobile');
const burger = document.getElementById ('burgerId');
const fixedNavBar = document.querySelector ('.navbar')
const body = document.body;




window.addEventListener('scroll', function() {
  checkscroll ();

})


document.addEventListener("DOMContentLoaded", function(){
  checkscroll ();
})

// ф-я проверяет позицию скрола экрана

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