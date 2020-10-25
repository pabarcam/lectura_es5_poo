//Desarrollo Lectura, Paulo Abarca 

//Objeto y propiedades

/*nombre del objeto baja la definicion de una variable,constante o let)*/ 
var​ notebook = ​/*prototipo,instanciar*/ new ​​Object​()
//Propiedades
notebook.make = ​'Dell'​
notebook.processor = ​'I7' ​

//Ejercicio 1, Transformaciòn a notaciòn literal

notebook = {make: 'Dell', processor: 'I7'}

console.log(notebook)

//Ejercicios 2 y 3, modificando propiedades

notebook.processor = 'I9'
notebook['make'] = 'HP'

console.log(notebook)

//Nuevo objeto

var student = new Object()

//Ejercicio 4, Definicion de la propiedades del objeto

student.name = 'Juan', 
student.edad = 35

console.log(student)

//Creando objetos con métodos

var vaca = new Object()
//método
vaca.sonido = function () {
  console.log("moo")
}
//para llamar y ejecutar a la propiedad del objeto

vaca.sonido()

//Ejercicio 5, En notación literal

gato = {
  sonido: function (){ 
  console.log('miau')
}}

gato.sonido()

//Ejercicio 6, new Object, propiedad y método.

var student = new Object()
student.name = 'Paulo'
student.sayThing = function () {
  console.log('Estoy aprendiendo objetos con JS.')
}

student.sayThing()

//Método (this)

var persona = new Object()

persona.name = 'Camila'
persona.saludar = function (){
  console.log('Hola soy ' + this.name)
}

persona.saludar()

//Ejercicios 7

var persona = new Object()

persona.name = 'Camila'
persona.age = 25
persona.saludar = function (){
  console.log('Hola soy ' + this.name + ' y tengo ' + this.age)
}

persona.saludar()

//ejercicio 8

var notebook = new Object ()

notebook.marca = 'Dell'
notebook.obtener_informacion = function () {
  console.log('Computador marca ' + this.marca)
}

notebook.obtener_informacion()

//Función constructora

function Student(name) {
  this.nombre = name
}


//Objetos

var c1 = new Student('Javiera')
var c2 = new Student('Francisco')
var c3 = new Student('Diana')

console.log(c1)
console.log(c2)
console.log(c3)

//Agregar método a un objeto

c1.sayHi = function () {
  console.log("Hello, I'm " + this.nombre)
}
c1.sayHi()

//Ejercicio 9

function Person(name){
this.nombre = name
}

var persona = new Person('Camila')
persona.sayHi = function (){
  console.log("Hello, I'm " + this.nombre)
}

persona.sayHi()

//Prototipos

function User(name){
  this.nombre = name
}


//Creando métodos con prototipos
User.prototype.sayHi = function(){
  console.log("Hello, I'm the user " + this.nombre)
}

var user1 = new User('Juan')
var user2 = new User('Jocelyn')

user1.sayHi()
user2.sayHi()

//Creando propiedades o atributos con prototipos

User.prototype.age = 30

console.log("the age of user1 is " + user1.age + " years")
console.log("the age of user1 is " + user2.age + " years")

//Ejercicio 10

function Player (nombre) {
  this.name = nombre
  this.points = 20
}

Player.prototype.addPoints = function(){
  this.points += 100
}

var player1 = new Player('Francisca')
var player2 = new Player('Camilo')

player1.addPoints()
player2.addPoints()

console.log(player1)
console.log(player2)

//Trabajando con objetos
//El principio de abstracción
//Construyendo un objeto a patir de un requerimiento

function Cuadrado(lado) {
  this.lado = lado
}

Cuadrado.prototype.calcularArea = function(){
  return this.lado * this.lado
}

Cuadrado.prototype.calcularPerimetro = function(){
  return this.lado * 4
}

var c1 = new Cuadrado(2)

console.log(c1.calcularArea())
console.log(c1.calcularPerimetro())

//Ejercicio 11

function Rectangulo(ancho, alto) {
  this.ancho = ancho
  this.alto = alto

}

Rectangulo.prototype.calcularArea = function(){
  return this.ancho * this.alto
}

var r1 = new Rectangulo(3, 5)
var r2 = new Rectangulo(4, 8)

console.log(r1.calcularArea() + r2.calcularArea())

//Ejercicio 12

function Rectangulo(ancho, alto) {
  this.ancho = ancho
  this.alto = alto
}


Rectangulo.prototype.calcularArea = function(){
  return this.ancho * this.alto
}


Rectangulo.prototype.calcularPerimetro = function(){
  return (this.ancho + this.alto) * 2
}

var r1 = new Rectangulo(3, 5)
var r2 = new Rectangulo(4, 8)

console.log(r1.calcularArea() + r2.calcularArea())
console.log(r1.calcularPerimetro() + r2.calcularPerimetro())

//El principio de encapsulación

function Estudiante(nombre){
  this.nombre = nombre
}

var estudiante1 = new Estudiante('Juan')
console.log(estudiante1.nombre)


//Mala práctica para redefinir una propiedad(atributo)
estudiante1.nombre = 'Javier'
console.log(estudiante1.nombre)

//La buena práctica serìa lo siguiente
function Estudiante(nombre){
  this.nombre = nombre
}

//Método prototype
Estudiante.prototype.setNombre = function(nuevo_nombre){
  this.nombre = nuevo_nombre
}

var estudiante1 = new Estudiante('Juan')

//LLamado al método
estudiante1.setNombre('Jocelyn')

console.log(estudiante1.nombre)

//Ejercicio 13, aplicando el método prototype

function Usuario(tipo){
  this.tipo = tipo 
}

Usuario.prototype.setTipo = function(nuevo_tipo){
  this.tipo = nuevo_tipo
}

var usuario1 = new Usuario('Administrador')

usuario1.setTipo('Invitado')

console.log(usuario1.tipo)

//Getters y Setters

function Vehículos(marca){
  this._marca = function(){
    return marca
  }
}

Vehículos.prototype.getMarca = function(){
  return this._marca()
}

Vehículos.prototype.setMarca = function(marca){
  this._marca = function(){
    return marca
  }
}

var v1 = new Vehículos('Ford')
v1.getMarca()

v1.setMarca('Kia')
v1.getMarca()

//Ejercicio 14

function Carta(numero, pinta){
  this._numero = function(){
    return numero
  }
  this._pinta = function(){
    return pinta
  }
}

Carta.prototype.getNumero = function(){
  return this._numero()
}

Carta.prototype.setNumero = function(numero){
  this._numero = function(){
    return numero
  }
}

Carta.prototype.getPinta = function(){
  return this._pinta()
}

Carta.prototype.setPinta = function(pinta){
  this._pinta = function(){
    return pinta
  }
}

c1 = new Carta('2', 'corazón')
c2 = new Carta(4, 'espadas')

console.log(c1.getNumero(), c1.getPinta())
c1.setNumero(5)
c1.setPinta('espadas')
console.log(c1.getNumero(), c1.getPinta())

//Trabajando con múltiples objetos
//Ejemplo 1

function Persona(nombre, mascota){
  this.nombre = nombre
  this.mascota = mascota
}

function Mascota(nombre){
  this.nombre = nombre
}

var m1 = new Mascota('snowball')
var p1 = new Persona('Julián', m1)

console.log(p1)
console.log(m1)

//Ejercicio 15

function Persona(nombre, mascota){
  this._nombre = function(){
    return nombre
  }
  this._mascota = function(){
    return mascota
  }
}

function Mascota(nombre){
  this._nombre = function(){
    return nombre
  }
}

var m1 = new Mascota('snowball')
var p1 = new Persona('Julián', m1)

Persona.prototype.getNombre = function(){
  return this._nombre()
}
  
Mascota.prototype.getNombre = function(){
  return this._nombre()
}
  
console.log(p1.getNombre())
console.log(m1.getNombre())

//Ejercicio 16

function Empresa(nombre, direccion, persona){
  this.nombre = nombre
  this.direccion = direccion
  this.persona = persona
}

function Persona(nombre, edad){
  this.nombre = nombre
  this.edad = edad
}

var p1 = new Persona('Cholo', 20)
var e1 = new Empresa('Sabory', 'Zenteno 138', p1)

console.log(e1)

//Cardinalidad N
//Ejemplo 1

function Persona(nombre, redes_sociales){
  this.nombre = nombre
  this.redes_sociales = redes_sociales || []
}

//Método Push
Persona.prototype.addRedsocial = function(red_social){
  this.redes_sociales.push(red_social)
}

function RedSocial(nombre, id){
  this.nombre = nombre
  this.id = id
}

r1 = new RedSocial('Twitter', '@juanduran85')
r2 = new RedSocial('GitHub', 'JuanDuran85')

p1 = new Persona('Juan', [r1,r2])

console.log(p1)

r3 = new RedSocial('Facebook', 'JuanCDuranR')

p1.addRedsocial(r3)

console.log(p1)

//Ejercicio 17

function Proyecto(nombre, persona){
  this._nombre = nombre
  this.persona = persona || []
}

Proyecto.prototype.setAddPersona = function(persona_nueva){
  this.persona.push(persona_nueva)
}

function Persona(nombre){
  this._nombre = nombre
}

Proyecto.prototype.getNombre = function(){
  return this._nombre
}

var p1 = new Persona('Juan')
var p2 = new Persona('Jocelyn')
var pro1 = new Proyecto('JS',[p1, p2])

console.log(pro1)

var p3 = new Persona('Yecenia')

pro1.setAddPersona(p3)

console.log(pro1)

console.log(pro1._nombre)

//Identificando Objetos En javascript

//Ejemplos

console.log(typeof true)
console.log(typeof 2)
console.log(typeof '')
console.log(typeof function(){})
console.log(typeof{})
console.log(typeof Symbol())
console.log(typeof undefined)

//Ejercicio 18

console.log(typeof 3.1416)
console.log(typeof 'Maria')
console.log(typeof NaN)
console.log(typeof "José")
console.log(typeof null)
console.log(typeof false)
console.log(typeof [1,2,3,4,5,6,7,8]);