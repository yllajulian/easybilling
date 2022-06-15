<div class="container-fluid">
        <?php include_once'includes/header-container.php';?>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                <div class="row">
                            <div class="col-lg-12 mb-3">
                                <div class="h1-bg-orange">
                                    <span class="kardex-title">Title kardex</span>
                                </div>
                            </div>
                            <div class="row head_kardek">
                                   <div class="col-md-7 ">
                                            <div class="col-sm-7 col-md-7 col-lg-6">
                                                <form role="form" autocomplete="off" class="form-validate-jquery" id="frmSearch">
                                                    <div class="input-group">
                                                      <input type="text" class="form-control input-sm flatpickr dFormatMonth" id="txtMes" name="txtMes" placeholder="...." aria-label="Recipient's username with two button addons">
                                                    <button style="margin-top: 0px;" id="btnBuscar" type="submit" class="btn btn-outline-info btn-sm"><i class="icon-search4"></i> Consultar</button>
                                                    </div>
                                                </form>
                                            </div>
                                    </div> 

                                    <div class="col-md-5 align-self-center">
                                        <div class="d-flex flex-wrap justify-content-center  justify-content-sm-center justify-content-xl-end">
                                          <div class="p-1">      
                                            <div class="btn-group">
                                              <button class="btn btn-danger btn-sm py-1 dropdown-toggle" type="button" data-bs-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">Imprimir Reporte</button>
                                              <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#"><span class="far fa-hand-point-left"></span> Saldo & Movimien..</a>
                                                <a class="dropdown-item" href="#"><span class="far fa-hand-point-left"></span> Entradas del Mes</a>
                                                <a class="dropdown-item" href="#"><span class="far fa-hand-point-left"></span> Salidas del Mes</a>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="p-1">      
                                            <div class="btn-group">
                                              <button class="btn btn-info btn-sm py-1 dropdown-toggle" type="button" data-bs-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false"> Requistro Movimiento</button>
                                              <div class="dropdown-menu dropdown-menu-end">

                                                <a id="new_entrada" class="dropdown-item" href="#"><span class="far fa-hand-point-left"></span> Registrar Entrada</a>
                                                <a id="new_salida" class="dropdown-item" href="#"><span class="far fa-hand-point-right"></span> Registrar Salida</a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                    </div> 
                            </div>
                        </div>

<!--                                 <div class="d-flex flex-row-reverse mb-2">
                           <button type="button" class="btn btn-success btn-md" onclick="openCategoria('nuevo')"><i class="bx bx-plus icon-database-add"></i>  Agregar Nuevo/a</button>
                    </div> -->
                    <hr>
                    <div id="DataTableContent">
                    </div>
                </div>
            </div>
        </div> <!-- end col -->
    </div> <!-- end row -->
</div> <!-- container-fluid -->








                                <div class="row" id="DataTableContent">
                                </div>                                


 <!--  ============= Modal iconificado   ============= -->
<div class="modal fade" id="modal_iconified" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog mt-6" role="document">
    <div class="modal-content border-0">
      <div class="position-absolute top-0 end-0 mt-3 me-3 z-index-1">
        <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base cancel" data-bs-dismiss="modal" aria-label="Close"></button></div>
        <div class="rounded-top-lg py-3 ps-4 pe-6 bg-light"><h4 class="mb-1 modal-title">Title modal</h4></div>  
        <!-- Form Init -->
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
                        <div class="row mt-1">
                             <div class="col-sm-12 mt-3"> 
                                <input type="hidden"  id="txtID" name="txtID" class="form-control" value="">
                                <input type="hidden"  id="txtProceso" name="txtProceso" class="form-control" value="">
                                <div class="col-sm-6 mt-1">
                                </div>
                            </div>   
                        </div>

                        <div class="form-group">
                            <div class="row mt-1">
                                <div class="col-sm-12">
                                    <label>Producto <span class="text-danger"> * </span></label>
                                    <select  data-placeholder="..." id="cbProducto" name="cbProducto" 
                                        class="select2-modal">

                                    </select>
                                </div>
                            </div>
                        </div>

                            <div class="row"> 
                                <div class="col-lg-6">

                                    <label >Tipo Usuario</label>
                                    <select  id="cbMotivo" name="cbMotivo"  class="form-select select2-modal">
                                        <option id="" value=""></option>
                                        <option id="IN-INI" value="POR INVENTARIO INICIAL">POR INVENTARIO INICIAL</option>
                                        <option value="POR AJUSTE DE INVENTARIO">POR AJUSTE DE INVENTARIO</option>
                                        <option id="AVERIA" value="POR AVERIA DE PRODUCTO">POR AVERIA DE PRODUCTO</option>
                                        <option id="PROMOCIONAL" value="POR PROMOCIONAL DE PROVEEDOR">POR PROMOCIONAL DE PROVEEDOR</option>
                                        <option value="POR CANJE DE PROVEEDOR">POR CANJE DE PROVEEDOR</option>
                                    </select>                            
                                    
                                </div>
                                <div class="col-lg-6">
                                    <label>Cantidad Movimiento</label>
                                        <input type="text" id="txtCant" name="txtCant" placeholder="0.00"
                                        class="form-control text-number">
                                </div>

                            </div>




       <!--                  <div class="form-group">
                            <div class="row mt-1">
                                <div class="col-sm-6">
                                    <label>Motivo <span class="text-danger"> * </span></label>
                                    <select  data-placeholder="..." id="cbMotivo" name="cbMotivo" 
                                        class="select-search select2-modal" style="text-transform:uppercase;" 
                                        onkeyup="javascript:this.value=this.value.toUpperCase();">
                                        <option id="" value=""></option>
                                        <option id="IN-INI" value="POR INVENTARIO INICIAL">POR INVENTARIO INICIAL</option>
                                        <option value="POR AJUSTE DE INVENTARIO">POR AJUSTE DE INVENTARIO</option>
                                        <option id="AVERIA" value="POR AVERIA DE PRODUCTO">POR AVERIA DE PRODUCTO</option>
                                        <option id="PROMOCIONAL" value="POR PROMOCIONAL DE PROVEEDOR">POR PROMOCIONAL DE PROVEEDOR</option>
                                        <option value="POR CANJE DE PROVEEDOR">POR CANJE DE PROVEEDOR</option>
                                    </select>
                                </div>

                                <div class="col-sm-6">
                                    <label>Cantidad Movimiento</label>
                                        <input type="text" id="txtCant" name="txtCant" placeholder="0.00"
                                        class="touchspin-prefix" style="text-transform:uppercase;" 
                                         onkeyup="javascript:this.value=this.value.toUpperCase();">
                                </div>

                            </div>
                        </div> -->

            </div>
            <!-- footer init -->
            <div class="modal-footer">
                <button id="btnGuardar" class="btn btn-primary" type="submit">Guardar </button>
                <button class="btn btn-secondary cancel" type="button" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </form> 
    </div>
  </div>
</div>







    <?php
          include_once'includes/footer.php';
          include_once'includes/settings-off-canvas.php';
     ?>
    <script src="web/custom-js/global.js"></script>
    <script type="text/javascript" src="web/custom-js/kardex.js"></script>
  </body>
</html>
