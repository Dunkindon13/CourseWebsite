<?php
/**
 * Created by PhpStorm.
 * Authors: Dmitry, Lydia, Meir, and Josh
 * Date: 2019-04-15
 * Time: 12:33 PM
 * Purpose: API File to Delete an announcement from Database
 */

require 'connect.php';
// Unpack data from service
$passed = file_get_contents("php://input");

//Decode and cast property to integer
$passed = json_decode($passed);
$id = (int)$passed->id;

//Trim/Remove escape characters
$id = mysqli_real_escape_string($connection, $id);

//Create query
$sql = "DELETE FROM announcements_table WHERE id = $id";

//Execute Query
$result = mysqli_query($connection, $sql);