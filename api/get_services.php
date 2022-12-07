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

$sql = "SELECT * FROM Service";
$result = $conn->query($sql);
$rows = array();
 
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
          $rows[] = $row;
  }
} else {
  echo "0 results";
}
sleep(3);
    echo json_encode(["data" => $rows]);
$conn->close();
?>

