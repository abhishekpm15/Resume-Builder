<?php

include 'connect.php';

if(isset($_GET['deleteid'])){
    $id = $_GET['deleteid'];
    $sql = "delete from `ResumeInfo5` where id = $id";
    $result = mysqli_query($con,$sql);
    if($result){
        header('location:display4.php');
    }
    else{
        die(mysqli_error($con));
    }
}
?>