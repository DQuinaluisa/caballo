'use strict';

var score = document.querySelector('.tries');
var button = document.querySelector('.boton_try');
var puntos=0;
var pista=document.querySelector('.pista');
var guardar=document.querySelector('.name');


//El número aleatorio NO con cada click, fuera.
// Antes no era función, pero ahora sí porque luego, cuando acierten, la necesitaré para crear otro número nuevo.
function aleatorio3 (max){

  var aleatorio = Math.random()*max;
  aleatorio = Math.ceil(aleatorio);
  console.log(aleatorio);
  return aleatorio;

}
var aleatorio2 = aleatorio3(50);
// console.log(aleatorio2);

//El click
button.addEventListener('click', function(){
  //El input como valor
  var numero= document.querySelector('#box_number').value;
  numero=parseInt(numero);
  //Cuando es un número del 0 al 100
  if (numero<101 && numero>=0){
    //El numero de intentos al hacer click
    puntos=puntos+1;
    score.innerHTML=puntos;
    //Pistas
    if (numero<aleatorio2) {
      pista.innerHTML= 'Te has quedado corta ¡Prueba otra vez!';
    }
    else if (numero>aleatorio2) {
      pista.innerHTML='Te has pasado ¡Inténtalo de nuevo!';
    }
    else if (numero===aleatorio2){
      pista.innerHTML= '¡¡Enhorabuena, has acertado!!';
      guardar.classList.remove('name');
      guardar.classList.add('open');
    }
  }
  else if (numero>100 || numero<0) {
    //Cuando o no es un número o es menor de 0 o mayor de 100.
    alert ('Solo se permiten números del 0 al 100.');
  }

  else {
    alert ('Escribe un número con dígitos.');
  }
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var boton_s=document.querySelector('.boton_save');
var hstrc=document.querySelector('.lista');


var nombres = {
  name_s:
  [],
  intentos_s:
  []
};

//Hacer click en el botón guardar
boton_s.addEventListener('click', function(){
  //Número aleatorio nuevo.Llamando a la función
  // aleatorio3(50);
  aleatorio2 = aleatorio3(100);
  // console.log(aleatorio2);
  //Histórico con objetos y dentro 2 arrays (nombres e intentos)

  function historicoLista () {
    var nombre= document.querySelector('#box_name').value;

    nombres.name_s.push(nombre);
    // console.log(nombres);
    var list_h= nombres.name_s;
    // console.log(list_h);
    nombres.intentos_s.push(puntos);
    console.log(nombres);
    var list_hi= nombres.intentos_s;
    // console.log(list_hi);
    //Para que se guarden uno después de otro, se acumulen.
    var add ='';
    for (var i=0;i<list_h.length;i++){
      add+= '<li>'+ list_h[i] +' - ' + list_hi[i] +' intentos </li>';
    };
    hstrc.innerHTML= add;
  }
  historicoLista();
  //Resetear
  function reseteo (){
    //Los inputs
    document.querySelector('#box_number').value = "";
    document.querySelector ('#box_name').value = "";
    //El marcador a 0 otra vez y las pistas
    puntos=0;
    score.innerHTML=puntos;
    pista.innerHTML='Escribe un número del 0 al 100 y prueba';
    //Volver a ocultar lo de guardar el nombre
    guardar.classList.remove('open');
    guardar.classList.add('name');
  }
  reseteo();
});


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/styles.css">
  <title>Juego</title>
</head>
<body>
  <!-- TÍTULO -->
  <section class="primero">
    <header>
      <h1> Adivina el número</h1>
      <p class="tries">0</p>
    </header>

    <main>
<!-- INTRODUCIR EL NÜMERO -->
   <!-- Antes lo tenía con FORM pero se reseteaba ("enviaba información") cuando le dabas al ENTER -->
    <div class="number" >
      <label for="box_number" class="introduce">Introduce un número</label>
      <input type="text" id="box_number" name="number" class="box_number" placeholder="Escribe un número">
      <button type="button" class="boton_try" name="button">Prueba</button>
    </div>
<!-- OCULTO/INTRODUCIR NOMBRE -->
    <div class="name">
      <label for="box_name" class="introduce"></label>
      <input type="text" id="box_name" name="name" placeholder="Escribe tu nombre">
      <button type="button" class="boton_save" name="button">Guarda</button>
    </div>
<!-- PISTAS/INSTRUCCIONES -->
    <div class="pistas"> <p class="pista">Escribe un número del 0 al 100 y prueba</p>
    </div>
  </main>
</section>
<!-- HISTÓRICO -->
  <section class="historico">
    <div class="history">
      <h1 class="hh">Histórico</h1>
    </div>
    <div class="orden">
      <ul class="lista">
<!-- Lista de jugadores que se irá incluyendo con js -->
      </ul>
    </div>
  </section>
  <script type="text/javascript" src="js/main.js">  </script>
</body>
</html>