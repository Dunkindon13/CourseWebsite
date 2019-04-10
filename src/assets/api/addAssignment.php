<?php
require 'connect.php';

//// Get the posted data.
//$postdata = file_get_contents("php://input");
//if(isset($postdata) && !empty($postdata))
//{
//    // Extract the data.
//    $request = json_decode($postdata);

    // Validate.
//    if(trim($request->data->subject) === '' || trim($request->data->subject) === '')
//    {
//        return http_response_code(400);
//    }

    // Sanitize.
//    $model = mysqli_real_escape_string($con, trim($request->data->model));
//    $price = mysqli_real_escape_string($con, (int)$request->data->price);

//    $subject = mysqli_real_escape_string($connection, trim($request->data->title));
//    $information = mysqli_real_escape_string($connection, trim($request->data->body));
//    $due_date = mysqli_real_escape_string($connection, $request->data->dueDate);
//    $release_date = mysqli_real_escape_string($connection, $request->data->releaseDate);
//    $weight = mysqli_real_escape_string($conneciton, $request->data->weight);
    // Store.

//    $sql = "INSERT INTO `assignments_table`(``subject`, `information`, `release_date`, `due_date`, `grade_weight`) VALUES (`{$subject}`, `{$information}`, `{$release_date}`,  `{$due_date}`, `{$weight}`)";

        $sql = "INSERT INTO `assignments_table`(`subject`, `information`, `release_date`, `due_date`, `grade_weight`) VALUES ('TESTbbb', 'TESTbbb', '2018-04-28', '2018-05-28', '80')";


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