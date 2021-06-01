<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata)) {
      $request = json_decode($postdata);
      $data_type = $request->data_type;

      if($data_type=='Current'){
      $query = "UPDATE parameterdata SET val=(SELECT sensordata.Current_Avg FROM sensordata ORDER BY
      sensordata.reading_time DESC LIMIT 1) WHERE data_type='$data_type'";
      $run = mysqli_query($con,$query);
      if($run){
        $msg="Current value updated successfully";
        echo json_encode($msg);
    }
    else{
      echo('Error');
    }
      }
      else if($data_type=='Voltage'){
        $query = "UPDATE parameterdata SET val=(SELECT sensordata.Voltage_Avg FROM sensordata ORDER BY
        sensordata.reading_time DESC LIMIT 1) WHERE data_type='$data_type'";
        $run = mysqli_query($con,$query);
        if($run){
          $msg="Voltage value updated successfully";
          echo json_encode($msg);
      }
      else{
         echo('Error');
      }
      }
      else if($data_type=='Power'){
        $query = "UPDATE parameterdata SET val=(SELECT sensordata.Power_Factor FROM sensordata ORDER BY
        sensordata.reading_time DESC LIMIT 1) WHERE data_type='$data_type'";
        $run = mysqli_query($con,$query);
        if($run){
          $msg="Power value updated successfully";
          echo json_encode($msg);
      }
      else{
         echo('Error');
      }
      }
      else if($data_type=='Active Power'){
        $query = "UPDATE parameterdata SET val=(SELECT sensordata.Active_Power FROM sensordata ORDER BY
        sensordata.reading_time DESC LIMIT 1) WHERE data_type='$data_type'";
        $run = mysqli_query($con,$query);
        if($run){
          $msg="Active Power value updated successfully";
          echo json_encode($msg);
      }
      else{
        echo('Error');
      }
      }
      else if($data_type=='Reactive Power'){
        $query = "UPDATE parameterdata SET val=(SELECT sensordata.Reactive_Power FROM sensordata ORDER BY
        sensordata.reading_time DESC LIMIT 1) WHERE data_type='$data_type'";
        $run = mysqli_query($con,$query);
        if($run){
          $msg="Reactive Power value updated successfully"; 
          echo json_encode($msg);
      }
      else{
        echo('Error');
      }
      }
      else if($data_type=='Apparent Power'){
        $query = "UPDATE parameterdata SET val=(SELECT sensordata.Apparent_Power FROM sensordata ORDER BY
        sensordata.reading_time DESC LIMIT 1) WHERE data_type='$data_type'";
        $run = mysqli_query($con,$query);
        if($run){
          $msg="Apparent Power value updated successfully";
          echo json_encode($msg);
      }
      else{
        echo('Error');
      }
      }
      
    }
?>