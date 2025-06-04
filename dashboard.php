<?php include('header.php');
$user_id = $_SESSION["id_user"];
require_once("connection.php");
if ($_SESSION["role"] == "admin") {
    $q_select_users = "SELECT * FROM users";
} else {
    $q_select_users = "SELECT * FROM users WHERE id = '$user_id'";
}
$res = mysqli_query($conn, $q_select_users);


?>
<div class="container">
    <div class="row my-5">
        <div class="col-lg-8 mx-auto">
            <table class="table table-light">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">phoneNumber</th>
                        <th scope="col">userProfile</th>
                        <th scope="col">register Dater</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php while($item = mysqli_fetch_assoc($res)) : ?>
                    <tr>
                        <td><?= $item["id"] ?></td>
                        <td><?= $item["username"] ?></td>
                        <td><?= $item["email"] ?></td>
                        <td><?= $item["phoneNumber"] ?></td>
                        <td><img class="w-100 h-100 rounded-3" src="<?= $item["image_url"] ?>" alt="userProfile"></td>
                        <td><?= $item["reg_date"] ?></td>
                        <td>
                            <?php if($_SESSION["role"] === "admin") : ?>
                            <button class="w-100 btn btn-danger"  onclick= "removeData(<?= $item['id']; ?>)" >remove</button>
                            <?php endif; ?>
                            <button class="w-100 btn btn-info">edit</button>
                        </td>
                    </tr>
                    <?php endwhile; ?> 
                </tbody>
            </table>
        </div>
    </div>
</div>





















<?php include('footer.php'); ?>