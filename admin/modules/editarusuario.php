<?php
if (!isset($id_valido)) {
  include_once($_SERVER["DOCUMENT_ROOT"] . '/admin/controllers/router.php');
  $router = new Router;
  header('location: ' . $router->createRoute('admin/'));
}
?>
<div class="page-wrapper"">
  <div class=" page-content-tab">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h4 class="page-title">
        </h4>
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-10">
            <form method="POST" action="javascript:void(0)" id="formEditarUsuario">
              <div class="card p-5" style="box-shadow: 0px 0px 5px lightgray">
                <div class="row">
                  <div class="col-12 pb-3">
                    <h4>
                      Editar usuario
                    </h4>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="nombre">Nombre</label>
                      <input type="text" id="nombre" name="nombre" class="form-control" value="<?php echo $nombre ?>" required>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="nombre">Apellido</label>
                      <input type="text" id="apellido" name="apellido" class="form-control" value="<?php echo $apellido ?>" required>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="nombre">Estatus</label>
                      <select class="form-control" required name="activo" id="activo">
                        <option value="" selected disabled>Actual: <?php echo $estatus_actual ?> </option>
                        <option value="0">Inactivo</option>
                        <option value="1">Activo</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 pt-4">
                    <div class="form-group">
                      <label for="nombre">Rol</label>
                      <select class="form-control" required name="rol" id="rol">
                        <option value="" selected disabled>Actual: <?php echo $rol_actual; ?></option>
                        <?php echo $vista_roles; ?>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 pt-4">
                    <div class="form-group">
                      <label for="nombre">Puesto</label>
                      <select class="form-control" required name="puesto" id="puesto">
                        <option value="" selected disabled>Actual: <?php echo $puesto_actual; ?></option>
                        <?php echo $vista_puestos; ?>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12 pt-4 text-center text-lg-end">
                    <input hidden type="text" id="id" name="id" value="<?php echo $id ?>">
                    <input type="submit" id="submit" name="submit" class="px-4 py-3 btn btn-primary" value="Actualizar">
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>