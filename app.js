
function isValidCard (){// esta funcion debe validar si el n° de tarjeta es valida
  var consultaTdc = prompt("Hola introduzca su numero de tarjeta"); // consultar el numero de tdc
  var numerosPares = []; // cramos un array para guardar solo los numeros en posicion par de tarjeta invertida
  var numerosImpares= [];
  // Parte 1: colocar numeros  pares e impares en sus arrays correspondientes
  for (var i = consultaTdc.length-1; i>=0; i--){ // este for va a recorrer mi variable desde el ultimo caracter
    if (i % 2 === 0){
      numerosPares.push(parseInt(consultaTdc[i])); // ahora uso el metodo push para empujar los nmeros que recorre mi for y el metodo parseInt pata convertirlo en entero
  }else{
       numerosImpares.push(parseInt(consultaTdc[i]));
   }
  }
  //Parte 2: Recorrer numeros pares, cada elemento multiplicar por 2 y si > 10 sumar digitos y resulatdo colocarlo en posicion actual
  for (var j = 0; j <= numerosPares.length -1; j++){
    var multiplicacion = numerosPares[j] * 2;  // cplocar el nmbre d ela variable para acceder
    if (multiplicacion >= 10 ){
      // sumar digitos, como saco los digitos de un numero?
    numerosPares = (multiplicacion % 10) + (multiplicacion/10);
   }

 }
  // parte 3: debo sumar los numeros pares y los numeros impares y de ese resultado debo obtebere el residuo de la division entre 10
  var sumaPar = 0;
  for (var k = 0; k < numerosPares.length; k++){
    sumaPar = sumaPar + numerosPares[k];
  }

  var sumaImpar = 0;
  for (var l = 0; l < numerosImpares.length; l++){
    sumaImpar = sumaImpar + numerosImpares[l];
  }

  var resultado = sumaPar + sumaImpar;
    if (resultado % 10 === 0){
      return document.write ("Tu numero de tarjeta es valido, Bienvenido a mi web");
    }else {
      return alert("Estimado usuario, su  numero de tarjeta es invalido, por ingrese un numero de tarjeta valido");
    }


}



isValidCard (); // no puedo invocar variables SOLO SE PUEDEN INVOCAR LAS FUNCIONES
