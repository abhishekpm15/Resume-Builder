<?php 
include'connect.php'; 
$id = $_GET['updateid'];
$sql = "select * from `ResumeInfo4` where id =$id";
$results = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($results);
$id=$row['id'];
$name=$row['name'];
$duration=$row['duration'];
$desc=$row['description'];


 if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $duration=$_POST['duration'];
    $desc=$_POST['desc'];
    $sql = "update `ResumeInfo4` set id=$id ,name='$name',duration='$duration', description='$desc' where id=$id";
    $result = mysqli_query($con,$sql);
    if($result){
        // echo "Data Updated successfully";
        header('location:display3.php');
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
              <label class="col-sm-2 col-form-label">Project Name :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="name" placeholder="Enter First Name" value=<?php echo $name;?>>
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Duration :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="duration" placeholder="Enter Last Name" value=<?php echo $duration;?>>
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Description :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="desc" placeholder="Enter Headline" value=<?php echo $desc;?>> 
                </div>
            </div>

            <button type="submit" class="btn btn-primary" name="submit" >UPDATE</button>
        </form>
    </div>
  </body>
</html>