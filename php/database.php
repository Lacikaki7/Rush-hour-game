<?php

$hostName = "mysql.caesar.elte.hu";
$dbUser = "orbanlaszlo";
$dbPassword = "JhEumyMe6utnE8R3";
$dbName = "orbanlaszlo";
$conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName);
mysqli_set_charset($conn, "utf8");
if (!$conn) {
    die("Something went wrong;");
}

?>