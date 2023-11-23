/*====================CREACION DE CONSTANTES==================*/
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
/*====================CREACION DE CONSTANTES==================*/

/*====================LLAMO A LA FUNCION======================*/
cargarEventListeners();
/*====================LLAMO A LA FUNCION======================*/


/*====================CREO FUNCIONES======================*/

function cargarEventListeners(){

     //atento a cuando se presiona agregar carrito
    elementos1.addEventListener('click', comprarElemento);
    //eliminar curso en el carrito
    carrito.addEventListener('click', eliminarElemento);
    //vaciar carritO de compras
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
    

}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
         //enviamos el curso seleccionado para tomar sus datos
        leerDatosElemento(elemento);
    }
}
//leer Datos del Elemento (casco seleccionado)
function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')

    }
    insertarCarrito(infoElemento);
}
// Insertar Elemento en el carrito (Tengo un fallo no logro sacarlo)
function insertarCarrito(elemento){
    
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${elemento.imagen}" width="100"></td>
            <td>${elemento.titulo}</td>
            <td>${elemento.precio}</td>
            <td><a href="#" class="borrar-curso" data-id="${elemento.id}"> X </a></td>    
        `;
        lista.appendChild(row);
}
// Eliminar Elemento en el carrito (Tengo un fallo no logro sacarlo)
function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    
    }
}
//Vaciar carrito
function vaciarCarrito(){
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}

/*====================CREO FUNCIONES======================*/