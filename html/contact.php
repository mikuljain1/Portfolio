<?php
$name = $_POST['name'];
$email = $_POST['name'];
$phone = $_POST['name'];

//Database Connection
$conn = new mysqli('localhost','root','','conatct');
if($conn->connect_error){
    die('Connection Failed : ' .$conn->connect_error);
}else{
    $stmt = $conn->prepare("inster into conDetails(name, email, phone)")
        values(?,?,?)
    $stmt->bindparam("ssi", $name,$email,$phone)
    $stmt->execute();
    echo "Details Filled Successfully"
    $stmt->close();
    $conn->close();
}

?>