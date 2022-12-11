<?php 
include'connect.php'; 
$id = $_GET['updateid'];
$sql = "select * from `ResumeInfo6` where id =$id";
$results = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($results);
$id=$row['id'];
$skill=$row['skills'];



 if(isset($_POST['submit'])){
    $skill=$_POST['skill'];
    $sql = "update `ResumeInfo6` set id=$id ,skills='$skill' where id=$id";
    $result = mysqli_query($con,$sql);
    if($result){
        // echo "Data Updated successfully";
        header('location:display5.php');
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
              <label class="col-sm-2 col-form-label">Name :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="skill" placeholder="Enter Skills" value=<?php echo $skill;?>>
                </div>
            </div>

            <button type="submit" class="btn btn-primary" name="submit" >UPDATE</button>
        </form>
    </div>
  </body>
</html>