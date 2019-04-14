<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

if(mysqli_connect_errno()) {
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

echo "Ann edit: ". $id."...". $teacherID. "...". "...". $title . "...". $body;

$sql = "UPDATE `announcements_table` SET `teacherID`=$teacherID,`date`='$date',`title`='$title',`body`='$body' WHERE `id`=$id";

$result = mysqli_query($connection,$sql);