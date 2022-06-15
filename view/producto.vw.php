
                    <?php include_once'includes/header-container.php';?>

                    <div class="card">
                        <div class="row">
                           <div class="col-md-5 ">
                           </div> 
                           <div class="col-md-7">
                            <div class="d-flex flex-wrap justify-content-center justify-content-sm-center justify-content-xl-end">
                              <div class="m-1"> 
                                <div class="btn-group mt-1">
                                    <button type="button" class="btn btn-success p-1" onclick="openProducto('nuevo')"> Agregar Nuevo/a</button>
                                </div>
                              </div> 

                              <div class="m-1"> 
                                <div class="btn-group mt-1">
                                  <button class="btn btn-primary p-1 dropdown-toggle" type="button" data-bs-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">Imprimir Reporte</button>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                  </div>
                                </div>
                              </div> 
                            </div>
                          </div> 
                        </div>

                        <div class="container-fluid"¿>
<table id="tblValores"  class="table table-secondary dt-responsive table-sm table-hover table-striped" style="border-collapse: collapse; border-spacing: 0; width: 100%;">                         
 <!-- <table id="tblValores" class="table table-bordered table-hover" style="width:100%"> -->
                            <thead>
                              <tr>
                                <th>Barra/Interno</th>
                                <th>Producto</th>
                                <th>Marca</th>
                                <th>Presentacion</th>
                                <th>S.Min.</th>
                                <th>Stock</th>
                                <th>P.Compra</th>
                                <th>Precio</th>
                                <th class="text-center">Opciones</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
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
                <div class="row mt-1">
                     <div class="col-sm-12 mt-3"> 
                        <input type="hidden"  id="txtID" name="txtID" class="form-control" value="">
                        <input type="hidden"  id="txtProceso" name="txtProceso" class="form-control" value="">
                        <div class="col-sm-6 mt-1">
                        <label>Codigo</label>
                        <input type="text" id="txtCodigo" name="txtCodigo" placeholder="AUTOGENERADO" class="form-control text-uppercase">
                        </div>
                    </div>   
                </div>

                <div class="row mt-1">
                      <div class="col-sm-12">
                        <label for="txtProducto" class="form-label">Producto</label>
                        <input type="text" class="form-control text-uppercase" id="txtProducto" name="txtProducto" required>
                      </div>
                </div>

                <div class="row mt-1">
                      <div class="col-sm-6 mt-1">
                        <label for="txtStock" class="form-label">Stock</label>
                        <div class="input-group"><span class="input-group-text">UND</span>
                            <input class="form-control number-input" id="txtStock" name="txtStock"  placeholder="00" required/>
                        </div>
                      </div>
                      <div class="col-sm-6 mt-1">
                        <label for="txtPCompra" class="form-label">Precio Compra</label>
                        <div class="input-group"><span class="input-group-text">S/.</span>
                            <input class="form-control number-decimal" id="txtPCompra" name="txtPCompra" type="text" placeholder="0.00" required/>
                        </div>
                      </div>
                </div>

                <div class="row mt-1">
                      <div class="col-sm-6 mt-1">
                        <label for="txtPVentaM" class="form-label">Precio Venta Mayor</label>
                        <div class="input-group"><span class="input-group-text">S/.</span>
                            <input class="form-control number-decimal" id="txtPVentaM" name="txtPVentaM" type="text" placeholder="0.00" required/>
                        </div>
                      </div>
                    
                      <div class="col-sm-6 mt-1">
                        <label for="txtPVenta" class="form-label">Precio Venta</label>
                        <div class="input-group"><span class="input-group-text">S./</span>
                            <input class="form-control number-decimal" id="txtPVenta" name="txtPVenta" type="text" placeholder="0.00" required/>
                        </div>
                      </div>

                </div>

                <div class="row mt-1">
                      <div class="col-sm-6 mt-1">
                        <label for="txtSMin" class="form-label">Stock Minimo</label>
                        <div class="input-group "><span class="input-group-text">S./</span>
                            <input class="form-control number-decimal" id="txtSMin" name="txtSMin" type="text" placeholder="0.00" required/>
                        </div>
                      </div>
                      <div class="col-sm-6 mt-1">
                        <label for="cbCategoria" class="form-label">Categoria</label>
                        <select class="form-select select2" id="cbCategoria" name="cbCategoria">
                        </select>
                      </div>
                </div>
                <div class="row mt-1"> 
                    <div class="col-lg-6">
                        <label>Marca</label>
                        <select class="form-select select2" id="cbMarca" name="cbMarca" required="required"></select>
                    </div>
                    <div class="col-lg-6">
                        <label>Presentacion</label>
                        <select class="form-select select2" id="cbPresentacion" name="cbPresentacion"></select>                           
                    </div>
                </div>

                <div class="row mt-3">
                         <div class="col-sm-4">
                            <label>
                             <input class="form-check-input switchery" type="checkbox" id="chkExento" name="chkExento" checked="checked">
                             <span id="lblchk-e">CON IGV</span>
                           </label>
                        </div>
                        <div class="col-sm-4">
                            <label>
                             <input class="form-check-input switchery" type="checkbox" id="chkInven" name="chkInven" checked="checked">
                             <span id="lblchk-i">INVENTARIABLE</span>
                           </label>
                        </div>
                        <div class="col-sm-4">
                            <label>
                             <input class="form-check-input switchery" type="checkbox"  id="chkEstado" name="chkEstado" checked="checked">
                             <span id="lblchk">VIGENTE</span>
                           </label>
                        </div>
                </div>
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

<?php include_once'includes/footer.php';
      include_once'includes/settings-off-canvas.php'; ?>

    <script src="web/custom-js/producto.js" type="text/javascript"></script>

  </body>


</html>

