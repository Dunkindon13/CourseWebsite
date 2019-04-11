<?php
require 'connect.php';

//// Get the posted data.
$postdata = file_get_contents("php://input");
//if(isset($postdata) && !empty($postdata))
//{
//    // Extract the data.
$request = json_decode($postdata);
print_r($request);
if(mysqli_connect_errno()) {
    echo "Failed to connect to database";
} else {
    echo "Connected!";
}

// Validate.
//    if(trim($request->data->subject) === '' || trim($request->data->body) === '')
//    {
//        return http_response_code(400);
//


$assignmentId = mysqli_real_escape_string($connection, trim($request->data->assignmentId));
$studentId = mysqli_real_escape_string($connection, trim($request->data->studentId));
$date = mysqli_real_escape_string($connection, trim($request->data->date));
$submission = mysqli_real_escape_string($connection, trim($request->data->submission));
$grade = mysqli_real_escape_string($connection, trim($request->data->grade));


$sql = "INSERT INTO `submitted_assignments` (`assignment_id`, `student_id`, `date`, `submission`, `grade`) VALUES ('$assignmentId', '$studentId', '$date',  '$submission', '$grade')";

//$sql = "INSERT INTO `submitted_assignments`(`assignment_id`, `student_id`, `date`, `submission`, `grade`) VALUES ('11', '4', '2018-04-29', 'Does this work?', '80')";


$result = mysqli_query($connection,$sql);

//if(mysqli_query($connection,$sql));
//    {
//        http_response_code(201);
//
//        $assignment = [
//            'subject' => $subject,
//            'information' => $information,
//            'release_date' => $release_date,
//            'due_date' => $due_date,
//            'weight' => $weight
//        ];
//        echo json_encode(['data'=>$assignment]);
//    }
//    else
//    {
//        http_response_code(422);
//    }
//}