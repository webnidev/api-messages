<?php
require_once('../request.php');
$message = $_POST["titulo_suporte"];
$url = $_POST["url_suporte"];
$re = new Request("http://localhost:5000/message");
$re->setopt(CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
$re->setopt(CURLOPT_POSTFIELDS, json_encode(array("message"=>$message, "url"=>$url)));

var_dump($re->exec());
header('Location: /index.php');