<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2019-04-09
 * Time: 3:10 PM
 */

// Returns list of assignments

require 'connect.php';
$assignments = [];
$query = "SELECT * FROM assignments";

if($result = mysqli_query($connection, $query)) {
    $record = 0;
    while($row = mysqli_fetch_assoc($result)) {
        $assignments[$record]['userid'] = $row['userid'];
        $assignments[$record]['id'] = $row['id'];
        $assignments[$record]['teachercopy'] = $row['teachercopy'];
        $assignments[$record]['class'] = $row['class'];
        $assignments[$record]['releaseDate'] = $row['releaseDate'];
        $assignments[$record]['dueDate'] = $row['dueDate'];
        $assignments[$record]['title'] = $row['title'];
        $assignments[$record]['body'] = $row['body'];
        $assignments[$record]['coursePercentage'] = $row['coursePercentage'];
        $assignments[$record]['studentGrade'] = $row['studentGrade'];


        $record++;
    }

    echo json_encode(['data' => $assignments]);
} else {
    http_response_code(404);
}
