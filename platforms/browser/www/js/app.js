$(document).ready(function(){
	numeroJugadores();
});
	 $("#botonEjemplo").click(function(){
	 		verificador(estado);
  		});


	  $("#borrarDatos").click(function(){
	 		borrarDatos();
  		});
	


	var arrayJugador=[];
	window.estado = 1;
	//seleccionar imágenes
      var coche1 = document.getElementById("coche1");
      var coche2 = document.getElementById("coche2");
      var coche3 = document.getElementById("coche3");
      var coche4 = document.getElementById("coche4");
      var boton = document.getElementById("botonEjemplo");


      //posiciones iniciales
      var x_coche1 = 0;
      var x_coche2 = 0;
      var x_coche3 = 0;
      var x_coche4 = 0;

      //PuntajeJugador.
      var arrayRecorrido1 = 0;
      var arrayRecorrido2 = 0;
      var arrayRecorrido3 = 0;
      var arrayRecorrido4 = 0;

      //Editar div.
      var jugador = document.getElementById("nombreJugador");
      var listaJugadores = document.getElementById("listaJugadores");
      var jugadorTotal = document.getElementById("jugadorTotal");

	function numeroJugadores(){
		var jugadores = prompt("Ingrese numero de jugadores");

		for(i=0; i<jugadores; i++){
			
			arrayJugador.push(prompt("NombreJugador"));
			console.log(arrayJugador);
			listaJugadores.innerHTML += "<li><a>" + arrayJugador[i] + "</a></li>";
		}

	}

	
	
	function verificador(estado){

		if (estado == 1){
			if(arrayJugador[1] != null){
				jugador.innerHTML ="Turno jugador " + "," + arrayJugador[1];
				window.estado++;
				prueba1(0);
			}
			else{
				jugador.innerHTML ="Turno jugador 2";
				window.estado++;
				prueba1();
			}
		}
		
		else if (estado==2){
			if(arrayJugador[2] != null){
				jugador.innerHTML ="Turno jugador " + "," + arrayJugador[2];
				window.estado++;
				prueba2();
			}
			else{
				jugador.innerHTML ="Turno jugador 3";
				window.estado++;
				prueba2();
			}
		}
		
		else if (estado==3){
			if(arrayJugador[2] != null){
				jugador.innerHTML ="Turno jugador " + "," + arrayJugador[3];
				window.estado++;
				prueba3();
			}
			else{
				jugador.innerHTML ="Turno jugador 4";
				window.estado++;
				prueba3();
			}
		}
				
		else if (estado==4){
			if(arrayJugador[0] != null){
				jugador.innerHTML ="Turno jugador " + "," + arrayJugador[0];
				window.estado = 1;
				prueba4();
			}
			else{
				jugador.innerHTML ="Turno jugador 1";
				window.estado =1;
				prueba4();
			}
		}	
	}

 

      function prueba1() {
      	var numeroAleatorio = Math.round(Math.random() * (5 - 1) + 1);
      	console.log(numeroAleatorio);

      	   //movimiento coche1
	   if (x_coche1 <= 40 && x_coche1 >= 0) { //condición para que se mueva entre estos valores de la pantalla
		x_coche1 = x_coche1 + numeroAleatorio; //movimiento del valor x
		coche1.style.left = x_coche1 + "%"; //aplicar el valor obtenido al left del elemento
		arrayRecorrido1 =x_coche1;
		console.log(arrayRecorrido1);
	    }
	    else { //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
	    	if(arrayJugador[0] != null){
				jugadorTotal.innerHTML += "<li><a><a>" + arrayJugador[0] + "," + arrayRecorrido1 + "</a></a></li>";
	    		alert("Ganador jugador" + "," + arrayJugador[0]);
	    	}
	    	else{
				jugadorTotal.innerHTML += "<li><a>" + "jugador1" + "," + arrayRecorrido1 + "</a></li>";
	    		alert("Ganador jugador 1");
	    	}
		 x_coche1=0; //posicion inicial
		 coche1.style.left = x_coche1 + "%"; //volvemos a aplicar el valor obtenido al left del elemento
	    }
      }


	function prueba2(){

      	var numeroAleatorio = Math.round(Math.random() * (5 - 1) + 1);
      	console.log(numeroAleatorio);

      	   //movimiento coche1
	   if (x_coche2 <= 40 && x_coche2 >= 0) { //condición para que se mueva entre estos valores de la pantalla
		x_coche2 = x_coche2 + numeroAleatorio; //movimiento del valor x
		coche2.style.left = x_coche2 + "%"; //aplicar el valor obtenido al left del elemento
		arrayRecorrido2 = x_coche2;
		console.log(arrayRecorrido2);
	    }
	    else { //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
	    	if(arrayJugador[1] != null){
	    		alert("Ganador jugador" + "," + arrayJugador[1]);
				jugadorTotal.innerHTML += "<li><a>" + arrayJugador[1] + "," + arrayRecorrido2 + "</a></li>";
	    	}
	    	else{
				jugadorTotal.innerHTML += "<li><a>" + "jugador2" + "," + arrayRecorrido2 + "</a></li>";
	    		alert("Ganador jugador 2");
	    	}
		 x_coche2=0; //posicion inicial
		 coche1.style.left = x_coche2 + "%"; //volvemos a aplicar el valor obtenido al left del elemento
	    }
	}

	function prueba3(){

      	var numeroAleatorio = Math.round(Math.random() * (5 - 1) + 1);
      	console.log(numeroAleatorio);

      	   //movimiento coche1
	   if (x_coche3 <= 40 && x_coche3 >= 0) { //condición para que se mueva entre estos valores de la pantalla
		x_coche3 = x_coche3 + numeroAleatorio; //movimiento del valor x
		coche3.style.left = x_coche3 + "%"; //aplicar el valor obtenido al left del elemento
		arrayRecorrido3 = x_coche3;
		console.log(arrayRecorrido3);
	    }
	    else { //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
		 if(arrayJugador[2] != null){
	    		alert("Ganador jugador" + "," + arrayJugador[2]);
	    		jugadorTotal.innerHTML += "<li><a>" + arrayJugador[2] + "," + arrayRecorrido3 + "</a></li>";
	    	}
	    	else{
	    		alert("Ganador jugador 3");
	    		jugadorTotal.innerHTML += "<li><a>" + "jugador3" + "," + arrayRecorrido3 + "</a></li>";
	    	}
		 x_coche3=0; //posicion inicial
		 coche3.style.left = x_coche3 + "%"; //volvemos a aplicar el valor obtenido al left del elemento
	    }
	}

	function prueba4(){

      	var numeroAleatorio = Math.round(Math.random() * (5 - 1) + 1);
      	console.log(numeroAleatorio);

      	   //movimiento coche1
	   if (x_coche4 <= 40 && x_coche4 >= 0) { //condición para que se mueva entre estos valores de la pantalla
		x_coche4 = x_coche4 + numeroAleatorio; //movimiento del valor x
		coche4.style.left = x_coche4 + "%"; //aplicar el valor obtenido al left del elemento
		arrayRecorrido4 = x_coche4;
		console.log(arrayRecorrido4);
	    }
	    else { //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
		 if(arrayJugador[3] != null){
	    		alert("Ganador jugador" + "," + arrayJugador[3]);
	    		jugadorTotal.innerHTML += "<li><a>" + arrayJugador[3] + "," + arrayRecorrido4 + "</a></li>";
	    	}
	    	else{
	    		alert("Ganador jugador 4");
	    		jugadorTotal.innerHTML += "<li><a>" + "jugador4" + "," + arrayRecorrido4 + "</a></li>";
	    	}
		 x_coche4=0; //posicion inicial
		 coche4.style.left = x_coche4 + "%"; //volvemos a aplicar el valor obtenido al left del elemento
	    }
	}