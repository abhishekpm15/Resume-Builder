<?php
 include 'connect.php';
 if(isset($_POST['submit'])){
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $headline = $_POST['headline'];
    $linkedin = $_POST['linkedin'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $age=$_POST['age'];
    $github = $_POST['github'];

    $sql = "insert into `ResumeInfo2` (lastname,firstname,headline,linkedin,email,phone,age,github) values('$fname','$lname','$headline','$linkedin','$email','$phone','$age','$github')";
    $result = mysqli_query($con,$sql);
    if($result){
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
    <title>Resume Builder</title>
  </head>
  <body>
    <div class="h2 text-center mt-5">
      Personal details
    </div>
 
    <div class="container my-5">
        <form method="post">
            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">First Name :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="fname" placeholder="Enter First Name">
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Last Name :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="lname" placeholder="Enter Last Name">
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Headline :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="headline" placeholder="Enter Headline">
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">LinkedIn :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="linkedin" placeholder="Enter Linkedin profile">
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Email :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="email" placeholder="Enter Email">
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Phone :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="phone" placeholder="Enter First Name">
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Age :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="age" placeholder="Enter Age">
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">GitHub :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="github" placeholder="Enter GitHub account">
                </div>
            </div>
            <!-- <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control"  placeholder="Enter First Name" name="fname">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control"  placeholder="Enter Last Name" name="lname">
            </div>
            <div class="form-group">
                <label>Headline</label>
                <input type="text" class="form-control"  placeholder="Enter headline" name="headline">
            </div>
            <div class="form-group">
                <label>LinkedIn</label>
                <input type="text" class="form-control"  placeholder="Enter LinkedIn profile" name="linkedin">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Enter Email" name="email">
            </div>
            <div class="form-group">
                <label>Mobile</label>
                <input type="text" class="form-control" placeholder="Enter Mobile Number" name="mobile">
            </div>
            <div class="form-group">
                <label>Age</label>
                <input type="text" class="form-control"  placeholder="Enter Age" name="age">
            </div>
            <div class="form-group">
                <label>Github</label>
                <input type="text" class="form-control"  placeholder="Enter Github account" name="github">
            </div> -->
            <div class="text-center mt-5">
            <button type="submit" class="btn btn-primary" name="submit">Submit</button>
            </div>
          </form> 
    </div>
  </body>
</html>