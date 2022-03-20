<?php

// получим данные с элемнтов формы

$login = $_POST['login'];
$email = $_POST['email'];
$text = $_POST['text'];

//Обработаем полученные данные
$login = htmlspecialchars['login'];  //преобразование символов в сущности(мнемоники)
$email = htmlspecialchars['email'];
$text = htmlspecialchars['text'];


$login = urldecode['login'];  // декодирвоание url
$email = urldecode['email'];
$text = urldecode['text'];


$login = trim['login'];  // удаление пробельных символов с обоих сторон
$email = trim['email'];
$text = trim['text'];


// отправка данных адресату

if (mail("brolo1341@gmail.com",
         "Новое письмо с сайта",
         "Имя: ".$login." \n".
         "E-mail: ".$email." \n".
         "Сообщение: ".$text." \n".
         "From: htmlbody921@gmail.com \r\n")
){
    echo ('Письмо успешно  отправлено');
}
else {
    echo ('Есть ошибки ! Повторите попытку');
}


?>