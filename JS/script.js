var nombre ="Felipe";
let edad= 20;
let numero= -40;
let totalBruto=500;
let nota=91;
let dia = 6;
let opcion =3;
let tienelicencia = false;
let usuario = "admin";
let contra = "12345"


console.log(nombre.length);
console.log(nombre.charAt(2));
console.log(nombre.endsWith("pe"));
console.log(nombre.replace("l","urra"));




 //operador condicional ternario
resultado = edad >= 18 ? "es mayor ": "es menor";
console.log(resultado);

//control de flujo
if(edad>18){
console.log("Mayor de edad");
}
else
    {
console.log("Menor de edad");
    }

    if(numero==0) {
        console.log("Este numero es igual a 0");
    }else if(numero>0) {
        console.log("Este numero es mayor a 0");
    }else {
        console.log("Este numero es menor a 0   ");
    }


    if(totalBruto>100){
        let descuento = totalBruto *   0.10;
        let totalNeto = totalBruto - descuento;
        console.log("Felicidades tiene un descuento del 10%, su total es de $" +totalNeto );
    }else{console.log("Su total es de $" + totalBruto);}

    
    if(nota>=90){
        console.log("Excelente");
    }else if (nota<89 && nota>80){
        console.log("Muy bien");
    }else if (nota<=79 && nota>70){
        console.log("bien");
    }else if (nota<=69 && nota>60){console.log("Debes mejorar");
    }else {console.log("reprobado")}


    switch (dia) {
        case 1:
            console.log("Lunes ");
            break;

    case 2:
        console.log("Martes");
        break;


        case 3:
            console.log("Miercoles");
            break;

            case 4:
                console.log("Jueves");
                break;

                case 5:
                    console.log("Viernes");
                    break;

                    case 6:
                        console.log("Sabado");
                        break;

                        case 7:
                            console.log("Domingo");
                            break;

        default:
            console.log("ESTA INTRODUCIENDO UN DIGITO QUE NO ESTA ACTIVO");
            break;
    }

switch(opcion){
    case 1:
        console.log("Ver perfil");
        break;
        case 2:
            console.log("Editar perfil");
            break;

            case 3: 
            console.log("Cerrar sesión");
            break;
        default:
            console.log("Digito invalido");
            break;
}

switch(edad){
    case 18:
        console.log("Tienes 18 de edad");
        break;
        case 19:
        console.log("Tienes 19 de edad");
        break;
        case 20:
            console.log("Tienes 20 de edad");
            break;
            case 21:
                console.log("Tienes 21 de edad");
                break;
        default:
            console.log("Edad no registrada");
            break;
}

if(totalBruto>=200){
    let descuento = totalBruto * 0.15;
    let totalNeto = totalBruto - descuento;
    console.log("Felicidades tienes un descuento del 15% su total a pagar es de $" + totalNeto);
}else{console.log("Tu total es de $"+ totalBruto);

}


if (edad > 18 && tienelicencia == true){
    console.log("Puedes conducir");
}else {
    console.log("No puedes conducir ");}



  if(usuario == "admin" && contra=="123456"){
    console.log("estrando al sitema");
}else
         {console.log("error al ingresar compruebe datos");

  }



  for(i=10; i>=1; i--){
    console.log(i);

  }

  for(i=1; i<=10; i++){
    console.log(i);
  }

  for(x=100; x>=1; x--){
    console.log(x);
  }

  do{
    edad=edad+1;
    console.log("edad"+edad);
  }while(edad<50)

edad=10;
    while(edad<50){
        edad=edad+1;
        console.log("edasina"+ edad);
    }