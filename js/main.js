
const mailInput = document.getElementById('mail-input');
const nameInput = document.getElementById('name-input');
const span = document.querySelector('.span');
const spanMail = document.querySelector('.span__mail');


let regName = /^[A-Za-zА-Яа-яЁё]{2,15}/;
let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;





document.getElementById('submit-btn').onclick = function(e){
  e.preventDefault();
  if(!validate(regName, nameInput.value)){
    notValid(nameInput, span, 'Проверка имени не пройдена : только буквы')
    nameInput.classList.remove('done');
  }else if (!validate(regEmail, mailInput.value)) {
    notValid(mailInput, span, 'Проверка email не пройдена');
    mailInput.classList.remove('done');
  }
  else {
    valid(nameInput, span, 'Проверка пройдена');
    valid(mailInput, span, 'Проверка пройдена');
  }
}

//функция возвращает проверку на верность
function validate(regex, inp){
  return regex.test(inp);
}

// валидация не пройдена
function notValid(inp, el, mess){
  inp.classList.add('invalid');
 
  el.innerHTML = mess;
  el.style.color = 'red';
  
}

// валидация пройдена
function valid(inp, el, mess){
  inp.classList.remove('invalid');
  inp.classList.add('done');
  el.innerHTML = mess;
  el.style.color = 'green';
  
}


nameInput.onblur=function(){
  if(validate(regName, nameInput.value)){
    nameInput.classList.remove('invalid');
    nameInput.classList.add('done');
    valid(nameInput, span, 'Проверка имени пройдена');
   
  }else{
    nameInput.classList.remove('done');
    nameInput.classList.add('invalid');
    notValid(nameInput, span, 'Проверка имени не пройдена : только буквы')
  }
}

mailInput.onblur=function(){
  if(validate(regEmail, mailInput.value)){
 
    mailInput.classList.add('done');
    valid(mailInput, span, 'Проверка email пройдена');
   
  }else{
    notValid(mailInput, span, 'Проверка email не пройдена' )
    mailInput.classList.remove('done');
    mailInput.classList.add('invalid');
    
  }
}









 // СКРОЛ АНИМАЦИЯ НА БЛОКЕ ANIMATION ON

 let animationOnBlock = document.querySelectorAll('.block_card');
 let progressBar = document.querySelectorAll('.front');
 let blockSkills = document.querySelector('.block__ourskills')
 let blockService = document.querySelectorAll('.block-service');
 let blockAboutUs = document.querySelector('.about-us');
 let wraperProgres = document.querySelector('.progress_wrapper');
 
 
 


// анимация about us progress line

 observer = new IntersectionObserver((entries) => {
    // console.log(entries[0]);
    // console.log(progressBar);
    entries.forEach(entry =>  {
        if(entry.isIntersecting === true) {
            entry.target.classList.add ('anim__on'); 
         }
       })
    })
progressBar.forEach(progress => {
    observer.observe(progress)
})




observer = new IntersectionObserver((entries) => {
    // console.log(entries[0]);
    // console.log(progressBar);
    entries.forEach(entry =>  {
        if(entry.isIntersecting === true) {  
            entry.target.style.animation = 'rotate-one 3s forwards ease-out';
        }
        else {
            entry.target.style.animation = 'none';
            
        }
       })
    })

//     animationOnBlock.forEach(animation => {
//     observer.observe(animation)
// })








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



 

//  тест лайки и счетчик, сеция портфолио


const likeImageOff = document.querySelectorAll('.heart__off'); 
const likeImageOn = document.querySelectorAll('.heart__on'); 
const boxComments = document.querySelectorAll('.box-comments'); 
const cntLike = document.querySelectorAll('.counter__like')
   
// console.log(boxComments)


likeImageOff.forEach((item, index) =>{
  item.addEventListener('click', function (){
    item.classList.toggle('active');
    const current = Number(cntLike[index].innerHTML);
    // console.log(current)
    const inc = item.classList.contains("active") ? +1 : -1;
    cntLike[index].innerHTML = current + inc;

   
    // localStorage.setItem("counter__like", cntLike[index].innerHTML); 
    // localStorage.getItem("counter__like");
    // console.log(localStorage.getItem("counter__like"))
    
  })
});

  



// подключаем api погоды
const kiyv = 703448;
const dubai = 292223;
const fastiv = 709248;

const urlApi = 'http://api.openweathermap.org/data/2.5/weather';

fetch(`${urlApi}?id=${kiyv}&units=metric&appid=c768c355b8819115b257ee9d30bf781b`)
    //конвертируем данние дата в json
     .then(function (resp) { return resp.json() }) 
    //  тут получаем данние в json
     .then(function (data) {                       
      //  console.log(data)
       document.querySelector('.city__name').innerHTML = data.name;
       document.querySelector('.city_temp').innerHTML = Math.round(data.main.temp) + '&deg';
       document.querySelector('.city__weather').innerHTML = data.weather[0].description;
   
       document.querySelector('.weather__wind').innerHTML = '<img src="/img/wind.png">'+'<br> ' + data.wind.speed + ' ' + 'm/s';
       document.querySelector('.weather__pressure').innerHTML = '<img src="/img/pressure.png">'+'<br> ' + data.main.pressure + ' ' + 'hPa';
       
     });                                         


     fetch('http://api.openweathermap.org/data/2.5/weather?id='+fastiv+'&units=metric&appid=c768c355b8819115b257ee9d30bf781b')
     //конвертируем данние дата в json
      .then(function (resp) { return resp.json() }) 
     //  тут получаем данние в json
      .then(function (data) {                       
        // console.log(data)
        document.querySelector('.dubai').innerHTML = data.name;
        document.querySelector('.dubai__temp').innerHTML = Math.round(data.main.temp) + '&deg';
        document.querySelector('.dubai__weather').innerHTML = data.weather[0].description;
    
        document.querySelector('.dubai__wind').innerHTML = '<img src="/img/wind.png">'+'<br> ' + data.wind.speed + ' ' + 'm/s';
        document.querySelector('.dubai__pressure').innerHTML = '<img src="/img/pressure.png">'+'<br> ' + data.main.pressure + ' ' + 'hPa';
        
      });                                         
 



// locale storage тест

const area = document.getElementById('area');
// console.log(area)

      area.value = localStorage.getItem('area');
      // console.log(area.value)
      area.oninput = () => {
      localStorage.setItem('area', area.value)
    };