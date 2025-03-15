// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = []; //Arreglo que almacenará los nombres de la lista

function agregarAmigo(){
    let nuevoNombre = document.getElementById("amigo").value;//Se crea una variable que será la que este ligada al input de HTML
        if(nuevoNombre === ""){          // Aqui se hace una validación para asegurarse que se ha escrito un nombre,
            alert('Agrega un nombre')    // de lo contrario manda un msj solicitando que se agregue
            return;
        }
        listaNombres.push(nuevoNombre); //con el metodo push, agregamos el nombre que fue ingresado desde el input, se almacenará en el arreglo
        document.getElementById("amigo").value = ""; //se limpia el input
        actualizarLista();
        console.log(listaNombres); //muestra en consola los elementos del arreglo  
    }    
function actualizarLista(){ //Esta función se utiliza para mostrar los elementos del arreglo en la página en forma de list
        let lista = document.getElementById("listaAmigos");//se crea la variable que se enlazará con la lista de HTML
        lista.innerHTML = ''; // se limpia el nombre para evitar duplicaciones
                for (let i = 0; i < listaNombres.length; i++) { //se utiliza un ciclo que con cada iteración agregará el nuevo nombre introducido al arreglo
                let li = document.createElement('li');//crea una fila con el elemento que se agrego
                li.innerHTML = listaNombres[i];
                lista.appendChild(li);
            }
    }  
function sortearNombre(){ //Esta función hará el sorteo de los nombres que esten dentro del arreglo
        let item = Math.floor(Math.random() * listaNombres.length); //se hace uso del Math, para sortear los indices del arreglo aleatoriamente, se hace el recorrido
        let elementoAleatorio = listaNombres[item];
        if(elementoAleatorio == null){ //Esta condición es para validar que el arreglo no esta vacio, en caso que si, envia un msj que debes agregar elementos
            alert('No hay elementos en el arreglo, por favor agregalos');
            return;
        }
        console.log(elementoAleatorio);
        let elementoHTML = document.getElementById("resultado"); //Por ultimo se crea una variable donde se almacenará el nombre sorteado y se mostrará en una lista.
        elementoHTML.innerHTML = "El amigo secreto sorteado es: " + elementoAleatorio;
        return elementoAleatorio;  
    }
 


    
    


