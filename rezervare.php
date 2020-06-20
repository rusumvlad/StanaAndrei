<?php
/* Un script simplu pentru a introduce o rezervare in baza de date dintr-un formular cu metoda POST */
require_once "connect.php";
$Nume=$_POST['f_Nume'];
$Prenume=$_POST['f_Prenume'];
$Telefon=$_POST['f_Telefon'];
$DataR=$_POST['f_Data'];
$NumarPersoane=$_POST['f_Numar'];
$NumarZile=$_POST['f_NumarZile'];
$Email=$_POST['f_Email'];
$Cort=$_POST['f_Cort'];
$PretTotal = $_POST['f_Total']; 
$Observatii=$_POST['f_Observatii'];
$sql="INSERT INTO rezervare(Nume, Prenume, Numar_Telefon, Email, Data, Nr_Persoane, Nr_Zile, Cort, Pret, Observatii) 
VALUES ('$Nume','$Prenume','$Telefon','$Email','$DataR','$NumarPersoane','$NumarZile','$Cort','$PretTotal','$Observatii')";
mysqli_query($conn,$sql);
header('Location:preturi.html');
?>