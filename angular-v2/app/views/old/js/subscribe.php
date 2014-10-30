<?php
$field_email = $_POST['subscribe_email'];

$mail_to = 'noanchor@live.com';
$subject = 'NoAnchor Crew Subscriber';

$body_message .= 'E-mail: '.$field_email."\n";


$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thanks for joining the NA Crew!');
		window.location = 'http://noanchor.com';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		//alert('Message failed. Please, send an email to gordon@template-help.com');
		alert('Oh no, it didn\'t work... Please try again later or email noanchor@live.com!' );
		window.location = 'http://noanchor.com';
	</script>
<?php
}
?>