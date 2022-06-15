          <div class="d-flex align-items-center">
            <div class="toggle-icon-wrapper">
              <button class="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
            </div><a class="navbar-brand" href="./?View=Inicio">
              <div class="d-flex align-items-center py-3"><img class="me-2" src="web/assets/img/icons/spot-illustrations/falcon.png" alt="" width="40" /><span class="font-sans-serif">WAYRA</span></div>
            </a>
          </div>

<!-- ===============================================-->
<!--    navbar-VerticalMenu -->
<!-- ===============================================-->

          <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
            <div class="navbar-vertical-content scrollbar">
              <ul class="navbar-nav flex-column mb-3" id="navbarVerticalNav">

                <li class="nav-item">
                     <a class="nav-link" href="./?View=Inicio" role="button" aria-expanded="false">
                    <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-home"></span></span><span class="nav-link-text ps-1"> INICIO</span></div>
                  </a>
                </li>

                <hr class="mb-0 navbar-vertical-divider"/>

                <li class="nav-item">
                  <!-- ALMACEN-->
                 <a class="nav-link dropdown-indicator" href="#m-venta" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="m-venta">
                   <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-cart-plus"></span></span><span class="nav-link-text ps-1"> Ventas</span></div>
                 </a>
                 <ul class="nav collapse false" id="m-venta">
                   <li class="nav-item"><a class="nav-link" href="./?View=Facturar" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Realizar Venta</span></div>
                     </a><!-- more inner pages-->
                   </li>
                   <li class="nav-item"><a class="nav-link" href="./?View=Clientes" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Clientes</span></div>
                     </a><!-- more inner pages-->
                   </li>
                   <li class="nav-item"><a class="nav-link" href="./?View=Categoria" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Consultar ventas del dia</span></div>
                     </a><!-- more inner pages-->
                   </li>
                   <li class="nav-item"><a class="nav-link" href="./?View=Presentacion" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Consultar ventas por fecha</span></div>
                     </a><!-- more inner pages-->
                   </li>
                   <li class="nav-item"><a class="nav-link" href="./?View=Presentacion" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Consultar ventas por mes</span></div>
                     </a><!-- more inner pages-->
                   </li>
                 </ul>
                   <!-- ALMACEN-->
                  <a class="nav-link dropdown-indicator" href="#m-almacen" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="m-almacen">
                    <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-box-open"></span></span><span class="nav-link-text ps-1"> Almacen</span></div>
                  </a>
                  <ul class="nav collapse false" id="m-almacen">
                    <li class="nav-item"><a class="nav-link" href="./?View=Producto" aria-expanded="false">
                        <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Producto</span></div>
                      </a><!-- more inner pages-->
                    </li>
                    <li class="nav-item"><a class="nav-link" href="./?View=Marca" aria-expanded="false">
                        <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Marca</span></div>
                      </a><!-- more inner pages-->
                    </li>
                    <li class="nav-item"><a class="nav-link" href="./?View=Categoria" aria-expanded="false">
                        <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Categoria</span></div>
                      </a><!-- more inner pages-->
                    </li>
                    <li class="nav-item"><a class="nav-link" href="./?View=Presentacion" aria-expanded="false">
                        <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Presentacion</span></div>
                      </a><!-- more inner pages-->
                    </li>
                  </ul>

                  <!-- CAJA-->
                 <a class="nav-link dropdown-indicator" href="#m-caja" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="m-user">
                   <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-cash-register"></span></span><span class="nav-link-text ps-1"> Caja</span></div>
                 </a>
                 <ul class="nav collapse false" id="m-caja">
                   <li class="nav-item"><a class="nav-link" href="./?View=Caja" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Administrar Caja</span></div>
                     </a><!-- more inner pages-->
                   </li>
                   <li class="nav-item"><a class="nav-link" href="./?View=Historico-Caja" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Historial Caja</span></div>
                     </a><!-- more inner pages-->
                   </li>
                 </ul>

                  <!-- COMPRAS-->
                 <a class="nav-link dropdown-indicator" href="#m-compra" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="m-compra">
                   <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-truck"></span></span><span class="nav-link-text ps-1"> Compras</span></div>
                 </a>
                 <ul class="nav collapse false" id="m-compra">
                   <li class="nav-item"><a class="nav-link" href="./?View=Proveedor" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Proveedores</span></div>
                     </a><!-- more inner pages-->
                   </li>
                   <li class="nav-item"><a class="nav-link" href="./?View=Compras" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Realizar Compras</span></div>
                     </a><!-- more inner pages-->
                   </li>

                 </ul>

                  <!-- INVENTARIO-->
                 <a class="nav-link dropdown-indicator" href="#m-inventario" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="m-inventario">
                   <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-cubes"></span></span><span class="nav-link-text ps-1"> Inventario</span></div>
                 </a>
                 <ul class="nav collapse false" id="m-inventario">
                   <li class="nav-item"><a class="nav-link" href="./?View=Abrir-Inventario" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Nuevo Inventario</span></div>
                     </a><!-- more inner pages-->
                   </li>
                   <li class="nav-item"><a class="nav-link" href="./?View=Kardex" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Kardex</span></div>
                     </a><!-- more inner pages-->
                   </li>
                 </ul>

                 <!--COMPROBANTES-->
                <a class="nav-link dropdown-indicator" href="#m-comprobante" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="m-comprobante">
                  <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-clipboard-list"></span></span><span class="nav-link-text ps-1"> Comprobantes</span></div>
                </a>
                <ul class="nav collapse false" id="m-comprobante">
                  <li class="nav-item"><a class="nav-link" href="./?View=Tipo-Comprobante" aria-expanded="false">
                      <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Tipo de Comprobante</span></div>
                    </a><!-- more inner pages-->
                  </li>
                  <li class="nav-item"><a class="nav-link" href="./?View=Tirajes" aria-expanded="false">
                      <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Tiraje de Comprobante</span></div>
                    </a><!-- more inner pages-->
                  </li>
                </ul>

                  <!-- USUARIO-->
                 <a class="nav-link dropdown-indicator" href="#m-user" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="m-user">
                   <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-users"></span></span><span class="nav-link-text ps-1"> Usuario</span></div>
                 </a>
                 <ul class="nav collapse false" id="m-user">
                   <li class="nav-item"><a class="nav-link" href="./?View=Usuario" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">usuario</span></div>
                     </a><!-- more inner pages-->
                   </li>
                   <li class="nav-item"><a class="nav-link" href="./?View=Empleados" aria-expanded="false">
                       <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Empleado</span></div>
                     </a><!-- more inner pages-->
                   </li>
                 </ul>
                  <!-- parent pages configurar-->
                  <a class="nav-link dropdown-indicator" href="#config" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="config">
                    <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-cog        "></span></span><span class="nav-link-text ps-1"> Configurar</span></div>
                  </a>
                  <ul class="nav collapse false" id="config">
                    <li class="nav-item"><a class="nav-link" href="./?View=Parametros" aria-expanded="false">
                        <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Empresa</span></div>
                      </a><!-- more inner pages-->
                    </li>
                    <li class="nav-item"><a class="nav-link" href="./?View=Monedas" aria-expanded="false">
                        <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Moneda</span></div>
                      </a><!-- more inner pages-->
                    </li>
                  </ul>

                </li>

                <li class="nav-item">
                  <!-- label-->
                  <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
                    <div class="col-auto navbar-vertical-label">Configuracion</div>
                    <div class="col ps-0">
                      <hr class="mb-0 navbar-vertical-divider"/>
                    </div>
                  </div>
                  <!-- parent pages-->
                  <a class="nav-link" href="./?View=Acerca-de" role="button" aria-expanded="false">
                    <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-info-circle"></span></span><span class="nav-link-text ps-1">Acerca de </span></div>
                  </a>

                </li>
              </ul>
            </div>
          </div>
        </nav>
    <!-- ===============================================-->
    <!--  navbar-top -->
    <!-- ===============================================-->
        <nav class="navbar navbar-light navbar-glass navbar-top navbar-expand-xl" style="display: none;">
          <button class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
          <a class="navbar-brand me-1 me-sm-3" href="web/index.html">
            <div class="d-flex align-items-center"><img class="me-2" src="web/assets/img/icons/spot-illustrations/falcon.png" alt="" width="40" /><span class="font-sans-serif">falcon</span></div>
          </a>
          <div class="collapse navbar-collapse scrollbar" id="navbarStandard">
            <ul class="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dashboards">Dashboard</a>
                <div class="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                  <div class="bg-white dark__bg-1000 rounded-3 py-2"><a class="dropdown-item link-600 fw-medium" href="web/index.html">Default</a><a class="dropdown-item link-600 fw-medium" href="web/dashboard/analytics.html">Analytics</a><a class="dropdown-item link-600 fw-medium" href="web/dashboard/crm.html">CRM</a><a class="dropdown-item link-600 fw-medium" href="web/dashboard/e-commerce.html">E commerce</a><a class="dropdown-item link-600 fw-medium" href="web/dashboard/project-management.html">Management</a><a class="dropdown-item link-600 fw-medium" href="web/dashboard/saas.html">SaaS</a></div>
                </div>
              </li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="apps">App</a>
                <div class="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="apps">
                  <div class="card navbar-card-app shadow-none dark__bg-1000">
                    <div class="card-body scrollbar max-h-dropdown"><img class="img-dropdown" src="web/assets/img/icons/spot-illustrations/authentication-corner.png" width="130" alt="" />
                      <div class="row">
                        <div class="col-6 col-md-5">
                          <div class="nav flex-column"><a class="nav-link py-1 link-600 fw-medium" href="web/app/calendar.html">Calendar</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/chat.html">Chat</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/kanban.html">Kanban</a>
                            <p class="nav-link text-700 mb-0 fw-bold">Email</p><a class="nav-link py-1 link-600 fw-medium" href="web/app/email/inbox.html">Inbox</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/email/email-detail.html">Email detail</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/email/compose.html">Compose</a>
                            <p class="nav-link text-700 mb-0 fw-bold">Events</p><a class="nav-link py-1 link-600 fw-medium" href="web/app/events/create-an-event.html">Create an event</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/events/event-detail.html">Event detail</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/events/event-list.html">Event list</a>
                            <p class="nav-link text-700 mb-0 fw-bold">Social</p><a class="nav-link py-1 link-600 fw-medium" href="web/app/social/feed.html">Feed</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/social/activity-log.html">Activity log</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/social/notifications.html">Notifications</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/social/followers.html">Followers</a>
                          </div>
                        </div>
                        <div class="col-6 col-md-4">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">E-Commerce</p><a class="nav-link py-1 link-600 fw-medium" href="web/app/e-commerce/product/product-list.html">Product list</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/e-commerce/product/product-grid.html">Product grid</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/e-commerce/product/product-details.html">Product details</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/e-commerce/orders/order-list.html">Order list</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/e-commerce/orders/order-details.html">Order details</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/e-commerce/customers.html">Customers</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/e-commerce/customer-details.html">Customer details</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/e-commerce/shopping-cart.html">Shopping cart</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/e-commerce/checkout.html">Checkout</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/e-commerce/billing.html">Billing</a><a class="nav-link py-1 link-600 fw-medium" href="web/app/e-commerce/invoice.html">Invoice</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="pagess">Pages</a>
                <div class="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="pagess">
                  <div class="card navbar-card-pages shadow-none dark__bg-1000">
                    <div class="card-body scrollbar max-h-dropdown"><img class="img-dropdown" src="web/assets/img/icons/spot-illustrations/authentication-corner.png" width="130" alt="" />
                      <div class="row">
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">Simple Auth</p><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/simple/login.html">Login</a><a class="nav-link py-1 link-600 fw-medium" href="web/ajax/ajxlogin.php?logout=true">Logout</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/simple/register.html">Register</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/simple/forgot-password.html">Forgot password</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/simple/confirm-mail.html">Confirm mail</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/simple/reset-password.html">Reset password</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/simple/lock-screen.html">Lock screen</a>
                          </div>
                        </div>
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">Card Auth</p><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/card/login.html">Login</a><a class="nav-link py-1 link-600 fw-medium" href="web/ajax/ajxlogin.php?logout=true">Logout</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/card/register.html">Register</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/card/forgot-password.html">Forgot password</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/card/confirm-mail.html">Confirm mail</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/card/reset-password.html">Reset password</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/card/lock-screen.html">Lock screen</a>
                          </div>
                        </div>
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">Split Auth</p><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/split/login.html">Login</a><a class="nav-link py-1 link-600 fw-medium" href="web/ajax/ajxlogin.php?logout=true">Logout</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/split/register.html">Register</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/split/forgot-password.html">Forgot password</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/split/confirm-mail.html">Confirm mail</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/split/reset-password.html">Reset password</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/split/lock-screen.html">Lock screen</a>
                          </div>
                        </div>
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">Other Auth</p><a class="nav-link py-1 link-600 fw-medium" href="web/pages/authentication/wizard.html">Wizard</a><a class="nav-link py-1 link-600 fw-medium" href="web/#authentication-modal" data-bs-toggle="modal">Modal</a>
                            <p class="nav-link text-700 mb-0 fw-bold">Miscellaneous</p><a class="nav-link py-1 link-600 fw-medium" href="web/pages/miscellaneous/associations.html">Associations</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/miscellaneous/invite-people.html">Invite people</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/miscellaneous/privacy-policy.html">Privacy policy</a>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">User</p><a class="nav-link py-1 link-600 fw-medium" href="web/pages/user/profile.html">Profile</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/user/settings.html">Settings</a>
                          </div>
                        </div>
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">Pricing</p><a class="nav-link py-1 link-600 fw-medium" href="web/pages/pricing/pricing-default.html">Pricing default</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/pricing/pricing-alt.html">Pricing alt</a>
                          </div>
                        </div>
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">Errors</p><a class="nav-link py-1 link-600 fw-medium" href="web/pages/errors/404.html">404</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/errors/500.html">500</a>
                          </div>
                        </div>
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">Others</p><a class="nav-link py-1 link-600 fw-medium" href="web/pages/starter.html">Starter</a><a class="nav-link py-1 link-600 fw-medium" href="web/pages/landing.html">Landing</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="moduless">Modules</a>
                <div class="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="moduless">
                  <div class="card navbar-card-components shadow-none dark__bg-1000">
                    <div class="card-body scrollbar max-h-dropdown"><img class="img-dropdown" src="web/assets/img/icons/spot-illustrations/authentication-corner.png" width="130" alt="" />
                      <div class="row">
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">Components</p><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/accordion.html">Accordion</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/alerts.html">Alerts</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/anchor.html">Anchor</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/animated-icons.html">Animated icons</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/background.html">Background</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/badges.html">Badges</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/breadcrumbs.html">Breadcrumbs</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/buttons.html">Buttons</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/calendar.html">Calendar</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/cards.html">Cards</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/carousel/bootstrap.html">Bootstrap carousel</a>
                          </div>
                        </div>
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column mt-md-4 pt-md-1"><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/carousel/swiper.html">Swiper</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/collapse.html">Collapse</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/cookie-notice.html">Cookie notice</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/countup.html">Countup</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/draggable.html">Draggable</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/dropdowns.html">Dropdowns</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/list-group.html">List group</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/modals.html">Modals</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/navs-and-tabs/navs.html">Navs</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/navs-and-tabs/navbar.html">Navbar</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/navs-and-tabs/vertical-navbar.html">Vertical navbar</a></div>
                        </div>
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column mt-xxl-4 pt-xxl-1"><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/navs-and-tabs/top-navbar.html">Top navbar</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/navs-and-tabs/combo-navbar.html">Combo navbar</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/navs-and-tabs/tabs.html">Tabs</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/offcanvas.html">Offcanvas</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/pictures/avatar.html">Avatar</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/pictures/images.html">Images</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/pictures/figures.html">Figures</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/pictures/hoverbox.html">Hoverbox</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/pictures/lightbox.html">Lightbox</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/progress-bar.html">Progress bar</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/placeholder.html">Placeholder</a></div>
                        </div>
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column mt-xxl-4 pt-xxl-1"><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/pagination.html">Pagination</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/popovers.html">Popovers</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/scrollspy.html">Scrollspy</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/search.html">Search</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/spinners.html">Spinners</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/toasts.html">Toasts</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/tooltips.html">Tooltips</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/typed-text.html">Typed text</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/videos/embed.html">Embed</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/components/videos/plyr.html">Plyr</a></div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">Forms</p><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/basic/form-control.html">Form control</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/basic/input-group.html">Input group</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/basic/select.html">Select</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/basic/checks.html">Checks</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/basic/range.html">Range</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/basic/layout.html">Layout</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/advance/advance-select.html">Advance select</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/advance/date-picker.html">Date picker</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/advance/editor.html">Editor</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/advance/emoji-button.html">Emoji button</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/advance/file-uploader.html">File uploader</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/advance/rating.html">Rating</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/floating-labels.html">Floating labels</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/wizard.html">Wizard</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/forms/validation.html">Validation</a>
                          </div>
                        </div>
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">Tables</p><a class="nav-link py-1 link-600 fw-medium" href="web/modules/tables/basic-tables.html">Basic tables</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/tables/advance-tables.html">Advance tables</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/tables/bulk-select.html">Bulk select</a>
                            <p class="nav-link text-700 mb-0 fw-bold">Charts</p><a class="nav-link py-1 link-600 fw-medium" href="web/modules/charts/chartjs.html">Chartjs</a>
                            <p class="nav-link text-700 mb-0 fw-bold">ECharts</p><a class="nav-link py-1 link-600 fw-medium" href="web/modules/charts/echarts/line-charts.html">Line charts</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/charts/echarts/bar-charts.html">Bar charts</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/charts/echarts/candlestick-charts.html">Candlestick charts</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/charts/echarts/geo-map.html">Geo map</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/charts/echarts/scatter-charts.html">Scatter charts</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/charts/echarts/pie-charts.html">Pie charts</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/charts/echarts/radar-charts.html">Radar charts</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/charts/echarts/heatmap-charts.html">Heatmap charts</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/charts/echarts/how-to-use.html">How to use</a>
                          </div>
                        </div>
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column">
                            <p class="nav-link text-700 mb-0 fw-bold">Utilities</p><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/borders.html">Borders</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/clearfix.html">Clearfix</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/colors.html">Colors</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/colored-links.html">Colored links</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/display.html">Display</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/flex.html">Flex</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/float.html">Float</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/grid.html">Grid</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/overlayscrollbars.html">Overlayscrollbars</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/position.html">Position</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/spacing.html">Spacing</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/sizing.html">Sizing</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/stretched-link.html">Stretched link</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/text-truncation.html">Text truncation</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/typography.html">Typography</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/vertical-align.html">Vertical align</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/utilities/visibility.html">Visibility</a>
                          </div>
                        </div>
                        <div class="col-6 col-xxl-3">
                          <div class="nav flex-column mt-xxl-4 pt-xxl-1">
                            <p class="nav-link text-700 mb-0 fw-bold">Icons</p><a class="nav-link py-1 link-600 fw-medium" href="web/modules/icons/font-awesome.html">Font awesome</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/icons/bootstrap-icons.html">Bootstrap icons</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/icons/feather.html">Feather</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/icons/material-icons.html">Material icons</a>
                            <p class="nav-link text-700 mb-0 fw-bold">Maps</p><a class="nav-link py-1 link-600 fw-medium" href="web/modules/maps/google-map.html">Google map</a><a class="nav-link py-1 link-600 fw-medium" href="web/modules/maps/leaflet-map.html">Leaflet map</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="documentations">Documentation</a>
                <div class="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="documentations">
                  <div class="bg-white dark__bg-1000 rounded-3 py-2"><a class="dropdown-item link-600 fw-medium" href="web/documentation/getting-started.html">Getting started</a><a class="dropdown-item link-600 fw-medium" href="web/documentation/customization/configuration.html">Configuration</a><a class="dropdown-item link-600 fw-medium" href="web/documentation/customization/styling.html">Styling</a><a class="dropdown-item link-600 fw-medium" href="web/documentation/customization/dark-mode.html">Dark mode<span class="badge rounded-pill ms-2 badge-soft-success">New</span></a><a class="dropdown-item link-600 fw-medium" href="web/documentation/customization/plugin.html">Plugin</a><a class="dropdown-item link-600 fw-medium" href="web/documentation/gulp.html">Gulp</a><a class="dropdown-item link-600 fw-medium" href="web/documentation/design-file.html">Design file</a><a class="dropdown-item link-600 fw-medium" href="web/changelog.html">Changelog</a></div>
                </div>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
            <li class="nav-item">
              <div class="theme-control-toggle fa-icon-wait px-2"><input class="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" value="dark" /><label class="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to light theme"><span class="fas fa-sun fs-0"></span></label><label class="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to dark theme"><span class="fas fa-moon fs-0"></span></label></div>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait" href="web/app/e-commerce/shopping-cart.html"><span class="fas fa-shopping-cart" data-fa-transform="shrink-7" style="font-size: 33px;"></span><span class="notification-indicator-number">1</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait" id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fas fa-bell" data-fa-transform="shrink-6" style="font-size: 33px;"></span></a>
              <div class="dropdown-menu dropdown-menu-end dropdown-menu-card dropdown-menu-notification" aria-labelledby="navbarDropdownNotification">
                <div class="card card-notification shadow-none">
                  <div class="card-header">
                    <div class="row justify-content-between align-items-center">
                      <div class="col-auto">
                        <h6 class="card-header-title mb-0">Notifications</h6>
                      </div>
                      <div class="col-auto ps-0 ps-sm-3"><a class="card-link fw-normal" href="#">Mark all as read</a></div>
                    </div>
                  </div>
                  <div class="scrollbar-overlay" style="max-height:19rem">
                    <div class="list-group list-group-flush fw-normal fs--1">
                      <div class="list-group-title border-bottom">NEW</div>
                      <div class="list-group-item">
                        <a class="notification notification-flush notification-unread" href="#!">
                          <div class="notification-avatar">
                            <div class="avatar avatar-2xl me-3">
                              <img class="rounded-circle" src="web/assets/img/team/1-thumb.png" alt="" />
                            </div>
                          </div>
                          <div class="notification-body">
                            <p class="mb-1"><strong>Emma Watson</strong> replied to your comment : "Hello world 😍"</p>
                            <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">💬</span>Just now</span>
                          </div>
                        </a>
                      </div>
                      <div class="list-group-item">
                        <a class="notification notification-flush notification-unread" href="#!">
                          <div class="notification-avatar">
                            <div class="avatar avatar-2xl me-3">
                              <div class="avatar-name rounded-circle"><span>AB</span></div>
                            </div>
                          </div>
                          <div class="notification-body">
                            <p class="mb-1"><strong>Albert Brooks</strong> reacted to <strong>Mia Khalifa's</strong> status</p>
                            <span class="notification-time"><span class="me-2 fab fa-gratipay text-danger"></span>9hr</span>
                          </div>
                        </a>
                      </div>
                      <div class="list-group-title border-bottom">EARLIER</div>
                      <div class="list-group-item">
                        <a class="notification notification-flush" href="#!">
                          <div class="notification-avatar">
                            <div class="avatar avatar-2xl me-3">
                              <img class="rounded-circle" src="web/assets/img/icons/weather-sm.jpg" alt="" />
                            </div>
                          </div>
                          <div class="notification-body">
                            <p class="mb-1">The forecast today shows a low of 20&#8451; in California. See today's weather.</p>
                            <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">🌤️</span>1d</span>
                          </div>
                        </a>
                      </div>
                      <div class="list-group-item">
                        <a class="border-bottom-0 notification-unread  notification notification-flush" href="#!">
                          <div class="notification-avatar">
                            <div class="avatar avatar-xl me-3">
                              <img class="rounded-circle" src="web/assets/img/logos/oxford.png" alt="" />
                            </div>
                          </div>
                          <div class="notification-body">
                            <p class="mb-1"><strong>University of Oxford</strong> created an event : "Causal Inference Hilary 2019"</p>
                            <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">✌️</span>1w</span>
                          </div>
                        </a>
                      </div>
                      <div class="list-group-item">
                        <a class="border-bottom-0 notification notification-flush" href="#!">
                          <div class="notification-avatar">
                            <div class="avatar avatar-xl me-3">
                              <img class="rounded-circle" src="web/assets/img/team/10.jpg" alt="" />
                            </div>
                          </div>
                          <div class="notification-body">
                            <p class="mb-1"><strong>James Cameron</strong> invited to join the group: United Nations International Children's Fund</p>
                            <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">🙋‍</span>2d</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-center border-top"><a class="card-link d-block" href="web/app/social/notifications.html">View all</a></div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown"><a class="nav-link pe-0" id="navbarDropdownUser" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="avatar avatar-xl">
                  <img class="rounded-circle" src="web/assets/img/team/3-thumb.png" alt="" />
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
                <div class="bg-white dark__bg-1000 rounded-2 py-2">
                  <a class="dropdown-item" href="web/pages/user/settings.html">Settings</a>
                  <a class="dropdown-item" href="web/ajax/ajxlogin.php?logout=true">Logout</a>
                </div>
              </div>
            </li>
          </ul>
        </nav>
    <!-- ===============================================-->
    <!--   end navbar-top-->
    <!-- ===============================================-->
