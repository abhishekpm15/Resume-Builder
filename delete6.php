<?php

include 'connect.php';

if(isset($_GET['deleteid'])){
    $id = $_GET['deleteid'];
    $sql = "delete from `ResumeInfo7` where id = $id";
    $result = mysqli_query($con,$sql);
    if($result){
        header('location:display6.php');
    }
    else{
        die(mysqli_error($con));
    }
}
?>