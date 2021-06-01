<?php
require 'database.php';

$sql = "SELECT kVAh FROM sensordata ORDER BY reading_time DESC LIMIT 1";
$myArray = array();

if($result = mysqli_query($con,$sql))
{
  
  while($row = mysqli_fetch_assoc($result))
  {
    $myArray[] = $row;

  }

  echo json_encode($myArray);
}
else
{
  http_response_code(404);
}
?>

