<div class="container-fluid">
    <div class="row rounded bg-300 border border-400 p-1">
            <div class="col-md-6 ">
              <div id="row-caja" class="d-flex flex-row ">
                <div class="">
                    <h4>Administrar Caja - Movimientos de Caja</h4>
                    <small class="display-block">Fecha de Caja :<span id="fecha_apertura"></span> - <strong>
                    <span id="stado_caja"></span></strong></small>
                </div>
              </div>   
            </div> 
            <div class="col-md-6 align-self-center">
                <div id="div_estado_caja" class="d-flex flex-wrap justify-content-center justify-content-sm-center justify-content-xl-end">
            </div>
          </div> 
    </div>
</div>


<div class="container-fluid">
  <div class="row">
    <div class="col-md-5">
        <table class="table">
        <tbody>
          <tr>
            <td><i class="fas fa-square"  style="color:#37474F;" aria-hidden="true"></i></td>
            <td>Monto Inicial</td>
            <td><span class="simbolo"></span> <span id="txtinicial"></span><input type="hidden" id="txtvalinicial"></td>
          </tr>

            <td><i class="fas fa-square"  style="color:#5cb85c;" aria-hidden="true"></i></td>
            <td>INGRESOS</td>
            <td><span class="simbolo"></span> <span id="txtingreso"></span></td>
          </tr>
          <tr>
            <td><i class="fas fa-square"  style="color:#e9573f;" aria-hidden="true"></i></td>
            <td>DEVOLUCIONES</td>
            <td><span class="simbolo"></span> <span id="txtdevoluciones"></span></td>
          </tr>
          <tr>
            <td><i class="fas fa-square"  style="color:#f6bb42;" aria-hidden="true"></i></td>
            <td>PR&Eacute;STAMOS</td>
            <td><span class="simbolo"></span> <span id="txtprestamos"></span></td>
          </tr>
          <tr>
            <td><i class="fas fa-square"  style="color:#63d3e9;" aria-hidden="true"></i></td>
            <td>GASTOS</td>
            <td><span class="simbolo"></span> <span id="txtgastos"></span></td>
          </tr>
          <tr>
            <td></td>
            <td><b>INGRESOS TOTALES</b></td>
            <td><span class="simbolo"></span> <span id="txttotal"></span></td>
          </tr>
          <tr>
            <td></td>
            <td><b>EGRESOS TOTALES</b></td>
            <td><span class="simbolo"></span> <span id="txtegresos"></span></td>
          </tr>
          <tr>
            <td></td>
            <td><b>SALDO</b></td>
            <td><span class="simbolo"></span> <span id="txtsaldo"></span></td>
          </tr>
          <tr>
            <td></td>
            <td><b>MONTO INICIAL + SALDO</b></td>
            <td><span class="simbolo"></span> <span id="txtdiferencia"></span><input type="hidden" id="txtvaldiferencia"></td>
          </tr>

        </tbody>
      </table>    
    </div>
  </div>
</div>

<div class="container-fluid">

<!-- start row  table-->
    <div class="row">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="gasto">
              <button class="nav-link active" id="ingreso-tab" data-bs-toggle="tab" data-bs-target="#ingreso" type="button" role="tab" aria-controls="ingreso" aria-selected="true">INGRESOS <span class="badge bg-success-800">0</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="devolucion-tab" data-bs-toggle="tab" data-bs-target="#devolucion" type="button" role="tab" aria-controls="devolucion" aria-selected="false">DEVOLUCIONES <span class="badge bg-success-800">0</span></button>
            </li>
            <li class="nav-item" role="prestamo">
              <button class="nav-link" id="prestamo-tab" data-bs-toggle="tab" data-bs-target="#prestamo" type="button" role="tab" aria-controls="prestamo" aria-selected="false">PRESTAMOS <span class="badge bg-success-800">0</span></button>
            </li>
            <li class="nav-item" role="gasto">
              <button class="nav-link" id="gasto-tab" data-bs-toggle="tab" data-bs-target="#gasto" type="button" role="tab" aria-controls="gasto" aria-selected="false">GASTOS <span class="badge bg-success-800">0</span></button>
            </li>
          </ul>

        <div class="tab-content" id="myTabContent">
        <!-- container ingreso -->
            <div class="tab-pane fade show active" id="ingreso" role="tabpanel" aria-labelledby="ingreso-tab">
                <div id="DataTableIngreso">
                </div>
            </div>
            <!-- container devolucion -->
            <div class="tab-pane fade" id="devolucion" role="tabpanel" aria-labelledby="devolucion-tab">
                       <div id="DataTableDevoluciones">
                       </div>
            </div>
            <!-- container PRESTAMO -->
            <div class="tab-pane fade" id="prestamo" role="tabpanel" aria-labelledby="prestamo-tab">
                  <div id="DataTablePrestamos">
                  </div>
            </div>
            <!-- container GASTO -->
            <div class="tab-pane fade" id="gasto" role="tabpanel" aria-labelledby="gasto-tab">
                <div id="DataTableGastos">
                </div>
            </div>
        </div>
  </div> <!-- end row  table-->
</div> <!-- end fluid  table-->


 <!--  ============= Modal iconificado   ============= -->
<div class="modal fade" id="modal_iconified_movimiento" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog mt-6" role="document">
    <div class="modal-content border-0">
        <div class="position-absolute top-0 end-0 mt-3 me-3 z-index-1">
          <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
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

                <div class="mb-3 col-12">
                    <input type="hidden"  id="txtProceso" name="txtProceso" class="form-control" value="">    
                </div>

                <div class="row"> 
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label for="" class="col-form-label">Monto</label>
                            <input type="text" class="form-control" id="txtMonto" name="txtMonto" required/>
                        </div>               
                    </div>
                </div>
                <div class="row"> 
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label for="" class="col-form-label">Descripcion</label>
                            <input type="text" class="form-control text-uppercase" id="txtDescripcion" name="txtDescripcion">
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

                    <div class="mb-3 col-12">
                        <input type="hidden"  id="txtProceso" name="txtProceso" class="form-control" value="">    
                    </div>

                    <div class="row"> 
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label for="" class="col-form-label">Monto</label>
                                <input type="number" class="form-control" id="txtCantidad" name="txtCantidad" required/>
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

    <?php
          include_once'includes/footer.php';
          include_once'includes/settings-off-canvas.php';
     ?>
<!--     <script src="web/vendors/jquery/jquery.min.js"></script>
    <script src="web/vendors/popper/popper.min.js"></script>
    <script src="web/vendors/bootstrap/bootstrap.min.js"></script>
    <script src="web/vendors/anchorjs/anchor.min.js"></script>
    <script src="web/vendors/is/is.min.js"></script>
    <script src="web/vendors/fontawesome/all.min.js"></script>
    <script src="web/vendors/lodash/lodash.min.js"></script>
    <script src="web/vendors/list.js/list.min.js"></script>
    <script src="web/assets/js/theme.js"></script>
    <script src="web/vendors/switchery-master/dist/switchery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs5/jq-3.6.0/dt-1.11.2/r-2.2.9/datatables.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"></script>
    <script src="web/vendors/select2/js/select2.min.js"></script>
    <script src="web/custom-js/global.js"></script>-->
    <script type="text/javascript" src="web/custom-js/caja.js"></script> 
  </body>
</html>
