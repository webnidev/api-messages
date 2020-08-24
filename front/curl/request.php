<?php

class Request{
	private $ch;
	private $result;
	function __construct($url){
		$this->ch = curl_init($url);
		$this->setopt(CURLOPT_RETURNTRANSFER, true);
		$this->setopt(CURLOPT_SSL_VERIFYPEER, false);
		//$this->result = json_decode(curl_exec($this->ch));
	}

	function setopt($option, $value){
		curl_setopt($this->ch, $option, $value );
	}

	function exec(){
		return json_decode(curl_exec($this->ch));
	}



}
