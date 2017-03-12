<?php
require_once "config.php";
require_once "classes/TBase.php";
require_once "classes/articles.class.php";
require_once "classes/pages.class.php";
require_once "classes/events.class.php";

if (array_key_exists('submit', $_POST)) {
    $id = $_POST['id'];
    $title = $_POST['title'];
    $image = $_POST['image'];
    $text = $_POST['text'];
    $type = $_POST['type'];
    
    switch ($type) {
        case 'news':
        case 'lectures':
            $items = new Articles($db, $type);
            $items->set($id)->edit($title, $text, $image);
            break;
        case 'friends':
        case 'pages':
            $link = $_POST['link'];
            $items = new Pages($db, $type);
            $items->set($id)->edit($title, $link, $text, $image);
            break;
        case 'events':
            $items = new Events($db);
            break;
        default:
            header('Location: /admin/index.php');
            break;
    }
}
?>