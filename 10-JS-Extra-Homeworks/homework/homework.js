// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
 var matriz=Object.keys(objeto).map(function(clave){
   return [clave,objeto[clave]];
 });
 return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objeto={};

  for(var letras of string){
    if(objeto[letras]){
      objeto[letras]=objeto[letras]+1;
    }else{
      objeto[letras]=1;
    }
  }

  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var array=s.split('');
  var mayusculas=[]
  var minusculas=[]

  for(var i=0;i<array.length;i=i+1){
    if(array[i]===array[i].toUpperCase()){
       mayusculas.push(array[i]);
    }else{
       minusculas.push(array[i]);
    }

  }
  return mayusculas.join('') + minusculas.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  var frase=str.split('');
  var inverso=frase.reverse();
  var final=inverso.join('').split(' ').reverse().join(' ');

  return final;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  if(numero===Number(numero.toString().split('').reverse().join(''))){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  var cadenaABC= "";

  for(var i=0;i<cadena.length;i=i+1){
    if(cadena[i]==="a" || cadena[i]==="b" || cadena[i]==="c"){
      continue;
    }
    else{
      cadenaABC=cadenaABC+cadena[i];
    }
  }

  return cadenaABC;

}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for(var i=1;i<arr.length;i=i+1){
    for(var j=0; j<(arr.length-1);j=j+1){
        if(arr[j].length>arr[j+1].length){
          var temporal = arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temporal;
        }
    }
  }

  return arr;

}




function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var nuevoarray=[];
  for(var i=0;i<arreglo1.length;i=i+1){
    for(var j=0; j<arreglo2.length; j=j+1){
      if(arreglo1[i]===arreglo2[j]){
        nuevoarray.push(arreglo2[j]);
      }
    }
  }

  return nuevoarray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

