<?php
require 'database.php';
$sql = "SELECT reading_time,Current_Avg,Current_A,Current_B,Current_C FROM sensordata ORDER BY reading_time DESC LIMIT 3";
$myArray = array();
if($result = mysqli_query($con,$sql))
{
    while($row = mysqli_fetch_array($result))
  {
    $myArrayItem= array("reading_time" =>  $row['reading_time'] ,"Current_Avg" =>  $row['Current_Avg'],"Current_A"=> $row['Current_A'],"Current_B"=> $row['Current_B'],"Current_C"=> $row['Current_C']);
    array_push($myArray,$myArrayItem);
  } 
 header('Content-type: application/json');
  echo json_encode($myArray,JSON_NUMERIC_CHECK);
}
else
{
  http_response_code(404);
}
?>