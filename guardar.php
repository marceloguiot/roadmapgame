<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
    $data = json_decode(file_get_contents("php://input"));
    $usuario = $data->grupo;
    $pass = $data->password;
    include('conexion.php');

    $ver_usr = mysqli_query($link,"SELECT * FROM static_sessions WHERE user_hash = '".$usuario."' AND standar_passwd = '".$pass."'");
    $ver_num = mysqli_num_rows($ver_usr);

    if($ver_num == 0)
    {
        echo "0";
    }
    else
    {
        echo "1";
    }
     
?>