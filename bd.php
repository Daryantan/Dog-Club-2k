<?php
  $mysqli = @new mysqli('localhost', 'Admin', 'pass', 'myDB');
  if (mysqli_connect_errno()) {
    echo "Подключение невозможно: ".mysqli_connect_error();
  }
?>