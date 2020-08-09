<?php
	include 'database.php';
	// Affiche TTS
	$conn = mysqli_connect($servername, $username, $password,$dbname);

	$sql = "SELECT * FROM witcher_message WHERE pseudo = 'TTS'";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$export = $row['message'];
		}
	}
	mysqli_close($conn);
	echo $export;
?>