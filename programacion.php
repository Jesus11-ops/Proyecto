<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userEmail = $_POST["email"];
    $message = $_POST["message"];
    $recipientEmail = "castellanoj914@gmail.com"; // Dirección de correo preestablecida

    $to = $recipientEmail;
    $subject = "Nuevo mensaje desde el sitio web";
    $headers = "From: $userEmail";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>