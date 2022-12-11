<?php
 include 'connect.php';
 if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $year=$_POST['year'];


    $sql = "insert into `ResumeInfo7` (name,year) values('$name','$year')";
    $result = mysqli_query($con,$sql);
    if($result){
        header('location:display6.php');
    }
    else{
        die(mysqli_error($con));
    }
 }
 ?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" >
    <title>Resume Builder</title>
  </head>
  <body>
    <div class="h2 text-center mt-5">
      Accomplishments
    </div>
 
    <div class="container my-5">
        <form method="post">
            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Name :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="name" placeholder="Enter Name">
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Year :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="year" placeholder="Enter Year">
                </div>
            </div>

            <div class="text-center mt-5">
            <button type="submit" class="btn btn-primary" name="submit">Submit</button>
            </div>
          </form> 
    </div>
  </body>
</html>