<?php

include 'connect.php';

if(isset($_GET['deleteid'])){
    $id = $_GET['deleteid'];
    $sql = "delete from `ResumeInfo3` where id = $id";
    $result = mysqli_query($con,$sql);
    if($result){
        header('location:display2.php');
    }
    else{
        die(mysqli_error($con));
    }
}
?>