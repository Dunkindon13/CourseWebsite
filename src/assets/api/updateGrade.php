/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 8, 2019
* Last Modified: April 14, 2019
* Main Purpose: Update of submitted_assignments with a new grade according to assignmentId and studentId
*/


<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

if(mysqli_connect_errno()) {
    echo "Failed to connect to database";
} else {
    echo "Connected!";
}

$assignmentId = mysqli_real_escape_string($connection, trim($request->data));
$studentId = mysqli_real_escape_string($connection, trim($request->studentId));
$newgrade = mysqli_real_escape_string($connection, trim($request->grade));

//echo $assignmentId."...". $studentId. "... New Grade ...". $newgrade;


$sql = "UPDATE `submitted_assignments` SET `grade`=$newgrade WHERE `assignment_id`=$assignmentId && `student_id`=$studentId";


    $result = mysqli_query($connection,$sql);

