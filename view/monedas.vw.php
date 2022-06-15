<div class="row mb-3">
        <div class="col-12">
        <?php include_once'includes/header-container.php';?>

        </div> <!-- end col -->
</div> <!-- end row -->






                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-row-reverse mb-2">
                                       <button type="button" class="btn btn-success btn-md" onclick="openMoneda('nuevo')"><i class="bx bx-plus icon-database-add"></i>  Agregar Nuevo/a</button>
                                </div>
                                <div id="DataTableContent">
                                </div>
                            </div>
                        </div>
                    </div> <!-- end col -->
                </div> <!-- end row -->

 <!--  ============= Modal iconificado   ============= -->
<div class="modal fade" id="modal_iconified" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog mt-6" role="document">
    <div class="modal-content border-0">
      <div class="position-absolute top-0 end-0 mt-3 me-3 z-index-1"><button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button></div>
        <div class="rounded-top-lg py-3 ps-4 pe-6 bg-light">
          <h4 class="mb-1 modal-title">Title modal</h4>
        </div>  
         <form  name="formvalidate">    
            <div class="modal-body">
                <div class="col-12">
                    <div class="alert alert-info border-2 d-flex align-items-center" role="alert">
                      <div class="bg-info me-3 icon-item"><span class="fas fa-info-circle text-white fs-3"></span></div>
                      <p class="mb-0 flex-1">Estimado usuario Los campos remarcados con<span class="text-danger"> * </span> son necesarios.</p>
                      <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div class="row"> 
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="hidden"  id="txtID" name="txtID" class="form-control" value="">
                            <input type="hidden"  id="txtProceso" name="txtProceso" class="form-control" value="">    
                            <label for="" class="col-form-label">Estandard ISO *</label>
                            <input type="text" class="form-control text-uppercase" id="txtIso" name="txtIso">
                        </div>               
                    </div>

                </div>

                <div class="row"> 
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="" class="col-form-label">Lenguaje  *</label>
                            <input type="text" class="form-control text-uppercase" id="txtLenguaje" name="txtLenguaje">
                        </div>               
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="" class="col-form-label">Nombre Completo *</label>
                           <input type="text" class="form-control text-uppercase" id="txtNombre" name="txtNombre">
                        </div>
                    </div>  
                </div>

                <div class="row"> 
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="" class="col-form-label">Nombre Moneda  *</label>
                            <input type="text" class="form-control text-uppercase" id="txtMoneda" name="txtMoneda">
                        </div>               
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="" class="col-form-label">Simbolo </label>
                           <input type="text" class="form-control text-uppercase" id="txtSimbolo" name="txtSimbolo">
                        </div>
                    </div>  
                </div>
            </div>
            <div class="modal-footer">
            <button id="btnGuardar" class="btn btn-primary" type="submit">Guardar </button>
            <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </form> 
    </div>
  </div>
</div>




<?php include_once'includes/footer.php';
      include_once'includes/settings-off-canvas.php'; ?>

    <script src="web/custom-js/global.js"></script>
    <script src="web/custom-js/moneda.js" type="text/javascript"></script>
  </body>


</html>
