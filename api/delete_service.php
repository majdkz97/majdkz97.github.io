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

$id = $_GET['id'];


$sql = "DELETE FROM Service WHERE id='$id'";
$result = $conn->query($sql);
$rows = array();
 
if ($result) {
    echo "success";

} else {
  echo "failed";
}
$conn->close();
?>