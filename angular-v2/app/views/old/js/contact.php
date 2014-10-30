<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_color = $_POST['cf_color'];
$field_message = $_POST['cf_message'];

$mail_to = 'noanchor@live.com';
$subject = 'NoAnchor Contact Form Message: '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Favorite Color: '.$field_color."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thanks for contacting us. You\'ll hear back from us shortly!');
		window.location = 'http://noanchor.com';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		//alert('Message failed. Please, send an email to gordon@template-help.com');
		alert('Message failed... You can email us at noanchor@live.com!');
		window.location = 'http://noanchor.com';
	</script>
<?php
}
?>