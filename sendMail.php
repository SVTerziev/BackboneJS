<?php
$name = array_key_exists("name", $_POST) ? htmlspecialchars($_POST['name']) : "";
$email = array_key_exists("email", $_POST) ? htmlspecialchars($_POST['email']) : "";
$message = array_key_exists("message", $_POST) ? htmlspecialchars($_POST['message']) : "";

if ($name && $email && $message) {
  echo '{"success": "All good"}';
} else {
  echo '{"error": "All fields must be filled"}';
}
?>
