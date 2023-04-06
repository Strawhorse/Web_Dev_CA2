<?php

// Create connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bookings";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Take all 6 values from the form data on tickets.html
$full_name =  $_REQUEST['patron_name'];
$email_address = $_REQUEST['email_address'];
$movie_name =  $_REQUEST['movie_name'];
$tickets = $_REQUEST['tickets'];
$movie_date = $_REQUEST['viewing'];

// Set email parameters; your stmp settings would need to be set in the php.ini file in order for this method to work
$email_from = 'strawhorse@gmail.com';
$email_subject = "New movie booked";
$email_body = "To confirm that you have made a movie reservation\n".
$to = $email_address;
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email_address \r\n";



// Checking if the bot filled in the field, if they did then the form does not get completed.
if(isset($_POST['url']) && $_POST['url'] == ''){
     $sql = "INSERT INTO customer (customer_name, email, movie, tickets, booking_date) VALUES ('$full_name',
                     '$email_address','$movie_name', $tickets, '$movie_date')";
//      email confirmation to recipient
     mail($to,$email_subject,$email_body,$headers);
} else {
    echo "<h1>Sorry, Mr Robot, no joy for you.<br>";
    echo "<h2>Sending you back. Please wait ...";
    header("refresh:3;url=index.html");
}


// Performing insert query execution
// here our table name is customer which has 6 columns

if(mysqli_query($conn, $sql)){
    echo "<h1>Booking stored successfully.<br>";
    echo "<h2>Now returning you to the main page. Please wait ...";
    header("refresh:3;url=index.html");

// in case of error, report message
} else{
    echo "ERROR: Sorry about that ... $sql. ". mysqli_error($conn);
}

// closing connection
$conn->close();
?>