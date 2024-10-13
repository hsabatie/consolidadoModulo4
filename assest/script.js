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
    } //metodo para agregar productos a el carrito
    agregarProducto(producto, cantidad) {
        const existe = this.producto.find(item => item.nombre === producto.nombre);//find busca en el arreglo
        if (existe) {
            existe.cantidad +=cantidad;  //si ya existe se suma a la cantidad          
        } else {
            this.producto.push({ nombre: producto.nombre, precio: producto.precio, cantidad }); //si no, se agrega como nuevo
        }
    }
    calculatrTotal(){
        let total=0;
        this.producto.forEach(item=>{
            total += item.precio * item.cantidad;
        })
        return total;
    }
    mostrarBoleta(){
        let boleta =  "Compras lo siguiente:\n";
        this.producto.forEach(item=>{
            boleta +=`${item.nombre}- Cantidad ${item.cantidad} -Punit ${item.precio}- Vtotal ${item.cantidad * item.precio}\n`
        })
        boleta += `Total a pagar $${this.calculatrTotal()} \n Gracias por su compra`
        return boleta;
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
//creo objeto del carrito
const carrito = new Carrito();

carrito.agregarProducto(listaProductos[0], 2); // Agregar 2 unidades de "Leche"
carrito.agregarProducto(listaProductos[1], 3); // Agregar 3 unidades de "Pan de Molde"

console.log(carrito.calculatrTotal());
alert(carrito.mostrarBoleta())
