<?php
require 'database.php';
$value = $_GET['value'];
$sql = "SELECT * FROM sensordata WHERE Device_Id IN (SELECT meterid FROM meterregistration WHERE company='{$value}') ORDER BY reading_time DESC LIMIT 1";
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

