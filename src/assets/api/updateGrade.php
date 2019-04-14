<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

if(mysqli_connect_errno()) {
    echo "Failed to connect to database";
} else {
    echo "Connected!";
}

$assignmentId = mysqli_real_escape_string($connection, trim($request->data->assignmentId));
$studentId = mysqli_real_escape_string($connection, trim($request->data->studentId));
//$date = mysqli_real_escape_string($connection, trim($request->data->date));
//$submission = mysqli_real_escape_string($connection, trim($request->data->submission));
$newgrade = mysqli_real_escape_string($connection, trim($request->data->grade));

echo $assignmentId."...". $studentId. "... New Grade ...". $newgrade;

//$newgrade =
//$sql = "UPDATE `submitted_assignments` SET `grade`=89 WHERE `assignment_id`=4 && `student_id`=7";


$sql = "UPDATE `submitted_assignments` SET `grade`=$newgrade WHERE `assignment_id`=$assignmentId && `student_id`=$studentId";


// function updateGrade($grade,$studentId){
//     $newGrade= $_POST["newgrade"];
//     $sql = "UPDATE `submitted_assignments` SET grade =: $grade WHERE studentId = :studentId";
//
//}









    $result = mysqli_query($connection,$sql);

