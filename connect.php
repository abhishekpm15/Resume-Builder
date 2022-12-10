<?php

$con = new mysqli('localhost','root','','resumebuilder');
if(!$con){
    echo die(mysqli_error($con));
}

?>