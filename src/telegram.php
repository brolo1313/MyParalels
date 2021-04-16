<?php

/* https://api.telegram.org/bot1733019307:AAHVZjZb8mD95UCsIeqo2OrDrBMyame5qjU/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

$token = "1733019307:AAHVZjZb8mD95UCsIeqo2OrDrBMyame5qjU";
$chat_id = "-356258135";
$arr = array(
    'Имя пользователя :' => $name,
    'Email :' => $email,
    'ТЕКСТ :' => $text
    
);
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

  if ($sendToTelegram) {
    header('Location: thank-you.html');
    // echo "Спасибо";
  } else {
    echo "Error";
  }


?>