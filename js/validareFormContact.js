var numeC = document.getElementById("valid_nume_C");
var prenumeC = document.getElementById("valid_prenume_C");
var emailC = document.getElementById("valid_email_C");
var mesajC = document.getElementById("valid_mesaj_C");
var formC = document.getElementById("contactForm");
var eroareFormC = document.getElementById("eroareC");
//Functia care valideaza email
function validateEmail(email){
	//M-am folosit de expresie regulata(regex) - un sir de caractere care verifica daca este valid mailul
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

//Event Listener - atunci cand se apasa submit verifica formul(daca sunt toate campurile introduse corect)
formC.addEventListener('submit',(e) =>{
	let mesaj = []
	if(numeC.value === '' || numeC.value == null){
		mesaj.push('Trebuie completat  câmpul NUME')
	}
	if(prenumeC.value === '' || prenumeC.value == null){
		mesaj.push('Trebuie completat câmpul PRENUME')
	}
	if(emailC.value === '' || emailC.value == null){
		mesaj.push('Trebuie completat câmpul E-MAIL')
	} else 
	if(validateEmail(emailC.value) == 0){
		mesaj.push('Introduceți un E-MAIL valid');
	}
	if(mesajC.value === '' || mesajC.value == null){
		mesaj.push('Trebuie trimis un mesaj');
	}
	
	if(mesaj.length>0){
		e.preventDefault();
		eroareFormC.innerText = mesaj.join('\n ')
	} else if(mesaj.length==0){
		eroareFormC.innerText = "";
		alert("Mesajul a fost trimis! Vă mulțumim!");

	}
})
