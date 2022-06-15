
<div class="container-fluid">
        <?php
        include_once'includes/header-container.php';
        ?>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-row-reverse mb-2">
                           <button type="button" class="btn btn-success btn-sm" onclick="openCliente('nuevo')"> Agregar Nuevo/a</button>
                               <button id="loadData" class="btn btn-default">Load Data</button>

                    </div>
                    <table id="DataTableContent"  class="table  table-secondary datatable-basic dt-responsive table-sm table-hover table-striped" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead class="text-center">
                            <tr>
                                <th>No</th>
                                <th>Cliente</th>
                                <th>RUC/ DNI</th>
                                <th>Telefono</th>
                                <th>Estado</th>
                                <th class="text-center">opciones</th>
                            </tr>
                        </thead>
                        <tbody>


                    </table>
                </div>
            </div>
        </div> <!-- end col -->
    </div> <!-- end row -->
</div> <!-- container-fluid -->




<!--  ============= Modal iconificado   ============= -->
<div class="modal fade " id="modal_iconified" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                              <button class="btn-close cancel" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                        <div class="row">
                            <input type="hidden"  id="txtID" name="txtID" class="form-control" value="">
                            <input type="hidden"  id="txtProceso" name="txtProceso" class="form-control" value="">
                            <div class="col-sm-6">
                                <label>Codigo</label>
                                <input type="text" id="txtCodigo" name="txtCodigo" placeholder="AUTOGENERADO"
                                 class="form-control text-uppercase">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                            <div class="form-group">
                            <label for="" class="col-form-label">Nombre Cliente / Empresa</label>
                            <input type="text" class="form-control text-uppercase" id="txtCliente" name="txtCliente" placeholder="EJ. ABEL ALVARADO / DIR TRAVEL">
                            </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">DNI</label>
                            <input type="text" class="form-control text-uppercase" id="txtNIT" name="txtNIT">
                            </div>
                            </div>

                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">RUC</label>
                            <input type="text" class="form-control text-uppercase" id="txtNRC" name="txtNRC">
                            </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">Telefono</label>
                             <input type="text" class="form-control" name="txtTelefono" id="txtTelefono" >
                            </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">Email</label>
                             <input type="text" class="form-control" name="txtTelefono" id="txtTelefono" >
                            </div>
                            </div>
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">Giro</label>
                            <input type="text" class="form-control" id="txtContacto" name="txtContacto">
                            </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                            <div class="form-group">
                            <label for="" class="col-form-label">Direccion</label>
                             <input type="text" class="form-control" name="txtTelefonoC" id="txtTelefonoC" >
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
              <button class="btn btn-secondary cancel" type="button" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </form>
   </div>
  </div>
</div>

<?php include_once 'includes/footer.php';
      include_once 'includes/settings-off-canvas.php';
      ?>


<!--       <script src="web/vendors/jquery/jquery.min.js"></script>
      <script src="web/vendors/popper/popper.min.js"></script>
      <script src="web/vendors/bootstrap/bootstrap.min.js"></script>
      <script src="web/vendors/anchorjs/anchor.min.js"></script>
      <script src="web/vendors/is/is.min.js"></script>
      <script src="web/vendors/fontawesome/all.min.js"></script>
      <script src="web/vendors/lodash/lodash.min.js"></script>
      <script src="web/vendors/list.js/list.min.js"></script>
      <script src="web/assets/js/theme.js"></script>

      <script src="web/vendors/switchery-master/dist/switchery.js"></script>
      <script src="web/vendors/sweetalert2/sweetalert2.min.js"></script>
      <script src="web/vendors/datatable/js/datatables.min.js"></script>
      <script src="web/vendors/validate/validate.min.js"></script>
      <script src="web/vendors/select2/js/select2.min.js"></script>
      <script src="web/custom-js/global.js"></script>
      <script src="web/vendors/touchspin-master/dist/jquery.bootstrap-touchspin.min.js"></script> -->

      <script src="web/custom-js/cliente.js" type="text/javascript"></script>
  </body>
</html>
