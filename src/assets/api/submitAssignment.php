<?php

/*
* Authors: Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 14, 2019
* Main Purpose: .
*/

require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

// Extract the data.
$request = json_decode($postdata);

// Remove Escape characters & trim inputs
$assignmentId = mysqli_real_escape_string($connection, trim($request->data->assignmentId));
$studentId = mysqli_real_escape_string($connection, trim($request->data->studentId));
$date = mysqli_real_escape_string($connection, trim($request->data->date));
$submission = mysqli_real_escape_string($connection, trim($request->data->submission));
$grade = mysqli_real_escape_string($connection, trim($request->data->grade));

// Create query
$sql = "INSERT INTO `submitted_assignments` (`assignment_id`, `student_id`, `date`, `submission`, `grade`) VALUES ('$assignmentId', '$studentId', '$date',  '$submission', '$grade')";

// Execute Query
$result = mysqli_query($connection,$sql);
