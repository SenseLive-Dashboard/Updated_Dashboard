<?php
require 'database.php';
$sql = "SELECT reading_time,Power_Factor FROM sensordata ORDER BY reading_time DESC LIMIT 3";
$myArray = array();
if($result = mysqli_query($con,$sql))
{
    while($row = mysqli_fetch_array($result))
  {
    $myArrayItem= array("reading_time" =>  $row['reading_time'] ,"Power_Factor"=> $row['Power_Factor']);
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