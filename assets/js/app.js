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

	// Crear el botón e inyectarlo
	var buttonSave = document.createElement("button");
	var save = document.createTextNode("Guardar");
	buttonSave.appendChild(save);
	buttonSave.classList.add("btn");
	invisible.appendChild(buttonSave);

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
		// Agregar "Añadir una tarjeta"
		var addCard = document.createElement("p");
		var contentAddCard = document.createTextNode("Añadir una tarjeta...")
		addCard.appendChild(contentAddCard);
		invisible.appendChild(addCard);
		// Darle clase a "Añadir una tarjeta" para editar su estilo en el CSS
		addCard.classList.add("add-card");

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
			var buttonAdd = document.createElement("button");
			var add = document.createTextNode("Añadir");
			buttonAdd.appendChild(add);
			invisible.appendChild(buttonAdd);

			buttonAdd.addEventListener("click", function(){
				var card = document.createElement("p");
				var contentCard = document.createTextNode(textarea.value);
				card.appendChild(contentCard);
				invisible.insertBefore(card, textarea);

				// Limpiar textarea
				textarea.value = "";
			}); 
		});
	});
})


// AGREGAR QUE SI SE DA CLICK EN LA CRUZ, DESAPAREZCA EL TEXTAREA, LOS BOTONES
// Y ADEMÁS, QUE APAREZCA AÑADIR UNA TARJETA DE NUEVO :) 
// var addCard = document.getElementsByClassName("add-card")[0];




