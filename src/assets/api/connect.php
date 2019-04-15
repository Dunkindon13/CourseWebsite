<?php

/*
* Authors: Mathias Donath, Josh Fagen
* Date Created: April 10, 2019
* Last Modified: April 14, 2019
* Main Purpose: Establish connection to database
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