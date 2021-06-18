<?php
    include_once("database.php");
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $data_type = trim($request->data_type);
        $unit = trim($request->unit);
            $sql = "INSERT INTO parameterData(data_type, unit) VALUES ('$data_type', '$unit')";
                       if ($con->query($sql) === TRUE) {
                $authdata = [
                    'data_type' => $data_type,
                    'unit' => $unit,
                    'id' => mysqli_insert_id($con)
                    ];
                echo json_encode($authdata);
            } else {
                
                echo('Error');
            }
        
    }
    else{
        echo('Error');
    }
?>