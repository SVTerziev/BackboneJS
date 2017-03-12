<?php
class Articles {
    use TBase;
    
    private $db;
    private $table;
    private $id;
    
    public function __construct($db, $table) {
        $this->db = $db;
        $this->table = $table;
    }
    
    public function add($title, $text, $image) {
        $now = time();
        $article = $this->db->prepare("INSERT INTO `$this->table` (`title`, `image`, `text`, `date`)
                                      VALUES (:title, :image, :text, :date)");
        $article->bindParam(':title', $title);
        $article->bindParam(':image', $image);
        $article->bindParam(':text', $text);
        $article->bindParam(':date', $now);
        $article->execute();
    }
 }
?>