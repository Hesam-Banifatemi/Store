<?php 
    include("header.php");
    if(isset($_GET["msg"])) {
        $msg = $_GET["msg"];
    }
 ?>


    <div class="container">
        <?php if(isset($msg)) : ?>
            <div id="myAlert" class="mt-3 alert alert-success w-25 ms-auto text-end">
                <h3 id="myText"><?php echo $msg; ?></h3>
            </div>
        <?php endif; ?>
        <div class="row" id="loading">
            
        </div>
        

        <div class="row res">
        
        </div>
    </div>
    <?php include("footer.php");  ?>
