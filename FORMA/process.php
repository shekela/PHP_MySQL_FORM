<?php  

    $host = 'localhost';
    $databasename = 'base';
    $username = 'root';
    $password = '';

    $dsn = "mysql:host=$host;dbname=$databasename";
    
    $mysqli = new PDO($dsn, $username, $password);
    
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    
    if($name != '' &&  $surname != '' && $email != ''){
      echo "success";
      $mysqli->query("INSERT INTO data (name, surname, email) VALUES('$name', '$surname', '$email')");
      header("location: index.php");
    }
    
    

    else{

     
        echo "Please fill all fields";

    }

   if($id = $_GET['delete']){
        $mysqli->query("DELETE FROM data WHERE id=$id") or die($mysqli->error());
        header("location: index.php");
    }

    
?>