            <div class="container-fluid">
                    <?php include_once'includes/header-container.php';?>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-row-reverse mb-2">
                                       <button type="button" class="btn btn-success btn-md" onclick="openMarca('nuevo')"><i class="bx bx-plus icon-database-add"></i>  Agregar Nuevo/a</button>
                                </div>
                                <div id="DataTableContent">
                                </div>
                            </div>
                        </div>
                    </div> <!-- end col -->
                </div> <!-- end row -->
            </div> <!-- container-fluid -->

 <!--  ============= Modal iconificado   ============= -->
<div class="modal fade" id="modal_iconified" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog mt-6" role="document">
    <div class="modal-content border-0">
      <div class="position-absolute top-0 end-0 mt-3 me-3 z-index-1"><button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button></div>
        <div class="rounded-top-lg py-3 ps-4 pe-6 bg-light">
            <div class="d-flex flex-row">
              <div class="d-flex align-items-center"><span class="far fa-edit fs-1 text-dark"></span></div>
              <div class="d-flex align-items-center ms-1"><h4 class="modal-title">Title modal</h4></div>
            </div>
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

                <div class="mb-3 col-12">
                    <input type="hidden"  id="txtProceso" name="txtProceso" class="form-control" value="">    
                    <input type="hidden"  id="txtID" name="txtID" class="form-control text-uppercase" value="">
                </div>

                <div class="row"> 
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label for="" class="col-form-label">Marca</label>
                            <input type="text" class="form-control text-uppercase" id="txtMarca" name="txtMarca">
                        </div>               
                    </div>
                </div>

                <div class="row mt-3"> 
                    <div class="col-lg-6">
                        <div class="form-group" > 
                            <label>
                            <input type="checkbox" id="chkEstado" name="chkEstado"
                             class="switchery" checked="checked" >
                             <span id="lblchk">ACTIVO</span>
                           </label>
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
    <script src="web/custom-js/marca.js" type="text/javascript"></script>
  </body>


</html>
