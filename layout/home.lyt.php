<!DOCTYPE html>
<html lang="es-ES">

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

    <script type="text/javascript" src="./web/assets/js/config.js"></script>
    <script type="text/javascript" src="web/vendors/libraries/overlayscrollbars/OverlayScrollbars.min.js"></script>



    <!-- ===============================================-->
    <!--    Stylesheets  basic  config  css-->
    <!-- ===============================================-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700%7cPoppins:300,400,500,600,700,800,900&amp;display=swap" rel="stylesheet">
    <link href="web/vendors/libraries/overlayscrollbars/OverlayScrollbars.min.css" rel="stylesheet">
    <link href="web/assets/css/theme-rtl.min.css" rel="stylesheet" id="style-rtl">
    <link href="web/assets/css/theme.min.css" rel="stylesheet" id="style-default">
    <link href="web/assets/css/user-rtl.min.css" rel="stylesheet" id="user-style-rtl">
    <link href="web/assets/css/user.min.css" rel="stylesheet" id="user-style-default">
    <!-- ===============================================-->
    <!--    Stylesheets   Custom-->
    <!-- ===============================================-->
<!--     <link rel="stylesheet" href="web/vendors/plugins/datatable/datatables.min.css"/>
    <link rel="stylesheet" href="web/vendors/plugins/switchery/switchery.css">
    <link rel="stylesheet" href="web/vendors/plugins/select2/select2.min.css">
    <link rel="stylesheet" href="web/vendors/plugins/select2/select2-bootstrap-5.min.css">
    <link rel="stylesheet" href="web/vendors/plugins/validate/validate.min.css">
    <link rel="stylesheet" href="web/vendors/plugins/jquery_ui/jquery-ui.css"/>
    <link rel="stylesheet" href="web/vendors/plugins/datetimepicker/bootstrap-datetimepicker.css"/>
    <link rel="stylesheet" href="web/vendors/plugins/touchspin/touchspin.css"/>
    <link rel="stylesheet" href="web/vendors/plugins/pnotify/pnotify.min.css"/>
 -->





<!-- web/vendors/jquery/jquery.min.js -->


    <!-- ===============================================-->
    <!--    JavaScripts basic config init-->
    <!-- ===============================================-->
    <script  type="text/javascript" src="web/vendors/libraries/jquery/jquery.min.js"></script>
    <script  type="text/javascript" src="web/vendors/libraries/popper/popper.min.js"></script>
    <script  type="text/javascript" src="web/vendors/libraries/bootstrap/bootstrap.min.js"></script>
    <script  type="text/javascript" src="web/vendors/libraries/anchorjs/anchor.min.js"></script>
    <script  type="text/javascript" src="web/vendors/libraries/is/is.min.js"></script>
    <script  type="text/javascript" src="web/vendors/libraries/fontawesome/all.min.js"></script>
    <script  type="text/javascript" src="web/vendors/libraries/lodash/lodash.min.js"></script>
    <script  type="text/javascript" src="web/vendors/libraries/list-js/list.min.js"></script>
    <script  type="text/javascript" src="web/assets/js/theme.js"></script>

    <!-- ===============================================-->
    <!--    JavaScripts Custom -->
    <!-- ===============================================-->

<!--     <script type="text/javascript" src="web/vendors/plugins/datatable/datatables.min.js"></script>       
    <script type="text/javascript" src="web/vendors/plugins/switchery/switchery.js"></script>
    <script type="text/javascript" src="web/vendors/plugins/sweetalert2/sweetalert2.min.js"></script>
    <script type="text/javascript" src="web/vendors/plugins/select2/select2.min.js"></script>
    <script type="text/javascript" src="web/vendors/plugins/validate/validate.min.js"></script>   
    <script type="text/javascript" src="web/vendors/plugins/jquery_ui/jquery-ui.js"></script>   
    <script type="text/javascript" src="web/vendors/plugins/datetimepicker/bootstrap-datetimepicker.js"></script>   
    <script type="text/javascript" src="web/vendors/plugins/touchspin/touchspin.js"></script>  
    <script type="text/javascript" src="web/vendors/plugins/moment/moment.min.js"></script>  
    <script type="text/javascript" src="web/vendors/plugins/pnotify/pnotify.min.js"></script>   
 -->



    
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
    <!-- ===============================================-->
    <!--    Main Content-->
    <!-- ===============================================-->
    <main class="main" id="top">
      <div class="container" data-layout="container">
        <script>
          var isFluid = JSON.parse(localStorage.getItem('isFluid'));
          if (isFluid) {
            var container = document.querySelector('[data-layout]');
            container.classList.remove('container');
            container.classList.add('container-fluid');
          }
        </script>

         <nav class="navbar navbar-light navbar-vertical navbar-expand-xl" style="display: none;">
          <script>
            var navbarStyle = localStorage.getItem("navbarStyle");
            if (navbarStyle && navbarStyle !== 'transparent') {
              document.querySelector('.navbar-vertical').classList.add(`navbar-${navbarStyle}`);
            }
          </script>



        <?php 
      include_once'includes/navbar-main1.php';
       ?>
        

        <div class="content">

            <?php 
            include_once'includes/navbar-main2.php';
             ?>
             

                <script>
                  var navbarPosition = localStorage.getItem('navbarPosition');
                  var navbarVertical = document.querySelector('.navbar-vertical');
                  var navbarTopVertical = document.querySelector('.content .navbar-top');
                  var navbarTop = document.querySelector('[data-layout] .navbar-top');
                  var navbarTopCombo = document.querySelector('.content [data-navbar-top="combo"]');
                  if (navbarPosition === 'top') {
                    navbarTop.removeAttribute('style');
                    navbarTopVertical.remove(navbarTopVertical);
                    navbarVertical.remove(navbarVertical);
                    navbarTopCombo.remove(navbarTopCombo);
                  } else if (navbarPosition === 'combo') {
                    navbarVertical.removeAttribute('style');
                    navbarTopCombo.removeAttribute('style');
                    navbarTop.remove(navbarTop);
                    navbarTopVertical.remove(navbarTopVertical);
                  } else {
                    navbarVertical.removeAttribute('style');
                    navbarTopVertical.removeAttribute('style');
                    navbarTop.remove(navbarTop);
                    navbarTopCombo.remove(navbarTopCombo);
                  }
                </script>
  <?php 
        if(file_exists($pathView)){
          require($pathView);
        } else {
          require("./view/off.vw.php"); //Pagina Ops. Error Not Found (esto NO es 404)
        }
        ?>

 