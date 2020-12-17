// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  // CLASE ES6 (bingo!)
  /*class Usuario {
    constructor (opciones) {
      this.usuario = opciones.usuario,
      this.nombre = opciones.nombre,
      this.email = opciones.email,
      this.password = opciones.password
    }

    saludar() {
      return 'Hola, mi nombre es ' + this.nombre;
    }

  }
  return Usuario;*/
  // ------------------------------------------------------ FIN.

  // FUNCIÓN CONSTRUCTOR (legacy ;))
  function Usuario(opciones) {
    this.usuario = opciones.usuario,
        this.nombre = opciones.nombre,
        this.email = opciones.email,
        this.password = opciones.password
  }

  Usuario.prototype.saludar = function() {
    return 'Hola, mi nombre es ' + this.nombre;
  }

  return Usuario;
  // ------------------------------------------------------ FIN.
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function() {
    return 'Hello World!';
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  // by: https://www.geeksforgeeks.org/reverse-a-string-in-javascript/
  String.prototype.reverse = function() {
    var revArray = []; 
    var lengthStr = this.length - 1; 
    
    for(let i = lengthStr; i >= 0; i--) { // recorre desde el último hasta el primer item.
        revArray.push(this[i]); 
    } 

    return revArray.join(''); // unir todos los item del array para crear el string alreves.
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida
};
