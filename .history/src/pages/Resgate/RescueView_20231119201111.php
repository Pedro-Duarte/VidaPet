<?php
header('Content-Type: text/html; charset=utf-8');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vidapet_db";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Checar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$sql = "SELECT id, image_path, latitude, longitude, capture_datetime, comments FROM captured_photos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<ul>";
    while($row = $result->fetch_assoc()) {
        echo "<li>";
        echo "<img src='vidapet/uploads/" . $row["image_path"] . "' alt='Foto do animal' style='width:100px; height:100px;' />";
        echo "<p>Latitude: " . $row["latitude"] . "</p>";
        echo "<p>Longitude: " . $row["longitude"] . "</p>";
        echo "<p>Data e Hora: " . $row["capture_datetime"] . "</p>";
        echo "<p>Comentários: " . $row["comments"] . "</p>";
        echo "</li>";
    }
    echo "</ul>";
} else {
    echo "0 resultados";
}

$conn->close();
?>
