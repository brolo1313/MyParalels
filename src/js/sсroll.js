 // СКРОЛ АНИМАЦИЯ НА БЛОКЕ ANIMATION ON

 let animationOnBlock = document.querySelector('.animation__on');
 let progressBar = document.querySelector('.front');
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

//  scrollAnimation();
 





// const callbackFunction = function(entries) {
//     console.log(entries[0]);
// }

// const observer = new IntersectionObserver(callbackFunction,{
//     threshold:[0.5]
// });

// observer.observe(blockSkills);

const observer = new IntersectionObserver((entries) => {
    console.log(entries);

    if(entries[0].intersectionRatio > 0) {
        entries[0].target.style.animation = 'rotate-one 2s forwards easy-out';

    }
    else {
        entries[0].target.style.animation = 'none'
    }
})


observer.observe(blockSkills)