<?php
    require "./config/access.php";
    include_once("./config/config.php");

    //converting json data
    $loginData = file_get_contents("php://input"); // read the contents of a file into a string.
	if (isset($loginData)) {
        
		$LoginJson = json_decode($loginData);
                
		$email = $LoginJson->email;
        $password = $LoginJson->password;
        $account_type = $LoginJson->account_type;

		if ($email != "" || $password != "") {
            $pass = md5($password);
            $sqlUserQuery = "SELECT * FROM user
                            INNER JOIN account ON account.user_id = user.user_id
                            WHERE email='$email' AND password='$pass' ";

            $sqlUser = mysqli_query($con, $sqlUserQuery);
            
            while($row = mysqli_fetch_array($sqlUser))
            {
                $user_id = $row['user_id'];
                $account_type = $row['account_type'];
                $username = $row['username'];
                $email = $row['email'];
                $date_of_hiring = $row['date_of_hiring'];
                $contact = $row['contact'];
                $location = $row['location'];

                $response_status = array($user_id, $username, $email, $date_of_hiring, $contact, $location, $account_type);
                echo json_encode($response_status);
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