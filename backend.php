<?php
	if(!empty($_POST['email']))
	{
		$to="hello@endlesstone.com";
		$email = $_POST['email'];
		$name = $_POST['name'];
		$subject = "New Contact From $name";
		$message = $_POST['message'];
		$headers = "From:" . $email;
		echo mail($to,$subject,$message,$headers);
	}
?>
