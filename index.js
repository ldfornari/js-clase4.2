// declaro variables

let name = prompt("Ingrese su nombre");
let lastName = prompt("Ingrese su apellido");
let yearBorn = parseInt(prompt("Ingrese su año de nacimiento"));
let brand = prompt("Ingrese la Marca de su vehículo, por ej. Ford, Fiat, Renault, Chevrolet, ect.");
let model = prompt("Ingrese el Modelo, ej. Fiesta, Focus, Duster, Captur, Toro, Cronos, Spin, Cruze, etc.");
let brandModel = (brand + " " + model)
let yearManu = parseInt(prompt("Ingrese el año de fabricación"));
 

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

function ageDisc () {    
   
    if (age () > 39 && age() <56) {
        return 5;
    }
    else if (age() > 55 && age() < 66) {
        return 3;
    }
    else{
        return 0;
    }
}

function price () {
    
    switch(brandModel) {

        case "Ford Fiesta": return Math.round((1500000/3500*30) + (antiquity()*10));

        case "Ford Focus": return Math.round((2000000/3500*20) + (antiquity()*10));

        case "Renault Duster": return Math.round((2000000/3500*20) + (antiquity()*10));
        
        case "Renault Captur": return Math.round((2500000/3500*20) + (antiquity()*10));
        
        case "Fiat Toro": return Math.round((3500000/3500*20) + (antiquity()*10));
        
        case "Fiat Cronos": return Math.round((2000000/3500*20) + (antiquity()*10));

        case "Chevrolet Spin": return Math.round((2500000/3500*20) + (antiquity()*10));

        case "Chevrolet Cruze": return Math.round((3500000/3500*20) + (antiquity()*10));

        default: return Math.round((2000000/3500*20) + (antiquity()*10));
    }
}

function brandDisc () {
    switch (brand) {

        case "Ford": return 6;    

        case "Renault": return 7;

        case "Fiat": return 5;

        case "Chevrolet": return 4;

        default: return  0;
    }    
}

function finalPrice () {    

    return Math.round (price() - ((price() * (ageDisc() + brandDisc()))/100));

}

function show() {

    if (brandDisc() > 0 && ageDisc() > 0) {
        alert ("Estimado " + name + " " + lastName + " para su vehículo " + brand + " " + model + " del año " + yearManu + " tiene un descuento del " + brandDisc() + " % sobre el precio de lista $" + price() + '\n' + "Además por tener " + age() + " años de edad, posee un descuento extra del " + ageDisc() + " %" + '\n' + "Obteniendo un descuento TOTAL de " + (ageDisc() + brandDisc()) + " % ¡¡Felicidades!!" + '\n' + '\n' +  "El valor de la cuota mensual es de $ " + finalPrice());

    } //descuento marca y edad        

    else if (brandDisc() > 0) {
        alert ("Estimado " + name + " " + lastName + " para su vehículo " + brand + " " + model + " del año " + yearManu + " tiene un descuento del " + brandDisc() + " % sobre el precio de lista $" + price() + " ¡¡Felicidades!!" + '\n' + '\n' +  "El valor de la cuota mensual es de $ " + finalPrice());


    } //descuento por marca
    
    else if (ageDisc() > 0) {
        alert ("Estimado " + name + " " + lastName + " por tener " + age() + " años de edad, posees un descuento del " + ageDisc() + " % para su vehículo " + brand + " " + model + " del año " + yearManu + " sobre el precio de lista $" + price() + " ¡¡Felicidades!!" + '\n' + '\n' +  "El valor de la cuota mensual es de $ " + finalPrice());


    } // descuento por edad   

    else {
    alert ("Estimado " + name + " " + lastName + " su vehículo " + brand + " " + model + " del año " + yearManu + " por el momento NO tiene descuento disponible, el valor de la cuota mensual es de $ " + finalPrice());

    } // sin descuento
}

show();
