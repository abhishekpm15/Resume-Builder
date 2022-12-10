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
  <div class="h2 text-center my-4">
    EDUCATION DETAILS
  </div>
    <div class="container my-1">
    <button class="btn btn-primary my-5">
            <a href="create2.php" class="text-light"> 
            Add Data
            </a>
        </button>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Institution</th>
      <th scope="col">Degree</th>
      <th scope="col">Year</th>
      <th scope="col">%/CGPA</th>
      <th scope="col">Operations</th>
    </tr>
  </thead>
  <tbody>
  <?php
  $sql = "select * from `ResumeInfo3`";
  $result = mysqli_query($con,$sql);
  if($result){
    while($row = mysqli_fetch_assoc($result)){
        $id=$row['id'];
        $insti=$row['institution'];
        $degree=$row['degree'];
        $year=$row['year'];
        $cgpa=$row['cgpa'];
        echo '
        <tr>
            <td>'.$id.'</td>
            <td>'.$insti.'</td>
            <td>'.$degree.'</td>
            <td>'.$year.'</td>
            <td>'.$cgpa.'</td>
            <td>
            <button class="btn btn-primary"><a href="update2.php?updateid='.$id.'" class="text-light">UPDATE</a></button>
            <button class="btn btn-danger"><a href="delete2.php?deleteid='.$id.'" class="text-light">DELETE</a></button>
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
            <a href="create3.php" class="text-light"> 
            NEXT
            </a>
        </button>
        </div>
</body>
</html>