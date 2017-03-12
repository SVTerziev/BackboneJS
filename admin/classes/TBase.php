<?php
trait TBase {
    final public function set($id) {
        $this->id = $id;
        
        return $this;
    }
    
    final public function getAll() {
        $allItems = $this->db->query("SELECT * FROM `$this->table`");
        
        return $allItems->fetchAll(PDO::FETCH_OBJ);
    }
    
    final public function delete() {
        $item = $this->db->prepare("DELETE FROM `$this->table` WHERE `id` = :id");
        $item->bindParam(':id', $this->id);
        $item->execute();
    }
    
    final public function get() {
        $item = $this->db->prepare("SELECT * FROM `$this->table` WHERE `id` = :id");
        $item->bindParam(':id', $this->id);
        $item->execute();
        if ($item->rowCount() != 0) {
            return $item->fetch(PDO::FETCH_OBJ);
        }
    }
    
    public function edit($title, $text, $image) {
        $item = $this->db->prepare("UPDATE `$this->table` SET `title` = :title, `text` = :text, `image` = :image WHERE `id` = :id");
        $item->bindParam(':title', $title);
        $item->bindParam(':text', $text);
        $item->bindParam(':image', $image);
        $item->bindParam(':id', $this->id);
        $item->execute();
    }
 }
?>