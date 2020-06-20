<?php
/*Un script simplu pentru a introduce un mesaj(contact) in baza de date dintr-un formular cu metoda POST*/
require_once "connect.php";
$Nume=$_POST['f_Nume_C'];
$Prenume=$_POST['f_Prenume_C'];
$Email=$_POST['f_Email_C'];
$Mesaj=$_POST['f_Mesaj_C'];
$sql="INSERT INTO contact(Nume, Prenume, Email, Mesaj) 
VALUES ('$Nume','$Prenume','$Email','$Mesaj')";
mysqli_query($conn,$sql);
header('Location:contact.html');
?>