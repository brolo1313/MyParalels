 // СКРОЛ АНИМАЦИЯ НА БЛОКЕ ANIMATION ON

 let animationOnBlock = document.querySelector('.animation__on');
 let progressBar = document.querySelectorAll('.front');
 let blockSkills = document.querySelector('.block__ourskills')



 const scrollAnimation = () => {
       let windowCenter = (window.innerHeight / 2) + window.scrollY;
        
       progressBar.forEach(el => {
           let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
     
    
            console.log(windowCenter)
           if (windowCenter >= scrollOffset) {
               el.classList.add('anim__on');
           } else {
               el.classList.remove('anim__on');
           }
       });
   };

 scrollAnimation();
 

//  window.addEventListener('scroll', () => {
   
//        scrollAnimation();
//    });