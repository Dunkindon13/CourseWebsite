<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

    if(mysqli_connect_errno()) {
        echo "Failed to connect to database";
    } else {
        echo "Connected!";
    }

$teacherID = mysqli_real_escape_string($connection, trim($request->data->teacherID));
$date = mysqli_real_escape_string($connection, trim($request->data->date));
$title = mysqli_real_escape_string($connection, trim($request->data->title));
$body = mysqli_real_escape_string($connection, trim($request->data->body));


//    $sql = "INSERT INTO `assignments_table` (`subject`, `information`, `release_date`, `due_date`, `grade_weight`) VALUES ('$subject', '$information', '$release_date',  '$due_date', '$weight')";


$sql = "INSERT INTO `announcements_table`(`teacherID`, `date`, `title`, `body`) VALUES ('$teacherID', '$date', '$title', '$body')";




//    Temp / dummy SQL to check insert directly in phpMyAdmin

//$sql = "INSERT INTO `announcements_table`(`teacherID`, `date`, `title`, `body`) VALUES ('777', '2111-11-11', 'DummySQLInsert', 'Insert from dummy SQL')";


//    Temp / dummy SQL to check insert - now trying to insert the dummy data by clicking submit

//$sql = "INSERT INTO `announcements_table`(`teacherID`, `date`, `title`, `body`) VALUES ('888', '2112-12-12', 'DummySQLInsertByClick', 'Insert dummy SQL by Click')";



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