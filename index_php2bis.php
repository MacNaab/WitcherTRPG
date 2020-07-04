<?php
	include 'database.php';
	// Affiche IMG
	$conn = mysqli_connect($servername, $username, $password,$dbname);

	$sql = "SELECT * FROM witcher_message WHERE pseudo = 'IMG'";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
?>	
		<img class="img_cool" id="mon_image_cool" onclick="img_nouvelle_page()" src="<?=$row['message'];?>">
<?php	
	}
	}
	mysqli_close($conn);
?>