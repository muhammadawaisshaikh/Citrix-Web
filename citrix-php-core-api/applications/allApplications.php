<?php
    require "../config/access.php";
    include_once("../config/config.php");
    
    // get all applications
    $getApplicationsQuery = "SELECT * FROM applications";

    $getApplications = mysqli_query($con, $getApplicationsQuery);

    while ($row = mysqli_fetch_array($getApplications))
    {
        $allApplications[] = $row;
    }

    echo json_encode($allApplications); 

?>