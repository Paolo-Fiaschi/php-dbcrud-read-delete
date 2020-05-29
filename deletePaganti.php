<?php
    $server = 'localhost';
    $username = 'root';
    $password = 'root';
    $dbName = 'HotelDb';

    $id = $_GET['id'];
    if ($id) {
        $conn = new mysqli($server, $username, $password, $dbName);
        if ($conn -> connect_errno) {
            echo json_encode($conn -> connect_errno); 
            return;
        }
        $sql = "
        DELETE 
        FROM paganti
        WHERE id = " . $id;

        $result = $conn -> query($sql);
        $conn -> close();

        header('Content-Type: application/json');

        if ($result) {

            echo json_encode(true);

        } else {

            echo json_encode(false);
        }

    } else {

        echo json_encode(false);
    }
    
