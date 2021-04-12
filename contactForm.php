<?php

if (isset($_POST['submit'])) {

    $name=$_POST['name'];
    $mailFrom=$_POST['email'];
    $message=$_POST['message'];    

    $mailTo = "danmarian915@yahoo.com";
    $header = "From: ".$mailFrom;
    $txt = "You have recieved a mail from ".$name.".\n\n".$message;
    $subject = "Personal Portfolio Mail";

    mail($mailTo, $subject, $txt, $header);
   
    echo "Message sent!";
}  
?>
