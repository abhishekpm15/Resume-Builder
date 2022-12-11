<?php 
include'connect.php'; 
$id = $_GET['updateid'];
$sql = "select * from `ResumeInfo3` where id =$id";
$results = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($results);
$insti=$row['institution'];
$degree=$row['degree'];
$year=$row['year'];
$cgpa=$row['cgpa'];


 if(isset($_POST['submit'])){
    $insti=$_POST['insti'];
    $degree=$_POST['degree'];
    $year=$_POST['year'];
    $cgpa=$_POST['cgpa'];
    $sql = "update `ResumeInfo3` set id=$id ,institution='$insti',degree='$degree', year='$year',cgpa='$cgpa' where id=$id";
    $result = mysqli_query($con,$sql);
    if($result){
        // echo "Data Updated successfully";
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

    <title>CRUD OPERATION</title>
  </head>
  <body>
  <div class="container my-5">
        <form method="post">
            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">First Name :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="insti" placeholder="Enter Institution name" value=<?php echo $insti;?>>
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Last Name :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="degree" placeholder="Enter degree" value=<?php echo $degree;?>>
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Headline :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="year" placeholder="Enter year" value=<?php echo $year;?>> 
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">LinkedIn :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="cgpa" placeholder="Enter cgpa" value=<?php echo $cgpa;?>>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" name="submit" >UPDATE</button>
        </form>
    </div>
  </body>
</html>