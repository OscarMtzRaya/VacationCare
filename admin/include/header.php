<?php
session_start();
?>

<body id="body" class="">
    <!-- leftbar-tab-menu -->
    <div class="leftbar-tab-menu">
        <div class="main-icon-menu">
            <div class="main-icon-menu-body">
                <div class="position-reletive h-100" data-simplebar style="overflow-x: hidden;">
                    <ul class="nav nav-tabs" role="tablist" id="tab-menu">
                        <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Dashboard" data-bs-trigger="hover">
                            <a href="#MetricaDashboard" id="dashboard-tab" class="nav-link">
                                <i class="ti ti-smart-home menu-icon"></i>
                            </a>
                            <!--end nav-link-->
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Usuarios" data-bs-trigger="hover">
                            <a href="#MetricaApps" id="apps-tab" class="nav-link">
                                <i class="ti ti-users menu-icon"></i>
                            </a>
                            <!--end nav-link-->
                        </li>
                        <!--end nav-item-->
                        <li hidden class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Uikit" data-bs-trigger="hover">
                            <a href="#MetricaUikit" id="uikit-tab" class="nav-link">
                                <i class="ti ti-planet menu-icon"></i>
                            </a>
                            <!--end nav-link-->
                        </li>
                        <!--end nav-item-->
                        <li hidden class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Pages" data-bs-trigger="hover">
                            <a href="#MetricaPages" id="pages-tab" class="nav-link">
                                <i class="ti ti-files menu-icon"></i>
                            </a>
                            <!--end nav-link-->
                        </li>
                        <!--end nav-item-->
                        <li hidden class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Authentication" data-bs-trigger="hover">
                            <a href="#MetricaAuthentication" id="authentication-tab" class="nav-link">
                                <i class="ti ti-shield-lock menu-icon"></i>
                            </a>
                            <!--end nav-link-->
                        </li>
                        <!--end nav-item-->
                    </ul>
                    <!--end nav-->
                </div>
                <!--end /div-->
            </div>
            <!--end main-icon-menu-body-->
            <div class="pro-metrica-end">
                <a href="" class="profile">
                </a>
            </div>
            <!--end pro-metrica-end-->
        </div>
        <!--end main-icon-menu-->
        <div class="main-menu-inner">
            <!-- LOGO -->
            <div class="topbar-left">
                <a href="/admin" class="logo">
                    <span>
                        <!-- <img src="/admin/assets/images/logo-dark.png" alt="logo-large" class="logo-lg logo-dark"> -->
                        <img src="/assets/images/logo.png" alt="logo-large" class="img-fluid p-2">
                    </span>
                </a>
                <!--end logo-->
            </div>
            <!--end topbar-left-->
            <!--end logo-->
            <div class="menu-body navbar-vertical tab-content" data-simplebar>
                <div id="MetricaDashboard" class="main-icon-menu-pane tab-pane" role="tabpanel" aria-labelledby="dasboard-tab">
                    <div class="title-box">
                        <h6 class="menu-title">Dashboard</h6>
                    </div>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link" href="/admin/">Analytics</a>
                        </li>
                        <!--end nav-item-->
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="crypto-/admin">Crypto</a>
                        </li> -->
                        <!--end nav-item-->
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="crm-/admin">CRM</a>
                        </li> -->
                        <!--end nav-item-->
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="projects-/admin">Project</a>
                        </li> -->
                        <!--end nav-item-->
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="ecommerce-/admin">Ecommerce</a>
                        </li> -->
                        <!--end nav-item-->
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="helpdesk-/admin">Helpdesk</a>
                        </li> -->
                        <!--end nav-item-->
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="hospital-/admin">Hospital</a>
                        </li> -->
                        <!--end nav-item-->
                    </ul>
                    <!--end nav-->
                </div><!-- end Dashboards -->
                <div id="MetricaApps" class="main-icon-menu-pane tab-pane" role="tabpanel" aria-labelledby="apps-tab">
                    <div class="title-box">
                        <h6 class="menu-title">Usuarios</h6>
                    </div>
                    <div class="collapse navbar-collapse" id="sidebarCollapse">
                        <!-- Navigation -->
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/admin/usuarios.php" role="button">
                                    <i class="ti ti-users menu-icon"></i>
                                    &nbsp;Todos los usuarios
                                </a>
                                <!--end sidebarAnalytics-->
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/admin/editar/usuario.php" role="button">
                                    <i class="ti ti-edit"></i>
                                    &nbsp;Editar usuario
                                </a>
                                <!--end sidebarAnalytics-->
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarAnalytics" role="button">
                                    <i class="ti ti-user-plus"></i>
                                    &nbsp;Agregar usuario
                                </a>
                                <!--end sidebarAnalytics-->
                            </li>
                        </ul>
                        <!--end navbar-nav--->
                    </div>
                    <!--end sidebarCollapse-->
                </div><!-- end Crypto -->
                <div id="MetricaUikit" class="main-icon-menu-pane  tab-pane" role="tabpanel" aria-labelledby="uikit-tab">
                    <div class="title-box">
                        <h6 class="menu-title">UI Kit</h6>
                    </div>
                    <div class="collapse navbar-collapse" id="sidebarCollapse_2">
                        <!-- Navigation -->
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarElements" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarElements">
                                    UI Elements
                                </a>
                                <div class="collapse " id="sidebarElements">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-alerts.html">Alerts</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-avatar.html">Avatar</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-buttons.html">Buttons</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-badges.html">Badges</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-cards.html">Cards</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-carousels.html">Carousels</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-dropdowns.html">Dropdowns</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-grids.html">Grids</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-images.html">Images</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-list.html">List</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-modals.html">Modals</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-navs.html">Navs</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-navbar.html">Navbar</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-paginations.html">Paginations</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-popover-tooltips.html">Popover & Tooltips</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-progress.html">Progress</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-spinners.html">Spinners</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-tabs-accordions.html">Tabs & Accordions</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-typography.html">Typography</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-videos.html">Videos</a>
                                        </li>
                                        <!--end nav-item-->
                                    </ul>
                                    <!--end nav-->
                                </div>
                                <!--end sidebarElements-->
                            </li>
                            <!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarAdvancedUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAdvancedUI">
                                    Advanced UI
                                </a>
                                <div class="collapse " id="sidebarAdvancedUI">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-animation.html">Animation</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-clipboard.html">Clip Board</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-dragula.html">Dragula</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-files.html">File Manager</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-highlight.html">Highlight</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-rangeslider.html">Range Slider</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-ratings.html">Ratings</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-ribbons.html">Ribbons</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-sweetalerts.html">Sweet Alerts</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-toasts.html">Toasts</a>
                                        </li>
                                        <!--end nav-item-->
                                    </ul>
                                    <!--end nav-->
                                </div>
                                <!--end sidebarAdvancedUI-->
                            </li>
                            <!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarForms" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarForms">
                                    Forms
                                </a>
                                <div class="collapse " id="sidebarForms">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-elements.html">Basic Elements</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-advanced.html">Advance Elements</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-validation.html">Validation</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-wizard.html">Wizard</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-editors.html">Editors</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-uploads.html">File Upload</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-img-crop.html">Image Crop</a>
                                        </li>
                                        <!--end nav-item-->
                                    </ul>
                                    <!--end nav-->
                                </div>
                                <!--end sidebarForms-->
                            </li>
                            <!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarCharts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCharts">
                                    Charts
                                </a>
                                <div class="collapse " id="sidebarCharts">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="charts-apex.html">Apex</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="charts-justgage.html">JustGage</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="charts-chartjs.html">Chartjs</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="charts-toast-ui.html">Toast</a>
                                        </li>
                                        <!--end nav-item-->
                                    </ul>
                                    <!--end nav-->
                                </div>
                                <!--end sidebarCharts-->
                            </li>
                            <!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarTables" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTables">
                                    Tables
                                </a>
                                <div class="collapse " id="sidebarTables">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="tables-basic.html">Basic</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="tables-datatable.html">Datatables</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="tables-editable.html">Editable</a>
                                        </li>
                                        <!--end nav-item-->
                                    </ul>
                                    <!--end nav-->
                                </div>
                                <!--end sidebarTables-->
                            </li>
                            <!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarIcons" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarIcons">
                                    Icons
                                </a>
                                <div class="collapse " id="sidebarIcons">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="icons-materialdesign.html">Material Design</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="icons-fontawesome.html">Font awesome</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="icons-tabler.html">Tabler</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="icons-feather.html">Feather</a>
                                        </li>
                                        <!--end nav-item-->
                                    </ul>
                                    <!--end nav-->
                                </div>
                                <!--end sidebarIcons-->
                            </li>
                            <!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarMaps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMaps">
                                    Maps
                                </a>
                                <div class="collapse " id="sidebarMaps">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="maps-google.html">Google Maps</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="maps-leaflet.html">Leaflet Maps</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="maps-vector.html">Vector Maps</a>
                                        </li>
                                        <!--end nav-item-->
                                    </ul>
                                    <!--end nav-->
                                </div>
                                <!--end sidebarMaps-->
                            </li>
                            <!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarEmailTemplates" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEmailTemplates">
                                    Email Templates
                                </a>
                                <div class="collapse " id="sidebarEmailTemplates">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="email-templates-basic.html">Basic Action Email</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="email-templates-alert.html">Alert Email</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="email-templates-billing.html">Billing Email</a>
                                        </li>
                                        <!--end nav-item-->
                                    </ul>
                                    <!--end nav-->
                                </div>
                                <!--end sidebarEmailTemplates-->
                            </li>
                            <!--end nav-item-->
                        </ul>
                        <!--end navbar-nav--->
                    </div>
                    <!--end sidebarCollapse_2-->
                </div><!-- end Others -->
                <div id="MetricaPages" class="main-icon-menu-pane tab-pane" role="tabpanel" aria-labelledby="pages-tab">
                    <div class="title-box">
                        <h6 class="menu-title">Pages</h6>
                    </div>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link" href="pages-profile.html">Profile</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="pages-tour.html">Tour</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="pages-timeline.html">Timeline</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="pages-treeview.html">Treeview</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="pages-starter.html">Starter Page</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="pages-pricing.html">Pricing</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="pages-blogs.html">Blogs</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="pages-faq.html">FAQs</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="pages-gallery.html">Gallery</a>
                        </li>
                        <!--end nav-item-->
                    </ul>
                    <!--end nav-->
                </div><!-- end Pages -->
                <div id="MetricaAuthentication" class="main-icon-menu-pane tab-pane" role="tabpanel" aria-labelledby="authentication-tab">
                    <div class="title-box">
                        <h6 class="menu-title">Authentication</h6>
                    </div>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link" href="auth-login.html">Log in</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="auth-login-alt.html">Log in alt</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="auth-register.html">Register</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="auth-register-alt.html">Register-alt</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="auth-recover-pw.html">Re-Password</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="auth-recover-pw-alt.html">Re-Password-alt</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="auth-lock-screen.html">Lock Screen</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="auth-lock-screen-alt.html">Lock Screen-alt</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="auth-404.html">Error 404</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="auth-404-alt.html">Error 404-alt</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="auth-500.html">Error 500</a>
                        </li>
                        <!--end nav-item-->
                        <li class="nav-item">
                            <a class="nav-link" href="auth-500-alt.html">Error 500-alt</a>
                        </li>
                        <!--end nav-item-->
                    </ul>
                    <!--end nav-->
                </div><!-- end Authentication-->
            </div>
            <!--end menu-body-->
        </div><!-- end main-menu-inner-->
    </div>
    <!-- end leftbar-tab-menu-->
    <!-- Top Bar Start -->
    <!-- Top Bar Start -->
    <div class="topbar">
        <!-- Navbar -->
        <nav class="navbar-custom" id="navbar-custom">
            <ul class="list-unstyled topbar-nav float-end mb-0">
                <li hidden class="dropdown">
                    <a class="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <img src="/admin/assets/images/flags/us_flag.jpg" alt="" class="thumb-xxs rounded-circle">
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"><img src="/admin/assets/images/flags/us_flag.jpg" alt="" height="15" class="me-2">English</a>
                        <a class="dropdown-item" href="#"><img src="/admin/assets/images/flags/spain_flag.jpg" alt="" height="15" class="me-2">Spanish</a>
                        <a class="dropdown-item" href="#"><img src="/admin/assets/images/flags/germany_flag.jpg" alt="" height="15" class="me-2">German</a>
                        <a class="dropdown-item" href="#"><img src="/admin/assets/images/flags/french_flag.jpg" alt="" height="15" class="me-2">French</a>
                    </div>
                </li>
                <li hidden class="dropdown notification-list">
                    <a class="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <i class="ti ti-mail"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-lg pt-0">
                        <h6 class="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
                            Emails <span class="badge bg-soft-primary badge-pill">3</span>
                        </h6>
                        <div class="notification-menu" data-simplebar>
                            <!-- item-->
                            <a href="#" class="dropdown-item py-3">
                                <small class="float-end text-muted ps-2">2 min ago</small>
                                <div class="media">
                                    <div class="avatar-md bg-soft-primary">
                                        <img src="/admin/assets/images/users/user-1.jpg" alt="" class="thumb-sm rounded-circle">
                                    </div>
                                    <div class="media-body align-self-center ms-2 text-truncate">
                                        <h6 class="my-0 fw-normal text-dark">Your order is placed</h6>
                                        <small class="text-muted mb-0">Dummy text of the printing and industry.</small>
                                    </div>
                                    <!--end media-body-->
                                </div>
                                <!--end media-->
                            </a>
                            <!--end-item-->
                            <!-- item-->
                            <a href="#" class="dropdown-item py-3">
                                <small class="float-end text-muted ps-2">10 min ago</small>
                                <div class="media">
                                    <div class="avatar-md bg-soft-primary">
                                    </div>
                                    <div class="media-body align-self-center ms-2 text-truncate">
                                        <h6 class="my-0 fw-normal text-dark">Meeting with designers</h6>
                                        <small class="text-muted mb-0">It is a long established fact that a reader.</small>
                                    </div>
                                    <!--end media-body-->
                                </div>
                                <!--end media-->
                            </a>
                            <!--end-item-->
                            <!-- item-->
                            <a href="#" class="dropdown-item py-3">
                                <small class="float-end text-muted ps-2">40 min ago</small>
                                <div class="media">
                                    <div class="avatar-md bg-soft-primary">
                                        <img src="/admin/assets/images/users/user-2.jpg" alt="" class="thumb-sm rounded-circle">
                                    </div>
                                    <div class="media-body align-self-center ms-2 text-truncate">
                                        <h6 class="my-0 fw-normal text-dark">UX 3 Task complete.</h6>
                                        <small class="text-muted mb-0">Dummy text of the printing.</small>
                                    </div>
                                    <!--end media-body-->
                                </div>
                                <!--end media-->
                            </a>
                            <!--end-item-->
                            <!-- item-->
                            <a href="#" class="dropdown-item py-3">
                                <small class="float-end text-muted ps-2">1 hr ago</small>
                                <div class="media">
                                    <div class="avatar-md bg-soft-primary">
                                        <img src="/admin/assets/images/users/user-5.jpg" alt="" class="thumb-sm rounded-circle">
                                    </div>
                                    <div class="media-body align-self-center ms-2 text-truncate">
                                        <h6 class="my-0 fw-normal text-dark">Your order is placed</h6>
                                        <small class="text-muted mb-0">It is a long established fact that a reader.</small>
                                    </div>
                                    <!--end media-body-->
                                </div>
                                <!--end media-->
                            </a>
                            <!--end-item-->
                            <!-- item-->
                            <a href="#" class="dropdown-item py-3">
                                <small class="float-end text-muted ps-2">2 hrs ago</small>
                                <div class="media">
                                    <div class="avatar-md bg-soft-primary">
                                        <img src="/admin/assets/images/users/user-3.jpg" alt="" class="thumb-sm rounded-circle">
                                    </div>
                                    <div class="media-body align-self-center ms-2 text-truncate">
                                        <h6 class="my-0 fw-normal text-dark">Payment Successfull</h6>
                                        <small class="text-muted mb-0">Dummy text of the printing.</small>
                                    </div>
                                    <!--end media-body-->
                                </div>
                                <!--end media-->
                            </a>
                            <!--end-item-->
                        </div>
                        <!-- All-->
                        <a href="javascript:void(0);" class="dropdown-item text-center text-primary">
                            View all <i class="fi-arrow-right"></i>
                        </a>
                    </div>
                </li>
                <li hidden class="dropdown notification-list">
                    <a class="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <i class="ti ti-bell"></i>
                        <span class="alert-badge"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-lg pt-0">
                        <h6 class="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
                            Notifications <span class="badge bg-soft-primary badge-pill">2</span>
                        </h6>
                        <div class="notification-menu" data-simplebar>
                            <!-- item-->
                            <a href="#" class="dropdown-item py-3">
                                <small class="float-end text-muted ps-2">2 min ago</small>
                                <div class="media">
                                    <div class="avatar-md bg-soft-primary">
                                        <i class="ti ti-chart-arcs"></i>
                                    </div>
                                    <div class="media-body align-self-center ms-2 text-truncate">
                                        <h6 class="my-0 fw-normal text-dark">Your order is placed</h6>
                                        <small class="text-muted mb-0">Dummy text of the printing and industry.</small>
                                    </div>
                                    <!--end media-body-->
                                </div>
                                <!--end media-->
                            </a>
                            <!--end-item-->
                            <!-- item-->
                            <a href="#" class="dropdown-item py-3">
                                <small class="float-end text-muted ps-2">10 min ago</small>
                                <div class="media">
                                    <div class="avatar-md bg-soft-primary">
                                        <i class="ti ti-device-computer-camera"></i>
                                    </div>
                                    <div class="media-body align-self-center ms-2 text-truncate">
                                        <h6 class="my-0 fw-normal text-dark">Meeting with designers</h6>
                                        <small class="text-muted mb-0">It is a long established fact that a reader.</small>
                                    </div>
                                    <!--end media-body-->
                                </div>
                                <!--end media-->
                            </a>
                            <!--end-item-->
                            <!-- item-->
                            <a href="#" class="dropdown-item py-3">
                                <small class="float-end text-muted ps-2">40 min ago</small>
                                <div class="media">
                                    <div class="avatar-md bg-soft-primary">
                                        <i class="ti ti-diamond"></i>
                                    </div>
                                    <div class="media-body align-self-center ms-2 text-truncate">
                                        <h6 class="my-0 fw-normal text-dark">UX 3 Task complete.</h6>
                                        <small class="text-muted mb-0">Dummy text of the printing.</small>
                                    </div>
                                    <!--end media-body-->
                                </div>
                                <!--end media-->
                            </a>
                            <!--end-item-->
                            <!-- item-->
                            <a href="#" class="dropdown-item py-3">
                                <small class="float-end text-muted ps-2">1 hr ago</small>
                                <div class="media">
                                    <div class="avatar-md bg-soft-primary">
                                        <i class="ti ti-drone"></i>
                                    </div>
                                    <div class="media-body align-self-center ms-2 text-truncate">
                                        <h6 class="my-0 fw-normal text-dark">Your order is placed</h6>
                                        <small class="text-muted mb-0">It is a long established fact that a reader.</small>
                                    </div>
                                    <!--end media-body-->
                                </div>
                                <!--end media-->
                            </a>
                            <!--end-item-->
                            <!-- item-->
                            <a href="#" class="dropdown-item py-3">
                                <small class="float-end text-muted ps-2">2 hrs ago</small>
                                <div class="media">
                                    <div class="avatar-md bg-soft-primary">
                                        <i class="ti ti-users"></i>
                                    </div>
                                    <div class="media-body align-self-center ms-2 text-truncate">
                                        <h6 class="my-0 fw-normal text-dark">Payment Successfull</h6>
                                        <small class="text-muted mb-0">Dummy text of the printing.</small>
                                    </div>
                                    <!--end media-body-->
                                </div>
                                <!--end media-->
                            </a>
                            <!--end-item-->
                        </div>
                        <!-- All-->
                        <a href="javascript:void(0);" class="dropdown-item text-center text-primary">
                            View all <i class="fi-arrow-right"></i>
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a class="nav-link dropdown-toggle nav-user" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <div class="d-flex align-items-center">
                            <div>
                                <small class="d-none d-md-block font-11"><?php echo $_SESSION['user']['rol'] ?></small>
                                <span class="d-none d-md-block fw-semibold font-12"><?php echo $_SESSION['user']['nombre'] ?>&nbsp;<?php echo $_SESSION['user']['apellido'] ?><i class="mdi mdi-chevron-down"></i></span>
                            </div>
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"><i class="ti ti-user font-16 me-1 align-text-bottom"></i> Profile</a>
                        <a class="dropdown-item" href="#"><i class="ti ti-settings font-16 me-1 align-text-bottom"></i> Settings</a>
                        <div class="dropdown-divider mb-0"></div>
                        <a class="dropdown-item" href="/admin/controllers/logout.php"><i class="ti ti-power font-16 me-1 align-text-bottom"></i> Logout</a>
                    </div>
                </li>
                <!--end topbar-profile-->
                <!-- <li class="notification-list">
                        <a class="nav-link arrow-none nav-icon offcanvas-btn" href="#" data-bs-toggle="offcanvas" data-bs-target="#Appearance" role="button" aria-controls="Rightbar">
                            <i class="ti ti-settings ti-spin"></i>
                        </a>
                    </li>  -->
            </ul>
            <!--end topbar-nav-->
            <ul class="list-unstyled topbar-nav mb-0">
                <li>
                    <button class="nav-link button-menu-mobile nav-icon" id="togglemenu">
                        <i class="ti ti-menu-2"></i>
                    </button>
                </li>
                <li hidden class="hide-phone app-search">
                    <form role="search" action="#" method="get">
                        <input type="search" name="search" class="form-control top-search mb-0" placeholder="Type text...">
                        <button type="submit"><i class="ti ti-search"></i></button>
                    </form>
                </li>
            </ul>
        </nav>
        <!-- end navbar-->
    </div>
    <!-- Top Bar End -->
    <!-- Top Bar End -->