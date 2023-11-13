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

// Verificar se foi enviado um arquivo de imagem
if (isset($_FILES['capturedImage']) && $_FILES['capturedImage']['error'] === 0) {
    // Salve a imagem na pasta captured_photos
    $uploadDirectory = 'C:\\xampp\\htdocs\\captured_photos\\'; // Substitua pelo caminho correto
    $fileName = basename($_FILES['capturedImage']['name']);
    $uploadPath = $uploadDirectory . $fileName;

    if (move_uploaded_file($_FILES['capturedImage']['tmp_name'], $uploadPath)) {
        // Salve os dados no banco de dados
        $sql = "INSERT INTO captured_photos (image_path, latitude, longitude, capture_datetime, comments)
                VALUES ('$uploadPath', '$latitude', '$longitude', '$capture_datetime', '$comments')";

        if ($conn->query($sql) === TRUE) {
            echo "Dados salvos com sucesso.";
        } else {
            echo "Erro ao salvar os dados: " . $conn->error;
        }
    } else {
        echo "Erro ao fazer upload da imagem.";
    }
} else {
    echo "Nenhum arquivo de imagem enviado.";
}

$conn->close();
?>
