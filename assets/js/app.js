var divBoxes = document.getElementById("div-boxes");
var addList = document.getElementById("add-list");
var invisible = document.getElementById("invisible");

/* Función para que aparezca un tablero a editar al darle click
a Añadir una lista */
addList.addEventListener("click", function(){
	// Quitando el botón para añadir más listas
	addList.style.display = "none";

	// Crear el div para editar una lista
	var invisible = document.createElement("div");
	invisible.classList.add("invisible");  // dar clase para editar en css
	divBoxes.insertBefore(invisible, addList);

	// Crear el input e inyectarlo
	var input = document.createElement("input");
	input.setAttribute("placeholder", "Añadir una lista...");
	input.setAttribute("type", "text");
	invisible.appendChild(input);
	input.focus();

	// Crear el botón e inyectarlo
	var buttonSave = document.createElement("button");
	var save = document.createTextNode("Guardar");
	buttonSave.appendChild(save);
	buttonSave.classList.add("btn");
	buttonSave.setAttribute("disabled", "disabled");
	invisible.appendChild(buttonSave);

	// Crear el ícono e inyectarlo
	var close = document.createElement("i");
	close.classList.add("fa", "fa-times", "times");
	invisible.appendChild(close);

	// Al hacer click en el ícono de cerrar
	close.addEventListener("click", function(){
		divBoxes.removeChild(invisible);
		addList.style.display = "inline-block";
	});

	// Para que no se pueda guardar el título de la lista si está vacío
	input.addEventListener("keyup", function(){
		var large = input.value
		large = large.length;
		if (large > 0){
			buttonSave.removeAttribute("disabled");
		}
		if (large === 0){
			buttonSave.setAttribute("disabled", "disabled");
		}
	});

	// Función para guardar lo escrito en el input
	buttonSave.addEventListener("click", function (){
		var title = document.createElement("p");
		title.classList.add("title");
		var content = input.value;
		content = document.createTextNode(content);
		// Inyectando el value del input al div
		title.appendChild(content);
		invisible.insertBefore(title, input);
		// Quitar input, botón  e ícono
		input.style.display = "none";
		buttonSave.style.display = "none";
		close.style.display = "none"
		// Agregar "Añadir una tarjeta"
		var addCard = document.createElement("p");
		var contentAddCard = document.createTextNode("Añadir una tarjeta...")
		addCard.appendChild(contentAddCard);
		// Darle clase a "Añadir una tarjeta" para editar su estilo en el CSS
		addCard.classList.add("add-card");
		invisible.appendChild(addCard);

		/* Que el botón de Añadir lista vuelva a aparecer luego de guardar e
		inyectar el texto ingresado en el input */
		addList.style.display = "inline-block"

		// Función para agregar tarjetas
		addCard.addEventListener("click", function(){
			// Invisibilizar "Añadir una tarjeta"
			addCard.style.display = "none";

			// Crear textarea
			var textarea = document.createElement("textarea");
			invisible.appendChild(textarea);
			textarea.focus();
			// Crear botón
			var buttonAdd = document.createElement("button");
			var add = document.createTextNode("Añadir");
			buttonAdd.appendChild(add);
			invisible.appendChild(buttonAdd);
			// Crear ícono 
			var closeTwo = document.createElement("i");
			closeTwo.classList.add("fa", "fa-times", "times");
			invisible.appendChild(closeTwo);

			// Función para que el textarea se agrande automáticamente en base a su contenido
			textarea.addEventListener("keydown", function(){
			  var el = this;
			  setTimeout(function(){
			    el.style.cssText = 'height:auto; padding:0';
			    el.style.cssText = 'height:' + el.scrollHeight + 'px';
			  },0);
			})

			// Si se hace click en el botón
			buttonAdd.addEventListener("click", function(){
				var card = document.createElement("p");
				var contentCard = document.createTextNode(textarea.value);
				card.appendChild(contentCard);
				card.classList.add("add");
				invisible.insertBefore(card, addCard);

				// Limpiar textarea
				textarea.value = "";
				textarea.focus();
			});

			// Si se hace click en la equis
			closeTwo.addEventListener("click", function(){
				invisible.removeChild(textarea);
				invisible.removeChild(buttonAdd);
				invisible.removeChild(closeTwo);
				addCard.style.display = "block"
			});
		});
	});
})

