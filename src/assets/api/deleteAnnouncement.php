<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2019-04-15
 * Time: 12:33 PM
 */

require 'connect.php';
$passed = file_get_contents("php://input");
echo "$passed";
$id = $passed.id;

$id = mysqli_real_escape_string($connection, $id);
if (mysqli_connect_errno()) {
    echo "Failed to connect to database";
} else {
    echo "Connected!";
}

$sql = "DELETE FROM announcements_table WHERE id = $id";