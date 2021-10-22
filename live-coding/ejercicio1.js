/* Ejercicio 

''
1. crea una variable con tu nombre
2. crea una variable con tu apellido
3. crea una variable con tu edad
4. mostralo en pantalla todos esos datos concatenados
5. sumale un numero a la edad
6. mostralo en pantalla todos esos datos concatenados
7. agrega comentarios en cada una de las líneas explicando lo que hacen 
8. subilo a tu repositorio
''*/

const nombre = "Jorge" //Uso una constante ya que mi nombre no va a cambiar
const apellido = "Artaza" //Uso una constante ya que mi apellido no va a cambiar
let edad = 20 //Uso un "let" porque puedo cambiar el valor posteriormente en el codigo

 /*Creo una nueva variable para concadenar los datos anteriores
 Use este tipo de sintaxis ya que respeta los saltos de lineas y los espacios, haciendolo mas facil de entender el codigo
 */
let nombreComp = `Mi nombre es ${nombre} ${apellido} tengo ${edad}`
console.log(nombreComp) 

edad = edad + 1 // Le sumo un numero a mi edad como si fuera un tipo de contador

let nombreCompleto = `Mi nombre es ${nombre} ${apellido} tengo ${edad}` // concadeno todos los datos modificados
console.log(nombreCompleto) //Muestro por consola todos los datos finales 
