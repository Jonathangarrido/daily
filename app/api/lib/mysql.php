<?php
 
function connect_db() {
  $server = 'localhost'; // this may be an ip address instead
  $user = 'root';
  $pass = 'root';
  $database = 'chupatelosdedos'; // name of your database

  // $server = 'mysql.feline.cl';
  // $user = 'aire_daily';
  // $pass = 'despuestelocomento2014';
  // $database = 'aire_dailysabe';


  $connection = new mysqli($server, $user, $pass, $database);
  $connection->set_charset('utf8mb4');     
  return $connection;
}
?>