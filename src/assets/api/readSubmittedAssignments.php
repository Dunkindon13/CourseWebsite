<?php

/*
* Authors: Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 14, 2019
* Main Purpose: .
*/

require 'connect.php';
// Create array to hold assignments
$assignments = [];

// Create Query
$query = "SELECT * FROM submitted_assignments";

// Execute Query and insert records into array
if($result = mysqli_query($connection, $query)) {
    $record = 0;
    while($row = mysqli_fetch_assoc($result)) {
        $assignments[$record]['assignmentId'] = $row['assignment_id'];
        $assignments[$record]['studentid'] = $row['student_id'];
        $assignments[$record]['date'] = $row['date'];
        $assignments[$record]['submission'] = $row['submission'];
        $assignments[$record]['grade'] = $row['grade'];

        $record++;
    }

    // JSONify the data
    echo json_encode(['data' => $assignments]);
} else {
    // Return error if necessary
    http_response_code(404);
}
