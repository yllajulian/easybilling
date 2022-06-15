            <div class="container-fluid">
                    <?php include_once'includes/header-container.php';?>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-row-reverse mb-2">
                                       <button type="button" class="btn btn-success btn-md" onclick="openPresentacion('nuevo')"><i class="bx bx-plus icon-database-add"></i>  Agregar Nuevo/a</button>
                                </div>
                                <div id="DataTableContent">
                                </div>
                            </div>
                        </div>
                    </div> <!-- end col -->
                </div> <!-- end row -->
            </div> <!-- container-fluid -->

    <!-- thi is modal  document-->
    <div id="modal_iconified" class="modal fade" tabindex="-1" role="dialog"  aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="mx-2 "><i class="fas fa-pencil-alt"></i> </span>
                    <h5 class="modal-title ">Modal Heading</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <form  name="formvalidate">    
                    <div class="modal-body">
                        <div class="alert alert-info alert-dismissible fade show mb-4 " role="alert">
                            <div class="icon hidden-xs"> <i class="fa fa-exclamation-circle"></i>
                            </div>                                         
                            <span class="text-semibold">Estimado usuario Los campos remarcados con 
                                 <span class="text-danger"> * </span> son necesarios.
                            </span>
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>

                        <div class="mb-3 col-12">
                            <input type="hidden"  id="txtProceso" name="txtProceso" class="form-control" value="">    
                            <input type="hidden"  id="txtID" name="txtID" class="form-control text-uppercase" value="">


                            </select>
                        </div>

                        <div class="row"> 
                            <div class="col-lg-7">
                                <div class="form-group">
                                    <label for="" class="col-form-label">Presentacion</label>
                                    <input type="text" class="form-control text-uppercase" id="txtPresentacion" name="txtPresentacion">
                                </div>               
                            </div>
                            <div class="col-lg-5">
                                <div class="form-group">
                                    <label for="" class="col-form-label">Siglas</label>
                                    <input type="text" class="form-control text-uppercase" id="txtSiglas" name="txtSiglas">
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
                    <button type="submit" id="btnGuardar" class="btn btn-primary  waves-effect">Guardar</button>
                    <button type="button" class="btn btn-secondary btn-soft-secondary waves-effect" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </form> 

            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.end modal -->

<?php include_once'includes/footer.php';
      include_once'includes/settings-off-canvas.php'; ?>


    <script src="web/custom-js/global.js"></script>

    <script src="web/custom-js/presentacion.js" type="text/javascript"></script>
  </body>


</html>
