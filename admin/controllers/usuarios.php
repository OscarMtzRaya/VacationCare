<?php
/*
 * DataTables example server-side processing script.
 *
 * Please note that this script is intentionally extremely simple to show how
 * server-side processing can be implemented, and probably shouldn't be used as
 * the basis for a large complex system. It is suitable for simple use cases as
 * for learning.
 *
 * See http://datatables.net/usage/server-side for full details on the server-
 * side processing requirements of DataTables.
 *
 * @license MIT - http://datatables.net/license_mit
 */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Easy set variables
 */

// DB table to use
$table = 'datosusuarios';

// Table's primary key
$primaryKey = 'id';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
    array(
        'db' => 'id',
        'dt' => 'DT_RowId',
        'formatter' => function ($d, $row) {
            // Technically a DOM id cannot start with an integer, so we prefix
            // a string. This can also be useful if you have multiple tables
            // to ensure that the id is unique with a different prefix
            return '' . $d;
        }
    ),
    array('db' => 'nombre', 'dt' => 0),
    array('db' => 'apellido',  'dt' => 1),
    array('db' => 'puesto',   'dt' => 2),
    array('db' => 'rol',     'dt' => 3),
    array('db' => 'activo',     'dt' => 4, 'formatter' => function ($d, $row) {
        $activo = '<div class="alert alert-success p-2 mb-0" role="alert">Activo</div>';
        $inactivo = '<div class="alert alert-danger p-2 mb-0" role="alert">Inactivo</div>';
        return $d == 1 ? $activo : $inactivo;
    }),
    array('db' => 'id',     'dt' => 5, 'formatter' => function ($d, $row) {
        /* $activo =
            '<div class="row">' .
                '<div class="col-6 text-center">' .
                    '<a href="/admin/editar/usuario.php" class="btn btn-outline-warning mb-0" role="alert">Editar</a>' .
                '</div>' .
                '<div class="col-6 text-center">' .
                    '<a href="/admin/eliminar/usuario.php" id:=' . $d . ' class="btn btn-outline-danger mb-0" role="alert">Borrar</a>' .
                '</div>' .
            '</div>'; */

        $activo = '<div class="text-center"><a href="/admin/editar/usuario.php?id='.$d.'" class="py-0 px-2 btn btn-outline-warning" style="font-size: 1.2rem; margin-right: 0.5rem" role="alert"><i class="ti ti-edit"></i></a>' .
        '<a href="/admin/eliminar/usuario.php?id='.$d.'" class="py-0 px-2 btn btn-outline-danger" style="font-size: 1.2rem" role="alert"><i class="ti ti-trash"></i></a></div>';
        return $activo;
    })
);

// SQL server connection information
$sql_details = array(
    'user' => 'grupoar6_vcare',
    'pass' => 'gVzs-0iSw*UD',
    'db'   => 'grupoar6_vcare',
    'host' => 'localhost'
);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */

require_once('ssp.class.php');

echo json_encode(
    SSP::simple($_GET, $sql_details, $table, $primaryKey, $columns)
);
