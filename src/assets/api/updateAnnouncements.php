<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2019-04-09
 * Time: 10:55 AM
 */
// Returns list of announcements

require 'connect.php';
$announcements = [];
$query = "INSERT INTO announcements";

if($result = mysqli_query($connection, $query)) {
    $record = 0;
    while($row = mysqli_fetch_assoc($result)) {
        $announcements[$record]['id'] = $row['id'];
        $announcements[$record]['teacherid'] = $row['teacherID'];
        $announcements[$record]['date'] = $row['date'];
        $announcements[$record]['title'] = $row['title'];
        $announcements[$record]['body'] = $row['body'];

        $record++;
    }

    echo json_encode(['data' => $announcements]);
} else {
    http_response_code(404);
}
