function addMessage(){
	//Todo lo nuevo ira en el div id "conversacion"
	/*var nuevoMensaje = '<div class="w-message w-message-out"><div class="w-message-text"><p>No se pique!!</p><div class="time">14:27</div></div></div>';
	document.getElementById('conversacion').innerHTML += nuevoMensaje;*/
	//conseguir el value de texto del input
	var mensaje = document.getElementById('mensajes').value;
	//Encontrar el ultimo div de la clase w-message-text
	/*var divContenedorSinDefinir = document.getElementsByClassName('w-message-text');
	var numeroArregloDiv  = divContenedorSinDefinir.length;
	var divContenedorDefinido = divContenedorSinDefinir[numeroArregloDiv];
	//meter el mensaje dentro de este div encontrado <3
	divContenedorDefinido.innerHTML = '<p>' + mensaje + '</p>';*/



	//INTENTO 2 usando nodos -.-  PARA METER EL VALUE DEL TEXTO A UN NODO Y LUEGO AL HTML
	//crear el nodo
	/*var texto = document.createTextNode(mensaje);
	//Seleccionar el div deseado
	var divContenedor = document.getElementById('conversacion');
	var divHijoConversacion = divContenedor.firstChild;
	var divDefinitivo = divHijoConversacion.firstChild;
	//meter el value dentro del hijo del contenedor
	divDefinitivo.appendChild(texto);*/


	//ORGANIZANDO IDEAS
	//Creando los div que necesito
	//div clase w-message w-message-out
	var div1 = document.createElement('div');
	div1.setAttribute('class', 'w-message w-message-out');
	//div clase w-message-text
	var div2 = document.createElement('div');
	div2.setAttribute('class','w-message-text');
	//creando el p
	var p = document.createElement('p');
	//creando el div con clase time
	var divTime = document.createElement('div');
	divTime.setAttribute('class','time');
	//texto con tiempo random
	var TiempoTexto = document.createTextNode('12:00');
	var nuevoMensaje = document.createTextNode(mensaje);
	//metiendo los hijos en sus padres
	divTime.appendChild(TiempoTexto);
	p.appendChild(nuevoMensaje);
	div2.appendChild(p);
	div2.appendChild(divTime);
	div1.appendChild(div2);
	document.getElementById('conversacion').appendChild(div1);
}