<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>فروشگاه برخط</title>
    <link rel="stylesheet" href="./asset/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./asset/css/style.css" />
    <link rel="stylesheet" href="./asset/css/all.min.css">
  </head>



  <body onload="getDataSingle()">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid flex-row-reverse">
        <a class="navbar-brand" href="index.php"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 flex-row-reverse">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.php">خانه</a>
            </li>
            <li class="nav-item">
              <a class="nav-link Myclock"></a>
            </li>

            <?php if(!isset($_SESSION["username"])) : ?>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="register.php">
                 <?php echo 'نام نویسی'; ?>
              </a>
              </li>
            <?php endif; ?>

            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="<?php echo isset($_SESSION["username"])? "dashboard.php" : "login.php" ; ?>">
                <?php echo isset($_SESSION["username"])? $_SESSION["username"] : "ورود" ; ?>
            </a>
            </li>
            <?php if(isset($_SESSION["username"])) : ?>
            <li class="nav-item">
              <a class="nav-link" href="logout.php">
                <?php echo "خروج"; ?>
              </a>
            </li>
            <?php endif; ?>
            <li class="nav-item cart">
              <a href="shoppingcart.php" class="nav-link position-relative">
                <span class="badge bg-danger position-absolute top-0 start-0"
                          id="count-products">0</span>
                <i class="fa-solid fa-basket-shopping mt-2"></i>
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    <div class="container">
        <div class="row" id="loading">
            <div class="col-8 my-3 mx-auto">
                <div class="card mt-3 mx-auto" aria-hidden="true">
                    <img  class="card-img-top bg-success-subtle w-100 h-50">
                    <div class="card-body">
                      <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-12"></span>
                        <span class="placeholder col-12"></span>
                      </h5>
                      <p class="card-text placeholder-glow">
                        <span class="placeholder col-4 mt-4"></span>
                        <span class="placeholder col-12 mt-5"></span>
                        <span class="placeholder col-12"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                      </p>
                    </div>
                </div>
            </div>
    ` 
        </div>
        <div class="row res-single">

        </div>
    </div>
    

    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        
        <div class="toast-body">
        </div>
      </div>
    </div>
<?php include("footer.php"); ?>