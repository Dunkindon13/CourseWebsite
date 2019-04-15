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


    $subject = mysqli_real_escape_string($connection, trim($request->data->title));
    $information = mysqli_real_escape_string($connection, trim($request->data->body));
    $due_date = mysqli_real_escape_string($connection, trim($request->data->dueDate));
    $release_date = mysqli_real_escape_string($connection, trim($request->data->releaseDate));
    $weight = mysqli_real_escape_string($connection, trim($request->data->weight));


    $sql = "INSERT INTO `assignments_table` (`subject`, `information`, `release_date`, `due_date`, `grade_weight`) VALUES ('$subject', '$information', '$release_date',  '$due_date', '$weight')";

//$sql = "INSERT INTO `assignments_table`(`subject`, `information`, `release_date`, `due_date`, `grade_weight`) VALUES ('TESTbbb', 'TESTbbb', '2018-04-28', '2018-05-28', '80')";


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