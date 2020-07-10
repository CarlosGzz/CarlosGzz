<?php 
    if(isset($_POST['submit'])){
        $to = "carlosgzz93@gmail.com"; // this is your Email address
        $from = $_POST['submit']['email']; // this is the sender's Email address
        $name = $_POST['submit']['name'];
        $subject = "CarlosGzz.com: Form Submission";
        $subject2 = "CarlosGzz.com: Copy of your form submission";
        $message = $name . " wrote the following:" . "\n\n" . $_POST['submit']['message'];
        $message2 = "Hi " . $name . " Here is a copy of your message: \n\n" . $_POST['submit']['message'];

        $headers = "From:" . $from;
        $headers2 = "From:" . $to;
        if(mail($to,$subject,$message,$headers) > 0) {
            echo "success sender";
        } else {
            echo "error sender"
        }
        if(mail($from,$subject2,$message2,$headers2) > 0 ) {
            echo "succes copy";
        }else {
            echo "error on copy"
        }
    }
?>