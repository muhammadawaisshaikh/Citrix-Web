<?php
    require "../config/access.php";
    include_once("../config/config.php");
    
    // get all applications
    $getApplicationsQuery = "SELECT * FROM applications
                                INNER JOIN standard_type ON standard_type.standard_type_id = applications.standard_type_id_fk ";

    $getApplications = mysqli_query($con, $getApplicationsQuery);

    while ($row = mysqli_fetch_array($getApplications))
    {
        $allApplications[] = $row;
    }

    echo json_encode($allApplications); 

?>