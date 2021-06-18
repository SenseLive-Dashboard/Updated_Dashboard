<?php
include_once("database.php");
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $company = trim($request->company);
        $meterName = trim($request->meterName);
        $meterid = trim($request->meterid);
        $location = trim($request->location);
        $sql = "INSERT INTO meterregistration (meterName, meterid,company,location)
        SELECT '$meterName', '$meterid', '$company', '$location'
        WHERE NOT EXISTS 
            (SELECT meterid 
             FROM meterregistration 
             WHERE meterid = '$meterid')";
             mysqli_query($con,$sql);
         if (mysqli_affected_rows($con)) {
                $authdata = [
                    'company' => $company,
                    'meterName' => $meterName,
                    'meterid' => $meterid,
                    'location' => $location,
                    'id' => mysqli_insert_id($con)
                    ];
                echo json_encode($authdata);
            } 
            else {
                
                echo json_encode($authdata);
            }
        }

       
?>