<?php
class Pages {
    use TBase {
        edit as baseEdit;
    }
    
    private $db;
    private $table;
    private $id;
    
    public function __construct($db, $table) {
        $this->db = $db;
        $this->table = $table;
    }
    
    public function add($title, $link, $text, $image) {
        $page = $this->db->prepare("INSERT INTO `$this->table` (`title`, `link`, `text`, `image`)
                                      VALUES (:title, :link, :text, :image)");
        $page->bindParam(':title', $title);
        $page->bindParam(':link', $link);
        $page->bindParam(':text', $text);
        $page->bindParam(':image', $image);
        $page->execute();
    }
    
    public function edit($title, $link, $text, $image) {
        $this->baseEdit($title, $text, $image);
        
        $page = $this->db->prepare("UPDATE `$this->table` SET `link` = :link WHERE `id` = :id");
        $page->bindParam(':link', $link);
        $page->bindParam(':id', $this->id);
        $page->execute();
    }
}
?>