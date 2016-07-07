<?php 
  
  require "vendor/autoload.php";
  require 'lib/mysql.php';

  $app = new Slim\App();
  
  
  $app->get('/', 'get_all'); 

  $app->get('/receta/{id}', function($request, $response, $args) {
      get_id($args['id']);
  });

  $app->get('/categorias', 'get_categorias');

  $app->get('/productos', 'get_productos');

  $app->run();
  
  function get_all() {
      $db = connect_db();
      $sql = "SELECT * FROM recetas";
      $exe = $db->query($sql);
      $data = $exe->fetch_all(MYSQLI_ASSOC);
      $db = null;
      echo json_encode($data);
  }


  function get_id($id) {
      $db = connect_db();
      $sql = "SELECT * FROM recetas WHERE id = '".$id."'";
      $exe = $db->query($sql);
      $data = $exe->fetch_all(MYSQLI_ASSOC);
      $db = null;
      echo json_encode($data);
  }

  function get_categorias() {
      $db = connect_db();
      $sql = "SELECT distinct categoria FROM recetas";
      $exe = $db->query($sql);
      $data = $exe->fetch_all(MYSQLI_ASSOC);
      $db = null;
      echo json_encode($data);
  }

  function get_productos() {
      $db = connect_db();
      $sql = "SELECT distinct producto FROM recetas";
      $exe = $db->query($sql);
      $data = $exe->fetch_all(MYSQLI_ASSOC);
      $db = null;
      echo json_encode($data);
  }
   

?>