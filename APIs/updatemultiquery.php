<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)) {
$request = json_decode($postdata);
$data_type = trim($request->data_type);
      $query = "UPDATE parameterdata SET val=(SELECT sensordata.Current_Avg FROM sensordata ORDER BY
      sensordata.reading_time DESC LIMIT 1) WHERE data_type='Current'";
       $run = mysqli_multi_query($con,$query);
      if($run){
        $msg="value updated successfully";
        echo json_encode($run);
    }
    else{
      echo json_encode($run);
    }   
      $query = "UPDATE parameterdata SET val=(SELECT sensordata.Voltage_Avg FROM sensordata ORDER BY
      sensordata.reading_time DESC LIMIT 1) WHERE data_type='Voltage'";
       $run = mysqli_multi_query($con,$query);
       if($run){
         $msg="value updated successfully";
         echo json_encode($run);
     }
     else{
        echo json_encode($run);
     }   
      $query = "UPDATE parameterdata SET val=(SELECT sensordata.Power_Factor FROM sensordata ORDER BY
      sensordata.reading_time DESC LIMIT 1) WHERE data_type='Power'";
       $run = mysqli_multi_query($con,$query);
       if($run){
         $msg="value updated successfully";
         echo json_encode($run);
     }
     else{
       echo json_encode($run);
     }   
      $query = "UPDATE parameterdata SET val=(SELECT sensordata.Active_Power FROM sensordata ORDER BY
      sensordata.reading_time DESC LIMIT 1) WHERE data_type='Active Power'";
       $run = mysqli_multi_query($con,$query);
       if($run){
         $msg="value updated successfully";
         echo json_encode($run);
     }
     else{
       echo json_encode($run);
     }   
      $query = "UPDATE parameterdata SET val=(SELECT sensordata.Reactive_Power FROM sensordata ORDER BY
      sensordata.reading_time DESC LIMIT 1) WHERE data_type='Reactive Power'";
       $run = mysqli_multi_query($con,$query);
       if($run){
         $msg="value updated successfully";
         echo json_encode($run);
     }
     else{
       echo json_encode($run);
     }   
      $query = "UPDATE parameterdata SET val=(SELECT sensordata.Apparent_Power FROM sensordata ORDER BY
      sensordata.reading_time DESC LIMIT 1) WHERE data_type='Apparent Power'";
      $run = mysqli_multi_query($con,$query);
      if($run){
        $msg="value updated successfully";
        echo json_encode($run);
    }
    else{
        echo json_encode($run);
    }  
  } 
?>