<?php
// Connect to MySQL database
$servername = "localhost"; // Change this to your server name
$username = "root"; // Change this to your MySQL username
$password = ""; // Change this to your MySQL password
$dbname = "guvi_task_database"; // Change this to your MySQL database name

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

// Get data from HTML form
$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];

// Save data to MySQL database
$sql = "INSERT INTO registration_detail (uname, email, pswd)
VALUES ('$name', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
//	echo "Registration successful!";
	header("location: ../login.html");
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

<?php
  session_start();
  if (!isset($_SESSION['username']) || time() > $_SESSION['expires']) {
    // user is not logged in or session has expired
    header('Location: /login.php');
    exit;
  }
  // retrieve profile information from Redis
  $redis = new Redis();
  $redis->connect('127.0.0.1', 6379);
  $profile = json_decode($redis->get('profile:' . $_SESSION['username']), true);
?>
