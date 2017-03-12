<?php
session_start();
$_SERVER['HTTPS'] = false;
require 'vendor/autoload.php';

$settings =  [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];


$app = new \Slim\App($settings);

$app->get('/news[/]', 'news');
$app->get('/lectures[/]', 'lectures');
$app->get('/events[/]', 'events');
$app->get('/menu[/]', 'menu');
$app->get('/search/[{search}]', 'search');
$app->get('/pages[/]', 'pages');
$app->get('/friends[/]', 'friends');

$app->put('/news/{id}', 'updateNews');
$app->put('/lectures/{id}', 'updateLectures');
$app->put('/pages/{id}', 'updatePages');

$app->run();

function friends() {
	$sql = "SELECT * FROM `friends`";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->execute();
		$friends = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($friends);
	} catch (PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function updateNews($req, $res, $args) {
	$id = $args['id'];
	$req->getQueryParams();
	$req->getParams();
	$views = $req->getParam('views');
	$sql = "UPDATE `news` SET `views`=:views WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("views", $views);
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
		echo '{"success": "Successfuly updated"}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function updatePages($req, $res, $args) {
	$id = $args['id'];
	$req->getQueryParams();
	$req->getParams();
	$views = $req->getParam('views');
	$sql = "UPDATE `pages` SET `views`=:views WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("views", $views);
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
		echo '{"success": "Successfuly updated"}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function updateLectures($req, $res, $args) {
	$id = $args['id'];
	$req->getQueryParams();
	$req->getParams();
	$views = $req->getParam('views');
	$sql = "UPDATE `lectures` SET `views`=:views WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("views", $views);
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
		echo '{"success": "Successfuly updated"}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function pages() {
	$sql = "SELECT * FROM `pages`";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->execute();
		$pages = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($pages);
	} catch (PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function news() {
	$sql = "SELECT * FROM `news`";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->execute();
		$news = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($news);
	} catch (PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function lectures() {
	$sql = "SELECT * FROM `lectures`";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->execute();
		$lectures = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($lectures);
	} catch (PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function events() {
	$sql = "SELECT * FROM `events`";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->execute();
		$events = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($events);
	} catch (PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function menu() {
	$sql = "SELECT * FROM `menu`";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->execute();
		$menu = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($menu);
	} catch (PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}


function search($req, $res, $args) {
	if (array_key_exists('search', $args)) {
		$search = $args['search'];
		$sql = "(SELECT *, null as `link`, 'news' as `searchFor` FROM `news` WHERE CONCAT_WS('', `text`, `title`) LIKE '%$search%')
						union
						(SELECT *, null as `link`, 'lectures' as `searchFor` FROM `lectures` WHERE CONCAT_WS('', `text`, `title`) LIKE '%$search%')
						union
						(SELECT *, 'page' as `searchFor` FROM `pages` WHERE CONCAT_WS('', `text`, `title`) LIKE '%$search%')";
		try {
			$db = getConnection();
			$stmt = $db->prepare($sql);
			$stmt->execute();
			$results = $stmt->fetchAll(PDO::FETCH_OBJ);
			$db = null;
			echo json_encode($results);
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
	} else {
		echo "[]";
	}
}

function getConnection() {
	$dbhost="localhost";
	$dbuser="root";
	$dbpass="";
	$dbname="test";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}

?>
