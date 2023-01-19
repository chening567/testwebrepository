<?php
    $name = $_POST['forminput1'];
    $email = $_POST['forminput3'];
    $subject = $_POST['forminput2'];
    $message = $_POST['forminput4'];
    
    $mailHeader = "From:" .$name. "<" .$email. ">\r\n"; 

    $recipent = "youtbevedios@gamil.com"; 

    mail($recipent, $subject, $message, $mailHeader);
    or die("error!");

    echo "meassage sent!";
?>