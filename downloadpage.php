<?php 
include 'connect.php';
header("Content-type: application/vnd.ms-word");
header("Content-Disposition: attachment; Filename=Resume.doc");
?>
<!DOCTYPE html>
<html lang="en">
<head>
<style>
.name{
    font-size :25px;
    width:auto;
    font-family: "Times New Roman", Times, serif;
}
.para{
    font-size :17px;
    font-family: "Times New Roman", Times, serif;
    margin-top:10px;
}

.para2{
    margin-top:7px;
}

</style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
  $sql = "select * from `ResumeInfo2`";
  $sql2 = "select * from `ResumeInfo3`";
  $sql3 = "select * from `ResumeInfo4`";
  $sql4 = "select * from `ResumeInfo5`";
  $sql5 = "select * from `ResumeInfo6`";
  $sql6 = "select * from `ResumeInfo7`";


  $result  = mysqli_query($con,$sql);
  $result2 = mysqli_query($con,$sql2);
  $result3 = mysqli_query($con,$sql3);
  $result4 = mysqli_query($con,$sql4);
  $result5 = mysqli_query($con,$sql5);
  $result6 = mysqli_query($con,$sql6);

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
        <div>
        <br>
            <div class="name">'.$fname.' '.$lname.'</div>
                <div class="para">
                    <div class="para2">
                        '.$headline.'
                    </div>
                    <div class="para2">
                        '.$linkedin.'
                    </div>
                    <div class="para2">
                        '.$email.'
                    </div>
                    <div class="para2">
                        '.$phone.'
                    </div>
                    <div class="para2">
                        Age : '.$age.'
                    </div>
                    <div class="para2"> 
                        '.$github.'
                    </div>
                </div>
        </div>
        ';
    }
}
echo '<hr>';
echo '<div class="name mt">Education Details</div>';
if($result2){
    while($row = mysqli_fetch_assoc($result2)){
        $id=$row['id'];
        $insti=$row['institution'];
        $degree=$row['degree'];
        $year=$row['year'];
        $cgpa=$row['cgpa'];
        echo '

        <div>
                <div class="para">
                    <div class="para2">
                        '.$insti.'
                    </div>
                    <div class="para2">
                        '.$degree.'
                    </div>
                    <div class="para2">
                        '.$year.'
                    </div>
                </div>
                <br>
        </div>
        ';
    }
  }
  echo '<hr>';
  echo '<div class="name mt">Project Details </div>';

  if($result3){
    while($row = mysqli_fetch_assoc($result3)){
        $id=$row['id'];
        $name=$row['name'];
        $duration=$row['duration'];
        $desc=$row['description'];
        echo '


        <div>
                <div class="para">
                    <div class="para2">
                        '.$name.'
                    </div>
                    <div class="para2">
                        '.$duration.'
                    </div>
                    <div class="para2">
                        '.$desc.'
                    </div>
                </div>
                <br>
        </div>
    ';
    }
  }
  echo '<hr>';
  echo '<div class="name mt">Certificates</div>';
  if($result4){
    while($row = mysqli_fetch_assoc($result4)){
        $id=$row['id'];
        $name=$row['name'];
        $issue=$row['issue'];
        $org=$row['organisation'];
        echo '

        <div>
                <div class="para">
                    <div class="para2">
                        '.$name.'
                    </div>
                    <div class="para2">
                        '.$issue.'
                    </div>
                    <div class="para2">
                        '.$org.'
                    </div>
                </div>
                <br>
        </div>
        ';
    }
  }
  echo '<hr>';
  echo '<div class="name mt">Skills</div>';
  if($result5){
    while($row = mysqli_fetch_assoc($result5)){
        $id=$row['id'];
        $skill=$row['skills'];
        echo '

        <div>
                <div class="para">
                    <div class="para2">
                        '.$skill.'
                    </div>
                </div>
        </div>
        ';
    }
  }

  echo '<hr>';
  echo '<div class="name mt">Accomplishements</div>';

  if($result6){
    while($row = mysqli_fetch_assoc($result6)){
        $id=$row['id'];
        $name=$row['name'];
        $year=$row['year'];
        echo '
        <div>
        <div class="para">
            <div class="para2">
                '.$name.'
            </div>
            <div class="para2">
                '.$year.'
            </div>
        </div>
        <br>
    </div>
    ';
    }
  }

?>
    
</body>
</html>