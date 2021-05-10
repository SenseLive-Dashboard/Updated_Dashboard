<?php
include_once("database.php");
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $meterName = trim($request->meterName);
        $meterId = trim($request->meterId);
        $section = trim($request->section);
       
        
      
        $sql = "INSERT INTO meterregistration(meterName, meterId, section) VALUES ('$meterName', '$meterId', '$section')";

            if ($con->query($sql) === TRUE) {
                $authdata = [
                    'meterName' => $meterName,
                    'meterId' => $meterId,
                    'section' => $section,
                    'id' => mysqli_insert_id($con)
                    ];
                echo json_encode($authdata);
            } else {
                
                http_response_code(404);
            }
        }

       
?>