<?php

/*
* Authors: Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 14, 2019
* Main Purpose: .
*/


// Returns list of assignments

require 'connect.php';
$assignments = [];
$query = "SELECT * FROM assignments_table";

if($result = mysqli_query($connection, $query)) {
    $record = 0;
    while($row = mysqli_fetch_assoc($result)) {
        $assignments[$record]['id'] = $row['id'];
        $assignments[$record]['title'] = $row['subject'];
        $assignments[$record]['body'] = $row['information'];
        $assignments[$record]['releaseDate'] = $row['release_date'];
        $assignments[$record]['dueDate'] = $row['due_date'];
        $assignments[$record]['weight'] = $row['grade_weight'];


        $record++;
    }

    echo json_encode(['data' => $assignments]);
} else {
    http_response_code(404);
}
