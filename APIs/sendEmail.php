<?php
use PHPMailer\PHPMailer\PHPMailer;
function sendOTP($email,$otp){

require_once 'Exception.php';
require_once 'PHPMailer.php';
require_once 'SMTP.php';
$mail= new PHPMailer(true);

	
		$mail->isSMTP();
		$message_body = "One Time Password for verification :<br/><br/>" . $otp;
		$mail->Host='smtp.gmail.com';
		$mail->SMTPAuth=true;
		$mail->Username='sahukiran2899@gmail.com';
		$mail->Password='@vidyut1';
		$mail->SMTPSecure=PHPMailer::ENCRYPTION_STARTTLS;
		$mail->Port='587';
		
		$mail->setFrom('sahukiran2899@gmail.com');
		$mail->addAddress($email);
		
		$mail->isHTML(true);
		$mail->Subject = "OTP Verification";
		$mail->MsgHTML($message_body);

		
		$result=$mail->send();
		return $result;
}
	
?>