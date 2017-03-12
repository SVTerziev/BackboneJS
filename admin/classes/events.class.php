<?php
class Events {
    private $db;
    private $id;
    private $table = "events";
    
    function __construct($db) {
        $this->db = $db;
    }
    
    function add($title, $link, $startDate, $endDate = null) {
        $event = $this->db->prepare("INSERT INTO `events` (`title`, `link`, `startDate`, `endDate`)
                                     VALUES (:title, :link, :startDate, :ednDate)");
        $event->bindParam(':title', $title);
        $event->bindParam(':link', $link);
        $event->bindParam(':startDate', $startDate);
        $event->bindParam(':endDate', $endDate);
        $event->execute();
    }
    
    function edit($title, $link, $startDate, $endDate = null) {
        $event = $this->db->prepare("UPDATE `$this->table` SET `title` = :title, `link` = :link, `startDate` = :startDate, `endDate` = :endDate");
        $event->bindParam(':title', $title);
        $event->bindParam(':link', $link);
        $event->bindParam(':startDate', $startDate);
        $event->bindParam(':endDate', $endDate);
        $event->execute();
    }
}
?>