
<?php
/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 15, 2019
* Main Purpose: API to connect to database and add a record about announcement.
*/

require 'connect.php';

// get data from service
$postdata = file_get_contents("php://input");

// Decode JSON data
$request = json_decode($postdata);


// trim and remove escape characters from inputs
$teacherID = mysqli_real_escape_string($connection, trim($request->data->teacherid));
$date = mysqli_real_escape_string($connection, trim($request->data->date));
$title = mysqli_real_escape_string($connection, trim($request->data->title));
$body = mysqli_real_escape_string($connection, trim($request->data->body));

// use inputs in SQL query
$sql = "INSERT INTO `announcements_table`(`teacherID`, `date`, `title`, `body`) VALUES ('$teacherID', '$date', '$title', '$body')";

// execute SQL query
$result = mysqli_query($connection, $sql);