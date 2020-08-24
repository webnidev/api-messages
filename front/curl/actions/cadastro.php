<?php
$message = $_POST["titulo_suporte"];
$url = $_POST["url_suporte"];

$data = json_encode(array("message"=>$message, "url"=>$url));
echo $data;
