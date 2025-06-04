<?php
$severname = 'localhost';
$username_DB = 'root';
$password_DB = '';
$db_name = 'class_2_DB';

$conn = mysqli_connect($severname,$username_DB,$password_DB, $db_name);

if(!$conn) {
    die( "connection failed" . mysqli_connect_error());
}
