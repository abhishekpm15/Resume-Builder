<?php 
include 'connect.php';
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" >
    <title>CRUD OPERATION</title>
</head>
<body>
  <div class="h2 text-center my-5">
    PERSONAL DETAILS
  </div>
    <div class="container my-5">
    <button class="btn btn-primary my-5">
            <a href="create.php" class="text-light"> 
            Add 
            </a>
        </button>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Headline</th>
      <th scope="col">LinkedIn</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Age</th>
      <th scope="col">Github</th>
      <th scope="col">Column data Operations</th>
    </tr>
  </thead>
  <tbody>
  <?php
  $sql = "select * from `ResumeInfo2`";
  $result = mysqli_query($con,$sql);
  if($result){
    while($row = mysqli_fetch_assoc($result)){
        $id = $row['id'];
        $fname=$row['firstname'];
        $lname=$row['lastname'];
        $headline = $row['headline'];
        $linkedin = $row['linkedin'];
        $email=$row['email'];
        $phone=$row['phone'];
        $age=$row['age'];
        $github = $row['github'];
        echo '
        <tr>
            <td>'.$id.'</td>
            <td>'.$fname.'</td>
            <td>'.$lname.'</td>
            <td>'.$headline.'</td>
            <td>'.$linkedin.'</td>
            <td>'.$email.'</td>
            <td>'.$phone.'</td>
            <td>'.$age.'</td>
            <td>'.$github.'</td>
            <td>
            <button class="btn btn-primary"><a href="update.php?updateid='.$id.'" class="text-light">UPDATE</a></button>
            <button class="btn btn-danger"><a href="delete.php?deleteid='.$id.'" class="text-light">DELETE</a></button>
            </td>
        </tr>';
    }
  }
  
  ?>

 
  </tbody>
</table>
    </div>
    <div class="text-center">
    <button class="btn btn-primary my-5 text-center">
            <a href="create2.php" class="text-light"> 
            NEXT
            </a>
        </button>
        </div>
</body>
</html>