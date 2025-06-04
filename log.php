<?php
session_start();
if($_SERVER["REQUEST_METHOD"] === "POST") {
    $user_name = validation($_POST["username"]);
    $password = validation($_POST["password"]);
    
    require_once("connection.php");
    $q_select_user = "SELECT * FROM users WHERE username = '$user_name'";
    $res =  mysqli_query($conn, $q_select_user);

    if(mysqli_num_rows($res) > 0) {
        $res_user = mysqli_fetch_assoc($res);

        if(password_verify($password, $res_user["password"])) {
            $_SESSION["username"] = $res_user["username"];
            $_SESSION["role"] = $res_user["role"];
            $_SESSION["id_user"] = $res_user["id"];
            header(header: "Location: index.php?msg= $user_name خوش آمدی");
        } else {
            header(header: "Location: login.php?err=!گذرواژه نادرست است");
            die;
        }
    } else {
        header(header: "Location: login.php?err=!نام کاربری وجود ندارد! ثبت نام بفرمایید");
        die;
    }
}


function validation($val) {
    $val = htmlspecialchars($val);
    $val = trim($val);
    $val = stripslashes($val);
    return $val;
}