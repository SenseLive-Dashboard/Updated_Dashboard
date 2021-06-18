<?php
require 'database.php';
$companyName = $_GET['companyName'];
$sql = "SELECT * FROM sensordata WHERE Device_Id IN (SELECT meterid FROM meterregistration where company= '{$companyName}') ORDER BY reading_time DESC";
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

