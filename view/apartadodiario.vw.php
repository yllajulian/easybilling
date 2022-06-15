                <div class="container-fluid">
                    <?php
                    include_once'includes/header-container.php';
                     ?>
                    <div class="row  rounded">
                        <div class="col-12 row-table-card">
                                  <div class="d-flex flex-row-reverse mb-2">
                                   <button type="button" class="btn btn-success" onclick="openEmpleado('nuevo')"><i class="bx bx-plus icon-database-add"></i>  Agregar Nuevo/a</button>
                                 </div>
                                <div class="table-card">

                                <div id="DataTableContent">
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
                    <h5 class="modal-title">Modal Heading</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <form  name="registration">    
                    <div class="modal-body">
                        <div class="alert alert-info alert-dismissible fade show mb-4 " role="alert">
                            <div class="icon hidden-xs"> <i class="fa fa-exclamation-circle"></i>
                            </div>                                         
                            <span class="text-semibold">Estimado usuario Los campos remarcados con 
                                 <span class="text-danger"> * </span> son necesarios.
                            </span>
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>

                        <div class="row">
                            <input type="hidden"  id="txtID" name="txtID" class="form-control" value="">
                            <input type="hidden"  id="txtProceso" name="txtProceso" class="form-control" value="">                                                
                            <div class="col-sm-6">
                                <label>Codigo</label>
                                <input type="text" id="txtCodigo" name="txtCodigo" placeholder="AUTOGENERADO"
                                 class="form-control" style="text-transform:uppercase;"
                                onkeyup="javascript:this.value=this.value.toUpperCase();" readonly="" disabled="disabled">
                            </div>
                        </div>

                        <div class="row"> 
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" name="nombre">
                            </div>               
                            </div>
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">Apellido</label>
                            <input type="text" class="form-control" id="apellido" name="apellido">
                            </div>
                            </div>  
                        </div>
                        <div class="row"> 
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">Telefono</label>
                            <input type="text" class="form-control" id="telefono">
                            </div>               
                            </div>
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">Email</label>
                            <input type="text" class="form-control" id="email">
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


<?php 
      include_once'includes/footer.inc.php';
 ?>
 </body>
        <script src="web/custom-js/global.js" type="text/javascript"></script>
        <script src="web/custom-js/empleado.js" type="text/javascript"></script>

</html>