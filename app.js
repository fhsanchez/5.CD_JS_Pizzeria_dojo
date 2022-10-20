
/*

// Ejercicio #1 Crear una funcion "pizzaOven" que devuelva un objeto pizza
function pizzaOven(masa, proteina, queso, ingredientes) {
    var pizza = {};
    pizza.masa = masa;
    pizza.proteina = proteina;
    pizza.queso = queso;
    pizza.ingredientes = ingredientes;
    return pizza;
}


// Ejercicio #2 Crea una pizza con: "estilo Chicago", "tradicional", ["mozzarella"] y ["pepperoni", "salchicha"]
console.log(" Ejercicio #2");
var pizza2 = pizzaOven("estilo Chicago", "tradicional", "mozarella", ["pepperoni", "salchicha"]);
console.log(pizza2);

console.log("");
console.log("****************************");
console.log("");


// Ejercicio #3  Crea una pizza con: "lanzada a mano" , "marinara" , ["mozzarella", "feta"] y ["champiñones", "aceitunas", "cebollas"]
console.log(" Ejercicio #3");
var pizza3 = pizzaOven("lanzada a mano", "marinara", "feta", ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza3);

console.log("");
console.log("****************************");
console.log("");

// Ejercicio #4  ¡Crea 2 pizzas más con los ingredientes que quieras!
console.log(" Ejercicio #4");
var pizza4 = pizzaOven("lanzada a mano", "marinara", "feta", ["piña", "extra queso", "espinaca!!",  "champiñones", "aceitunas", "cebollas"]);
console.log(pizza4);

*/

// Ejercicio #5 Crea una function llamada randomPizza que use Math.random () para crear una pizza aleatoria.
console.log(" Ejercicio #5");
function randomPizza(masa, proteina, queso, ingredientes) {
    var pizza = {};
    pizza.masa = masa;
    pizza.proteina = proteina;
    pizza.queso = queso;
        
    let ingredientesFinales = [];

    for (let  i=0;i<3;i++)
    {        
        let random = Math.floor(Math.random()*3);
       
        if(i == 0){            
            ingredientesFinales.push(ingredientes[random]);
            
        }         
        else  if (existeIngrediente(ingredientes[i], ingredientesFinales) == "no")        
           ingredientesFinales.push(ingredientes[random]);          
       
    }   

    pizza.ingredientes = ingredientesFinales;
    return pizza;
}


function existeIngrediente(ingrediente, ingredientes){  
    for (let  j=0;j<=ingredientes.lenght;j++)
    {       
        if(ingredientes[j] == ingrediente)
        {
            return "si";
        }       
    }   
    return "no";
}

//var pizza5 = randomPizza("lanzada a mano", "marinara", "feta", ["piña", "extra queso", "espinaca!!",  "champiñones", "aceitunas", "cebollas"]);
var pizza5 = randomPizza("lanzada a mano", "marinara", "feta", ["piña", "extra queso", "espinaca!!",  "champiñones"]);

console.log("Su nueva Pizza es: ");
console.log(pizza5);