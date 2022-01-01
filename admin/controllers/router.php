<?php

class Router
{
  public function createRoute($string)
  {
    $doc_root = $_SERVER['DOCUMENT_ROOT'];
    return "$doc_root/$string";
  }
}
