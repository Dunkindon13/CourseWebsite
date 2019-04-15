<?php

/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 15, 2019
* Main Purpose: API to connect to database and edit an announcement record.
*/

require 'connect.php';

// Unpack data from service
$postdata = file_get_contents("php://input");

//De-JSONify data
$request = json_decode($postdata);

// Trim and remove escape characters from data
$id = mysqli_real_escape_string($connection, trim($request->data->id));
$teacherID = mysqli_real_escape_string($connection, trim($request->data->teacherid));
$date = mysqli_real_escape_string($connection, trim($request->data->date));
$title = mysqli_real_escape_string($connection, trim($request->data->title));
$body = mysqli_real_escape_string($connection, trim($request->data->body));

$id = intval($id);

// Create query
$sql = "UPDATE `announcements_table` SET `teacherID`=$teacherID,`date`='$date',`title`='$title',`body`='$body' WHERE `id`=$id";

// Execute Query
$result = mysqli_query($connection, $sql);