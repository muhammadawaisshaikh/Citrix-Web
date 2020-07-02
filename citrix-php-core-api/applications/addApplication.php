<?php
    require "../config/access.php";
    include_once("../config/config.php");

    //converting json data
    $data = file_get_contents("php://input"); // read the contents of a file into a string.
	if (isset($data)) {
        
		$dataJson = json_decode($data);
                
		$standard_type = $dataJson->standard_type;
        $application_type = $dataJson->application_type;
        $company_name = $dataJson->company_name;
        $your_name = $dataJson->your_name;
        $position = $dataJson->position;
        $contact = $dataJson->contact;
        $email = $dataJson->email;
        $how_did_you_hear = $dataJson->how_did_you_hear;

        if ($standard_type != "" || $application_type != "" || $company_name != "" || $your_name != "" || $position != "" || $contact != "" || $email != "" || $how_did_you_hear != "") 
        {
            $addApplicationQuery = "INSERT INTO applications(standard_type, application_type, company_name, your_name, position, contact, email, how_did_you_hear) 
                VALUES('$standard_type', '$application_type', '$company_name', '$your_name', '$position', '$contact', '$email', '$how_did_you_hear')";

            $addApplication = mysqli_query($con, $addApplicationQuery);

            if(!$addApplication)
            {
                die('Error : ' . mysqli_error($con));
            }
            else {
                echo json_encode("success");
            }

		}
		else {
			echo json_encode("Empty parameters!");
		}
	}
	else {
        echo json_encode("Not called properly with parameter!")."\n";
	}  
?>