<?php include("header.php");
    if(isset($_GET['msg'])) {
        $msg = $_GET['msg'];
    }
    if(isset($_GET['err'])) {
        $err = $_GET['err'];
    }
?>

<div class="container">
    <div class="row">
        <div class="col-lg-8 mx-auto text-end">
            <h1>ورود</h1>
            <?php if(isset($err)) : ?>
                <div class="alert alert-danger">
                    <h5><?php echo $err ?></h5>
                </div>
            <?php endif; ?>    
            <?php if(isset($msg)) : ?>
                <div class="alert alert-success">
                    <h5><?php echo $msg ?></h5>
                </div>
            <?php endif; ?>
            <form method="POST" action= "<?php echo htmlspecialchars("log.php"); ?>" onsubmit="return validLogin()">
                <div class="mb-3 text-end">
                    <label for="userNameLog" class="form-label">نام کاربری</label>
                    <input name="username" type="text" pattern="[آ-ی0-9-][0-9a-zA-Z]{4,12}" class="form-control" id="userNameLog" aria-describedby="emailHelp">
                </div>
                <div class="mb-3 text-end">
                    <label for="passWordLog" class="form-label">گذر واژه</label>
                    <input name="password" pattern="[0-9a-zA-Z]{4,8}" type="password" class="form-control" id="passWordLog" aria-describedby="emailHelp">
                </div>
                <div>
                    <input type="submit" class="btn btn-success">
                </div>
            </form>

        </div>
    </div>
</div>
<div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="deleteToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">

            <div class="toast-body">
            </div>
        </div>
        <div id="deleteToast2" class="toast" role="alert" aria-live="assertive" aria-atomic="true">

            <div class="toast-body">
            </div>
        </div>
        
</div>
<?php include("footer.php");  ?>