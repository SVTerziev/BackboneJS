<?php
require_once "classes/pages.class.php";
require_once "classes/articles.class.php";
$type = htmlspecialchars($_GET['type']);
switch ($type) {
    case 'friends':
    case 'pages':
        $items = new Pages($db, $type);
        break;
    case 'news':
    case 'lectures':
        $items = new Articles($db, $type);
        break;
    default:
        header('Location: /admin/index.php');
        break;
}
$currentPage = !empty((int)$_GET['id']) ? (int)$_GET['id'] : 1;
$currentPage -= 1;
$nextPage = $currentPage + 2;
$perPage = 10;
$from = $currentPage * $perPage;
$allItems = $items->getAll();
$currentPageItems = array_slice($allItems, $from, $perPage);
$totalPages = ceil(count($allItems) / $perPage);
$disabledFirst = $currentPage + 1 == 1 ? 'disabled' : '';
$disabledLast = $currentPage + 1 == $totalPages ? 'disabled' : '';
?>
<div class="card-deck-wrapper">
    <div class="card-deck">
    <div class="row">
    <?php
    foreach($currentPageItems as $item) {
    echo "<div class='card card-inverse card-danger text-xs-center col-sm-6'>
    <div class='card-block'>
    <h5 class='card-title' style='overflow:hidden'>$item->title</h5>
    <span class='card-text'>";
    if (property_exists($item, 'link')) {
    echo "$item->link ";
    }
    echo <<<HTML
    <a class='fa fa-lg fa-edit' href='/admin/edit/$type/$item->id'></a>
    <a class='fa fa-lg fa-times' href='test'></a>
    </span></div></div>
HTML;
    }
    echo <<<HTML
    </div></div></div>
          <nav class="text-xs-center">
            <ul class="pagination">
              <li class="page-item first $disabledFirst"><a href="/admin/list/$type/1" class="page-link">&laquo;</a></li>
              <li class="page-item prev $disabledFirst"><a href="/admin/list/$type/$currentPage" class="page-link">&lsaquo;</a></li>
HTML;
              for ($i = 1; $i <= $totalPages; $i++) {
              $isActive = $i == $currentPage + 1 ? 'active' : '';
              echo "<li class='page-item $isActive'><a href='/admin/list/$type/$i' class='page-link'>$i</a></li>";
              }
              echo <<<HTML
              <li class="page-item next $disabledLast"><a href="/admin/list/$type/$nextPage" class="page-link">&rsaquo;</a></li>
              <li class="page-item last $disabledLast"><a href="/admin/list/$type/$totalPages" class="page-link">&raquo;</a></li>
            </ul>
          </nav>
HTML;
?>