<?php
    require "../config/access.php";
    include_once("../config/config.php");

    //converting json data
    $data = file_get_contents("php://input"); // read the contents of a file into a string.
	if (isset($data)) {
        
		$dataJson = json_decode($data);
                
        $sia_acs = $dataJson->sia_acs;
        $nsi_gold = $dataJson->nsi_gold;
        $iso_nine_thousand_one = $dataJson->iso_nine_thousand_one;
        $iso_fourteen_thousand_one = $dataJson->iso_fourteen_thousand_one;
        $iso_fourty_five_thousand_one = $dataJson->iso_fourty_five_thousand_one;
        $investor_in_people = $dataJson->investor_in_people;
        $safe_contractor = $dataJson->safe_contractor;
        $construction_line = $dataJson->construction_line;
        $builders_profile = $dataJson->builders_profile;
        $achilles = $dataJson->achilles;
        $sisqs = $dataJson->sisqs;
        $ssip = $dataJson->ssip;
        $chas = $dataJson->chas;
        $smas = $dataJson->smas;
        $competent_health_and_safety_advisor = $dataJson->competent_health_and_safety_advisor;
        $cdm_cordinator = $dataJson->cdm_cordinator;
        $fire_risk_aasessment = $dataJson->fire_risk_aasessment;

        $application_type = $dataJson->application_type;
        $company_name = $dataJson->company_name;
        $your_name = $dataJson->your_name;
        $position = $dataJson->position;
        $contact = $dataJson->contact;
        $email = $dataJson->email;
        $how_did_you_hear = $dataJson->how_did_you_hear;

        if ($application_type != "" || $company_name != "" || $your_name != "" || $position != "" || $contact != "" || $email != "" || $how_did_you_hear != "") 
        {
            $addStandardTypeQuery = "INSERT INTO standard_type(sia_acs, nsi_gold, iso_nine_thousand_one, iso_fourteen_thousand_one, iso_fourty_five_thousand_one, investor_in_people, safe_contractor, construction_line, builders_profile, achilles, sisqs, ssip, chas, smas, competent_health_and_safety_advisor, cdm_cordinator, fire_risk_aasessment) 
                VALUES('$standard_type', '$application_type', '$company_name', '$your_name', '$position', '$contact', '$email', '$how_did_you_hear')";

            $addApplicationQuery = "INSERT INTO applications(standard_type_id_fk, application_type, company_name, your_name, position, contact, email, how_did_you_hear) 
                VALUES(LAST_INSERT_ID(), '$application_type', '$company_name', '$your_name', '$position', '$contact', '$email', '$how_did_you_hear')";

            $addApplication = mysqli_query($con, $addApplicationQuery);
            $addStandardType = mysqli_query($con, $addStandardTypeQuery);

            if(!$addApplication || !$addStandardType)
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