
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





