<?php
require_once('../request.php');
$notification = $_POST["titulo_notificacao"];
$url = $_POST["url_notificacao"];
$category_id = $_POST['categoria_notificacao'];
$re = new Request("http://localhost:5000/notification");
$re->setopt(CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
$re->setopt(CURLOPT_POSTFIELDS, json_encode(array("notification"=>$notification, "url"=>$url, "category_id"=>$category_id)));

var_dump($re->exec());
header('Location: /gestor-notificacoes.php');