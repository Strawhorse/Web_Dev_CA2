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

// Take everything from the bookings table (by heading) and output to the bookings.html pages
$sql = "SELECT customer_name, email, movie, tickets, booking_date from customer";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  echo "<table><tr><th>Name</th><th>Email Address</th><th>Movie Title</th><th>Tickets</th><th>Date</th></tr>";
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<tr><td>".$row["customer_name"]."</td><td>".$row["email"]."</td><td>".$row["movie"]."</td><td>".$row["tickets"]."</td><td>".$row["booking_date"]."</td></tr>";
  }
  echo "</table>";
} else {
  echo "No results found, sorry!";
}

// close the connection
$conn->close();
?>