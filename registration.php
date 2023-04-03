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

// Take all 4 values from the form data on tickets.html
$full_name =  $_REQUEST['fullname'];
$email_address = $_REQUEST['email_address'];
$sex = $_REQUEST['sex'];


// Performing insert query execution
// here our table name is customer which has 3 columns
$sql = "INSERT INTO users (Full_name, Email_address, Sex) VALUES ('$full_name','$email_address', '$sex')";


if(mysqli_query($conn, $sql)){
    echo "<h1>User details stored successfully.<br>";
    echo "<h2>Now returning you to the main page. Please wait ...";
    header("refresh:3;url=index.html");

// in case of error, report message
} else{
    echo "ERROR: Cannot add user ... $sql. ". mysqli_error($conn);
}

// closing connection
$conn->close();
?>