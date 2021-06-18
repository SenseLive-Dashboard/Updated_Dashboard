<?php
require 'database.php';
$m_id = $_GET['m_id'];
$sql = "SELECT * FROM sensordata WHERE Device_Id='{$m_id}' AND Reading_Time >= DATE_SUB(CURRENT_TIMESTAMP, interval 1 month)";
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