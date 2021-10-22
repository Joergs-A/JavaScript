//tipo de dato number
console.log(100)
console.log(10.5)

// Tipo de dato String (cadena de caracteres)
console.log('Hola mundo')
console.log("Hola mundo 2")

//Tipo de datos: Booñean (True/False)
console.log(true) //solo en minusculas
console.log(false)

//Tipo de datos: Date (Fecha)
console.log(new Date()) 

//Declaracion de Variables (cons/let/var)
const name = 'Jorge'//(No pueden variar luego de su declaracion)
console.log(name)
let lastName = "Artaza" //(El let se puede cambiar el valor (El js se ejecuta por linea))
console.log(lastName)

var age = "20" //(El var se puede cambiar el valor por ahora)
console.log (age)

//Concadenacion (Unir las variables)
// Formas de Concadenacion (+/'')
//const nameComplete = name + " " + lastName
//console.log(nameComplete)

const nameComplete = name + " " + lastName + " tiene "  + age +  " años "
console.log(nameComplete)

const nombreCompleto = `${name} ${lastName} tiene ${age} años`
console.log(nombreCompleto)

var num = 20
console.log(num)
num = num + 1
console.log(num)