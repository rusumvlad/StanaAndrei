var nume = document.getElementById("valid_nume");
var prenume = document.getElementById("valid_prenume");
var telefon = document.getElementById("valid_telefon");
var numarPersoane = document.getElementById("valid_numarp");
var email = document.getElementById("valid_email");
var data = document.getElementById("valid_data");
var numarZile = document.getElementById("valid_numarz");
var pretT = document.getElementById("valid_pret")
var cort = document.getElementById("valid_cort");
var obs = document.getElementById("valid_obs");
var form = document.getElementById("rezervareForm");
var eroareForm = document.getElementById("eroare");
var modal = document.getElementById("modal");

//Valideaza daca inputul introdus de utilizator este cifra
function validateNumere(numere){
	var numereTest = /^\d+$/;
	return numereTest.test(numere);
}
//Functie de calculare pret total
function calculPret(){
    var pretTotal = 0;
    var pretNoapte = 0;
    var pretCort = 0;
    //Valorile pret pentru numarul de zile
    if(numarZile.value === '' || numarZile.value == null){
        pretNoapte=0;
    } else if(parseInt(numarZile.value) < 7)
    {
        pretNoapte = 30*numarZile.value;
    } else if (parseInt(numarZile.value) == 7){
        pretNoapte = 180;
    }
    //Valoriile pentru pretul cortului
    if(parseInt(cort.value) == 0){
        pretCort = 0;
    } else if(parseInt(cort.value) == 1){
        pretCort = 30;
    } else if(parseInt(cort.value) == 2){
        pretCort = 50;
    } else if(parseInt(cort.value) == 3){
        pretCort = 70;
    } else if(parseInt(cort.value) == 5){
        pretCort = 130;
    }
    if(parseInt(numarZile.value) > 7){
        pretNopate = 0;
        pretT.value="Nu se poate calcula";
        numarZile.value="Număr prea mare de zile";
    }
    else if(numarPersoane.value === '' || numarZile.value === ''){
        pretT.value="Introduceti numărul de persoane și de zile";
    }
    else if(validateNumere(numarZile.value)!=0 && numarPersoane.value != ''){
    pretTotal=numarPersoane.value*pretNoapte + pretCort + "RON";
    
    pretT.value = pretTotal;
    
    }
}


//Functia care valideaza email
function validateEmail(email){
	//M-am folosit de expresie regulata(regex) - un sir de caractere care verifica daca este valid mailul
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
//Functia care valideaza numarul de telefon(daca are 10 caractere)
function validateTelefon(telefon){
	var phoneno = /^\d{10}$/;
	return phoneno.test(telefon);
}

//Event Listener - atunci cand se apasa submit verifica formul(daca sunt toate campurile introduse corect)
form.addEventListener('submit',(e) =>{
	let mesaj = []
	if(nume.value === '' || nume.value == null){
		mesaj.push('Trebuie completat  câmpul NUME')
	}
	if(prenume.value === '' || prenume.value == null){
		mesaj.push('Trebuie completat câmpul PRENUME')
	}
	if(telefon.value === '' || telefon.value == null){
		mesaj.push('Trebuie completat câmpul NUMĂR DE TELEFON')
	} else 
	if(validateTelefon(telefon.value) == 0){
		mesaj.push('Trebuie să conțină exact 10 cifre')
	}
	if(numarPersoane.value === '' || numarPersoane.value == null){
		mesaj.push('Trebuie completat câmpul NUMĂR PERSOANE')
	} else if(validateNumere(numarPersoane.value)==0){
        mesaj.push("Câmpul NUMĂR PERSOANE trebuie să conțină numere");
    }
	if(email.value === '' || email.value == null){
		mesaj.push('Trebuie completat câmpul E-MAIL')
	} else 
	if(validateEmail(email.value) == 0){
		mesaj.push("Introduceți un E-MAIL valid");
    }
    if(numarZile.value === '' || numarZile.value == null){
        mesaj.push("Trebuie completat câmpul NUMĂR DE ZILE");
    } else
    if(validateNumere(numarZile.value)==0){
        mesaj.push("Număr de zile trebuie să conțină numere");
    }else if(numarZile.value>7){
        mesaj.push("Rezervarea se face pentru maxim 7 zile");
    }
	if(data.value === '' || data.value == null){
		mesaj.push('Trebuie completat câmpul DATA REZERVĂRII')
	}
	if(mesaj.length>0){
		e.preventDefault();
		eroareForm.innerText = mesaj.join('\n ')
	}else if(mesaj.length==0){
		eroareForm.innerText = "";
		alert("Rezervarea a fost trimisă, în cel mai scurt timp o sa vă contactăm prin e-mail/telefon! Vă mulțumim!");

	}
})
