<?php
// Start the session
session_start();

// Check if user is already logged in
if (isset($_SESSION['username'])) {
	header("Location: ../profile.html");
	exit;
}

// Check if login form is submitted
if (isset($_POST['username']) && isset($_POST['password'])) {

	// Connect to the MySQL database
	$conn = mysqli_connect('localhost', 'root', '', 'guvi_task_database');

	// Check if connection was successful
	if (!$conn) {
		die('Error: Could not connect to database');
	}

	// Prepare SQL statement to fetch user from database
	$stmt = mysqli_prepare($conn, "SELECT * FROM registration_detail WHERE uname = ? AND pswd = ?");

	// Bind parameters to the SQL statement
	mysqli_stmt_bind_param($stmt, "ss", $_POST['username'], $_POST['password']);

	// Execute the SQL statement
	mysqli_stmt_execute($stmt);

	// Fetch the result
	$result = mysqli_stmt_get_result($stmt);

	// Check if user was found in the database
	if (mysqli_num_rows($result) > 0) {

		// Set session variables
		$_SESSION['username'] = $_POST['username'];

		// Redirect to the profile page
		header("Location: ../profile.html");
		exit;

	} else {

		// Display error message
		echo "Invalid username or password";

	}

	// Close the database connection
	mysqli_close($conn);
}
?>

<?php
  session_start();
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // perform login authentication
    if ($authenticated) {
      $_SESSION['username'] = $username;
      // set session expiration time to 30 minutes
      $_SESSION['expires'] = time() + 1800; 
      header('Location: /profile.php');
      exit;
    } else {
      // display login error message
    }
  }
?>
