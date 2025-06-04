<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_name = validation($_POST["username"]); 
    $pass = validation($_POST["password"]);
    $pass_hash = password_hash($pass, PASSWORD_DEFAULT);
    $email = validation(val: $_POST["email"]);
    $phoneNumber = validation(val: $_POST["phoneNumber"]);
    $file_dir = "uploads/";
    $target_file = $file_dir . basename($_FILES["userProfile"]["name"]);
    $is_upload = true;
    $type_file = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    $check_image = getimagesize($_FILES["userProfile"]["tmp_name"]);
    
    if(!$check_image) {
        header("Location: register.php?err=فایل خالی است");
        $is_upload = false;
        die;
    }

    if(file_exists($target_file)) {
        header("Location: register.php?err=فایل تکراری");
        $is_upload = false;
        die;
    }

    if($_FILES["userProfile"]["size"] > 500000) {
        header("Location: register.php?err= حجم فایل زیاد است لطفا تصویر پروفایل با حجم کمتر بارگذاری کنید!");
        $is_upload = false;
        die;
    }

    if($type_file != "jpeg" &&
       $type_file != "png" &&
       $type_file != "jpg"
    ) {
        header(header: "Location: register.php?err=فرمت تصویر پذیرفتنی نیست");
        $is_upload = false;
        die;
    } 
    
    require_once('connection.php');
    $q_user_checker = "SELECT * FROM users WHERE username = '$user_name'";
    $result = mysqli_query(mysql: $conn, query: $q_user_checker);
    if(mysqli_num_rows($result) > 0) {
        $res_check_user = mysqli_fetch_assoc($result);
        if($res_check_user["username"] === $user_name) {
            header(header: "Location: register.php?err= کاربر پیش از این نامنویسی نموده پس وارد شوید!");
            $is_upload = false;
            die;
        } else {
            $is_upload = true;
        }
    }
    
    if($is_upload) {
        if(move_uploaded_file($_FILES["userProfile"]["tmp_name"], $target_file)) {
            require_once("connection.php");
            $q_insert_user = "INSERT INTO users (username, email, phoneNumber, password, image_url) 
            VALUES ('$user_name', '$email','$phoneNumber', '$pass_hash', '$target_file')";

            if(mysqli_query($conn, $q_insert_user)) {
                header("Location: register.php?msg=ثبت نام موفقیت آمیز بود");
                die;
            } else {
                header("Location: register.php?err=ثبت نام انجام نشد");
                die;
            }
        } else {
            header("Location: register.php?err=آپلود نشد");
            die;
        }
    } else {
        header(header: "Location: register.php?err=فایل آپلود نشد");
        die;
    }
};
mysqli_close($conn);

function validation($val)
{
    $val = htmlspecialchars($val); //turn it into string for safety
    $val = trim($val); //removing the blank spaces of the text
    $val = stripslashes($val); //also removing the  / that hackers not be able to put address in our data;
    return $val;
}
