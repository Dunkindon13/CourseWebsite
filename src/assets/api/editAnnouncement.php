<?php

/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 15, 2019
* Main Purpose: API to connect to database and edit an announcement record.
*/

require 'connect.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

if (mysqli_connect_errno()) {
    echo "Failed to connect to database";
} else {
    echo "Connected!";
}

$id = mysqli_real_escape_string($connection, trim($request->data->id));
$teacherID = mysqli_real_escape_string($connection, trim($request->data->teacherid));
$date = mysqli_real_escape_string($connection, trim($request->data->date));
$title = mysqli_real_escape_string($connection, trim($request->data->title));
$body = mysqli_real_escape_string($connection, trim($request->data->body));

$id = intval($id);

echo "Ann edit: " . $id . "..." . $teacherID . "..." . "..." . $title . "..." . $body;

$sql = "UPDATE `announcements_table` SET `teacherID`=$teacherID,`date`='$date',`title`='$title',`body`='$body' WHERE `id`=$id";

$result = mysqli_query($connection, $sql);