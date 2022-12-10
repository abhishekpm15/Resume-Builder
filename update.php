<?php 
include'connect.php'; 
$id = $_GET['updateid'];
$sql = "select * from `ResumeInfo2` where id =$id";
$results = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($results);
$fname=$row['firstname'];
$lname=$row['lastname'];
$headline = $row['headline'];
$linkedin = $row['linkedin'];
$email=$row['email'];
$phone=$row['phone'];
$age=$row['age'];
$github = $row['github'];


 if(isset($_POST['submit'])){
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $headline = $_POST['headline'];
    $linkedin = $_POST['linkedin'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $age=$_POST['age'];
    $github = $_POST['github'];
    $sql = "update `ResumeInfo2` set id=$id ,firstname='$fname',lastname='$lname', headline='$headline',email='$email',phone='$phone',age='$age',github='$github' where id=$id";
    $result = mysqli_query($con,$sql);
    if($result){
        // echo "Data Updated successfully";
        header('location:display.php');
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
                  <input type="text" class="form-control" name="fname" placeholder="Enter First Name" value=<?php echo $fname;?>>
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Last Name :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="lname" placeholder="Enter Last Name" value=<?php echo $lname;?>>
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Headline :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="headline" placeholder="Enter Headline" value=<?php echo $headline;?>> 
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">LinkedIn :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="linkedin" placeholder="Enter Linkedin profile" value=<?php echo $linkedin;?>>
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Email :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="email" placeholder="Enter Email" value=<?php echo $email;?>>
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Phone :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="phone" placeholder="Enter First Name" value=<?php echo $phone;?>>
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Age :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="age" placeholder="Enter Age" value=<?php echo $age;?>>
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">GitHub :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="github" placeholder="Enter GitHub account" value=<?php echo $github;?>>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" name="submit" >UPDATE</button>
        </form>
    </div>
  </body>
</html>