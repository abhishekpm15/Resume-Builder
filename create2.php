<?php
 include 'connect.php';
 if(isset($_POST['submit'])){
    $insti=$_POST['insti'];
    $degree=$_POST['degree'];
    $year=$_POST['year'];
    $cgpa=$_POST['cgpa'];

    $sql = "insert into `ResumeInfo3` (institution,degree,year,cgpa) values('$insti','$degree','$year','$cgpa')";
    $result = mysqli_query($con,$sql);
    if($result){
        header('location:display2.php');
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
      Education details
    </div>
 
    <div class="container my-5">
        <form method="post">
            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Institute :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="insti" placeholder="Enter Institute Name">
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Degree :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="degree" placeholder="Enter degree">
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Year :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="year" placeholder="Enter Year">
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">% / CGPA:</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="cgpa" placeholder="Enter percentage or cgpa">
                </div>
            </div>
            <div class="text-center mt-5">
            <button type="submit" class="btn btn-primary" name="submit">Submit</button>
            </div>
          </form> 
    </div>
  </body>
</html>