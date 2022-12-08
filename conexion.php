<?php
  $link =mysqli_connect("localhost","u763112356_admin","Roadmapg1","u763112356_roadmap_game");  
      if(!$link){
          echo "Hubo un error al conectar la base de datos";
          echo "Error: $mysqli_connect_error()";
      }  
?>