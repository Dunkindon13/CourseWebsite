<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2019-04-09
 * Time: 10:49 AM
 */
define('DB_HOST', 'localhost:81');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'coursewebsite');

function connect() {
    $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if(mysqli_connect_errno($connect)) {
        die("Connection error: " . mysqli_connect_error());
    }

    mysqli_set_charset($connect, "utf8");

    return $connect;
}

$connection = connect();

?>