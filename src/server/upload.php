<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vidapet_db";

// Conectar ao MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Conexão ao banco de dados falhou: " . $conn->connect_error);
}

// Receba os dados do aplicativo React
$latitude = isset($_POST['latitude']) ? $_POST['latitude'] : null;
$longitude = isset($_POST['longitude']) ? $_POST['longitude'] : null;
$capture_datetime = isset($_POST['capture_datetime']) ? $_POST['capture_datetime'] : null;
$comments = isset($_POST['comments']) ? $_POST['comments'] : null;

// Insira os dados no banco de dados
$sql = "INSERT INTO captured_photos (latitude, longitude, capture_datetime, comments)
        VALUES ('$latitude', '$longitude', '$capture_datetime', '$comments')";

if ($conn->query($sql) === TRUE) {
    echo "Dados salvos com sucesso.";
} else {
    echo "Erro ao salvar os dados: " . $conn->error;
}

$conn->close();
?>
