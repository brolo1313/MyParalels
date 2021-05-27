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




