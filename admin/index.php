<?php
require_once "config.php";
require_once "classes/TBase.php";
require_once "header.php";
const PAGES = ['news', 'friends', 'edit', 'list'];
$page = array_key_exists('page', $_GET) ? explode('/', htmlspecialchars($_GET['page']))[0] : '';
if ($page && in_array($page, PAGES) && file_exists($page.".php")) {
    require_once "$page.php";
} else {
    require_once "default.php";
}
require_once "footer.php";
?>