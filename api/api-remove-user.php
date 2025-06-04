<?php 
if($_SERVER["REQUEST_METHOD"] === "POST") {
    $postedData = json_decode(file_get_contents("php://input", ), true);
    $user_id = $postedData["id"];
    $msg = [];
    require_once('../connection.php');
    $q_delete_user = "DELETE FROM `users` where id = '$user_id'";
    if(mysqli_query($conn, $q_delete_user)) {
        $msg["response"] = "user has deleted";
        $msg["status"] = "200";
        echo json_encode($msg);
    } else {
        $msg["response"] = "error";
        $msg["status"] = "500";
        echo json_encode($msg);
    }
} else {
    $msg = [];
    $msg["response"] = "method should be post not anything else";
    $msg["status"] = "500";
    echo json_encode($msg);
}