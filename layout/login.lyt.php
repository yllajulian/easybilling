<!DOCTYPE html>
<html lang="en-US" dir="ltr">

  
<!-- Mirrored from prium.github.io/falcon/v3.3.0/pages/authentication/card/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 16 Sep 2021 20:28:58 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- ===============================================-->
    <!--    Document Title-->
    <!-- ===============================================-->
    <title>Falcon | Dashboard &amp; Web App Template</title>

    <!-- ===============================================-->
    <!--    Favicons-->
    <!-- ===============================================-->
    <link rel="apple-touch-icon" sizes="180x180" href="web/assets/img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="web/assets/img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="web/assets/img/favicons/favicon-16x16.png">
    <link rel="shortcut icon" type="image/x-icon" href="web/assets/img/favicons/favicon.ico">
    <link rel="manifest" href="web/assets/img/favicons/manifest.json">
    <meta name="msapplication-TileImage" content="web/assets/img/favicons/mstile-150x150.png">
    <meta name="theme-color" content="#ffffff">
    <script src="web/assets/js/config.js"></script>
    <script src="web/vendors/libraries/overlayscrollbars/OverlayScrollbars.min.js"></script>

    <!-- ===============================================-->
    <!--    Stylesheets-->
    <!-- ===============================================-->
    <link rel="preconnect" href="https://fonts.gstatic.com/">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700%7cPoppins:300,400,500,600,700,800,900&amp;display=swap" rel="stylesheet">
    <link href="web/vendors/libraries/overlayscrollbars/OverlayScrollbars.min.css" rel="stylesheet">
    <link href="web/assets/css/theme-rtl.min.css" rel="stylesheet" id="style-rtl">
    <link href="web/assets/css/theme.min.css" rel="stylesheet" id="style-default">
    <link href="web/assets/css/user-rtl.min.css" rel="stylesheet" id="user-style-rtl">
    <link href="web/assets/css/user.min.css" rel="stylesheet" id="user-style-default">

    <!-- ===============================================-->
    <!--    JavaScripts-->
    <!-- ===============================================-->
    <script type="text/javascript" src="web/vendors/libraries/popper/popper.min.js"></script>
    <script type="text/javascript" src="web/vendors/libraries/bootstrap/bootstrap.min.js"></script>
    <script type="text/javascript" src="web/vendors/libraries/anchorjs/anchor.min.js"></script>
    <script type="text/javascript" src="web/vendors/libraries/is/is.min.js"></script>
    <script type="text/javascript" src="web/vendors/libraries/fontawesome/all.min.js"></script>
    <script type="text/javascript" src="web/vendors/libraries/lodash/lodash.min.js"></script>
    <script type="text/javascript" src="web/vendors/libraries/list-js/list.min.js"></script>
    <script type="text/javascript" src="web/assets/js/theme.js"></script>

    <script type="text/javascript" src="web/vendors/libraries/jquery/jquery.min.js"></script>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"></script>



    <script>
      var isRTL = JSON.parse(localStorage.getItem('isRTL'));
      if (isRTL) {
        var linkDefault = document.getElementById('style-default');
        var userLinkDefault = document.getElementById('user-style-default');
        linkDefault.setAttribute('disabled', true);
        userLinkDefault.setAttribute('disabled', true);
        document.querySelector('html').setAttribute('dir', 'rtl');
      } else {
        var linkRTL = document.getElementById('style-rtl');
        var userLinkRTL = document.getElementById('user-style-rtl');
        linkRTL.setAttribute('disabled', true);
        userLinkRTL.setAttribute('disabled', true);
      }
    </script>
  </head>

  <body>
           <?php

                if(file_exists($pathView)){
                    require($pathView);
                } else {
                    require("./view/off.vw.php"); //Pagina Ops. Error Not Found (esto NO es 404)
                }
                ?>

