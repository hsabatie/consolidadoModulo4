class Productos {
    constructor(nombre, precio) {
        let _nombre = nombre;
        let _precio = precio;
        Object.defineProperties(this, {
            nombre: {
                get: function() {
                    return _nombre;
                }
            },
            precio: {
                get: function() {
                    return _precio;
                }
            }            
        });
    }
}
//creo la clase carrito con un areglo vacio
class Carrito{
    constructor(){
        this.producto = [];
    }
}
// creo los objetos de la lista productos llamando a la clase Productos y dejando estos en la variable listaProductos.
let listaProductos = [
    new Productos("Leche", 1000),
    new Productos("Pan de Molde", 2000),
    new Productos("Queso", 1200),
    new Productos("Mermelada", 890),
    new Productos("Azúcar", 1300)
];
//console.log(listaProductos);

