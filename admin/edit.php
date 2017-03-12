<?php
require_once "classes/articles.class.php";
require_once "classes/pages.class.php";
require_once "classes/events.class.php";
$type = array_key_exists('type', $_GET) ? htmlspecialchars($_GET['type']) : '';
$id = array_key_exists('id', $_GET) ? (int)$_GET['id'] : '';

if ($type && $id) {
    switch ($type) {
        case 'news':
        case 'lectures':
            $items = new Articles($db, $type);
            break;
        case 'friends':
        case 'pages':
            $items = new Pages($db, $type);
            break;
        case 'events':
            $items = new Events($db);
            break;
        default:
            header('Location: /admin/index.php');
            break;
    }
    
    $item = $items->set($id)->get();
    if ($item == NULL) {
        header('Location: /admin/index.php');
    }

    if (empty($item->image)) {
$image = <<<HTML
<div class="col-sm-12">
HTML;
    } else {
$image = <<<HTML
<div class="col-sm-4 text-xs-center"><br>
    <img src="$item->image">
</div>
<div class="col-sm-8">
HTML;
    }
    
$html = <<<HTML
<form method="post" class="edit">
    <div class="row">
        $image
            <div class="form-group">
                <label for="title">Заглавие</label>
                <input type="text" class="form-control" id="title" name="title" value="$item->title">
            </div>
HTML;
if (property_exists($item, 'link')) {
$html .= <<<HTML
            <div class="form-group">
                <label for="link">Линк</label>
                <input type="text" class="form-control" id="link" name="link" value="$item->link">
            </div>
HTML;
}
$html .= <<<HTML
            <div class="form-group">
                <label for="image">Изображение</label>
                <input type="text" class="form-control" id="image" name="image" value="$item->image">
            </div>
        </div>
    </div>
    <div class="form-group">
        <div name="test" class="form-control" id="editor">$item->text</div>
    </div>
    <input type="hidden" name="id" value="$item->id">
    <input type="hidden" name="type" value="$type">
    <button class="change btn btn-danger btn-block">Промени</button>
</form>
<div class="saved">Промените бяха запазени</div>
HTML;
    
    echo $html;
} else {
    header('Location: /admin/index.php');
}
?>