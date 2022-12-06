<?php
 header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "id19913506_admin";
$password = "aassddqqQQ1122@";
$dbname = "id19913506_thecompany2022";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$title = $_GET['title'];
$description = $_GET['description'];
$details = $_GET['details'];

$sql = "INSERT INTO Service (title, description, details) VALUES ('$title', '$description','$details')";
$result = $conn->query($sql);
$rows = array();
 
if ($result) {
    echo "success";

} else {
  echo "failed";
}
$conn->close();
?>