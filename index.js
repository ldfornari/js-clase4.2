// declaro variables

let name = prompt("Ingrese su nombre");
let lastName = prompt("Ingrese su apellido");
let yearBorn = parseInt(prompt("Ingrese su año de nacimiento"));


// Funciones

function year (){  //funcion extra para desafio complementario

    const actualDate = new Date();
    const actualYear = parseInt(actualDate.getFullYear());    
    
    return (actualYear)
}

function age () {   //funcion extra para desafio complementario

    return (year () - yearBorn)
}

function antiquity () {  //funcion extra para desafio complementario

    return (year() - yearManu)
}

function ageRange () {    
   
    if (age () >= 65) {
        return 66;
    }
    else if (age() >= 36 && age() < 65) {
        return 36;
    }
    else if (age() >= 18 && age() < 36) {
        return 18;
    }
    else if (age() >= 14 && age() < 18) {
        return 14;
    }
    else if (age() >= 5 && age() < 14) {
        return 5;
    }
    else{
        return 1;
    }
    
}

function show() {

    switch (ageRange()) {

        case 66: return (alert ("Estimado " + name + " " + lastName + " por tener " + age() + " años de edad, uds es considerado un Adulto Mayor!"));

        case 36: return alert ("Estimado " + name + " " + lastName + " por tener " + age() + " años de edad, uds es considerado un Adulto!");

        case 18: return alert ("Estimado " + name + " " + lastName + " por tener " + age() + " años de edad, sos considerado un Adulto Joven");
        
        case 14: return alert ("Estimado " + name + " " + lastName + " por tener " + age() + " años de edad, sos considerado un Adolescente!");
        
        case 5: return alert ("Estimado " + name + " " + lastName + " por tener " + age() + " años de edad, sos considerado un Niño!");
        
        case 1: return alert ("Estimado " + name + " " + lastName + " por tener " + age() + " años de edad, sos considerado un Infante!");

    }
}   

show();