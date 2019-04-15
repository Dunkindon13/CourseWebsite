<?php

/*
* Authors: Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 14, 2019
* Main Purpose: .
*/

require 'connect.php';



//// Get the posted data.
$postdata = file_get_contents("php://input");
//if(isset($postdata) && !empty($postdata))
//{
//    // Extract the data.
    $request = json_decode($postdata);

// Trim and remove escape characters from inputs
    $subject = mysqli_real_escape_string($connection, trim($request->data->title));
    $information = mysqli_real_escape_string($connection, trim($request->data->body));
    $due_date = mysqli_real_escape_string($connection, trim($request->data->dueDate));
    $release_date = mysqli_real_escape_string($connection, trim($request->data->releaseDate));
    $weight = mysqli_real_escape_string($connection, trim($request->data->weight));


    $sql = "INSERT INTO `assignments_table` (`subject`, `information`, `release_date`, `due_date`, `grade_weight`) VALUES ('$subject', '$information', '$release_date',  '$due_date', '$weight')";



$result = mysqli_query($connection,$sql);

