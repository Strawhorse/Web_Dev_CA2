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


// Performing insert query execution
// here our table name is customer which has 6 columns
$sql = "INSERT INTO customer (customer_name, email, movie, tickets, booking_date) VALUES ('$full_name',
                '$email_address','$movie_name', $tickets, '$movie_date')";


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