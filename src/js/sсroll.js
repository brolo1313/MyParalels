 // СКРОЛ АНИМАЦИЯ НА БЛОКЕ ANIMATION ON

 let animationOnBlock = document.querySelectorAll('.block_card');
 let progressBar = document.querySelectorAll('.front');
 let blockSkills = document.querySelector('.block__ourskills')
 let blockService = document.querySelectorAll('.block-service');
 

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


// анимация about us progress line

 observer = new IntersectionObserver((entries) => {
    console.log(entries[0]);
    // console.log(progressBar);
    entries.forEach(entry =>  {
        if(entry.isIntersecting === true) {
            // entries[0].target.style.animation = 'rotate-one 3s forwards ease-out';
            entry.target.classList.add ('anim__on');
            entry.target.webkitAnimationPlayState="running";
           
        }
        else {
            entry.target.classList.remove ('anim__on');
            // blockSkills.parentNode.removeChild(blockSkills);
        }
       })
    })




progressBar.forEach(progress => {
    observer.observe(progress)
})




observer = new IntersectionObserver((entries) => {
    console.log(entries[0]);
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




//     progresLine.forEach(animation => {
//     observer.observe(animation)
// })




