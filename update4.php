<?php 
include'connect.php'; 
$id = $_GET['updateid'];
$sql = "select * from `ResumeInfo5` where id =$id";
$results = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($results);
$id=$row['id'];
$name=$row['name'];
$issue=$row['issue'];
$org=$row['organisation'];


 if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $issue=$_POST['issue'];
    $org=$_POST['org'];
    $sql = "update `ResumeInfo5` set id=$id ,name='$name',issue='$issue', organisation='$org' where id=$id";
    $result = mysqli_query($con,$sql);
    if($result){
        // echo "Data Updated successfully";
        header('location:display4.php');
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
              <label class="col-sm-2 col-form-label">Certificate Name :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="name" placeholder="Enter Certificate Name" value=<?php echo $name;?>>
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Issue Date :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="issue" placeholder="Enter Issue Date" value=<?php echo $issue;?>>
                </div>
            </div>

            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Organisation :</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="org" placeholder="Enter Organisation name" value=<?php echo $org;?>> 
                </div>
            </div>

            <button type="submit" class="btn btn-primary" name="submit" >UPDATE</button>
        </form>
    </div>
  </body>
</html>