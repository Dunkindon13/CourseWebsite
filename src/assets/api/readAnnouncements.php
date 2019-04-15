<?php
/*
* Authors: Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 15, 2019
* Main Purpose: Returns list of announcements.
*/

require 'connect.php';
$announcements = [];
$query = "SELECT * FROM announcements_table";

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
