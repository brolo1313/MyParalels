
const mailInput = document.getElementById('mail-input');

mailInput.onblur = function() {
    if (!mailInput.value.includes('@')) { // не email
        mailInput.classList.add('invalid');
        mailInput.placeholder = "wrong email"; 
    }else if (mailInput.value.includes('@')) {
        mailInput.classList.add('done');
    
    }

  };


  mailInput.onfocus = function() {
    if (this.classList.contains('invalid')) {
      // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
      mailInput.classList.remove('done');
      
    }
  };