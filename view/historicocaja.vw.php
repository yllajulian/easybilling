            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">

                              <div class="row">
                                <div class="col-sm-12 col-md-10 col-lg-6">
                                  <form role="form" autocomplete="off" class="form-validate-jquery" name="formvalidate">
                                    <div class="form-group">
                                      <div class="row">
                                        <div class="col-sm-12 col-md-5">

                                        <div class="input-group input-group-sm mb-3"><span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                                          <input class="form-control datetimepicker" type="text" id="txtF1" name="txtF1" placeholder=""/>
                                        </div>


                                        </div>
                                        <div class="col-sm-12 col-md-5">
                                        <div class="input-group input-group-sm mb-3"><span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                                          <input class="form-control datetimepicker" type="date" id="txtF2" name="txtF2" placeholder="" />
                                        </div>
 
                                        </div>
                                        <div class="col-sm-12 col-md-2">
                                          <button style="margin-top: 0px;" id="btnBuscar" type="submit" class="btn btn-info btn-sm"> 
                                          <i class="icon-search4"></i> Consultar</button>
                                        </div>
                                      </div>
                                    </div>
                                    </form>
                                    </div>
                                </div>
                                <div id="DataTableContent">
                                </div>
                            </div>
                        </div>
                    </div> <!-- end col -->
                </div> <!-- end row -->
            </div> <!-- container-fluid -->



<?php include_once'includes/footer.php';
      include_once'includes/settings-off-canvas.php'; ?>


    <script src="web/custom-js/global.js"></script>

    <script src="web/custom-js/hcaja.js" type="text/javascript"></script>


  </body>


</html>

