// Importa el paquete 'colors' para dar formato al texto en la consola.
const colors = require('colors');

// Importa las funciones 'mostrarMenu' y 'pausa' desde un módulo externo.
const { mostrarMenu, pausa } = require('./node_modules/menu.js');

// Imprime un mensaje introductorio.
console.log('Este programa muestra un menú principal con varias opciones, permitiendo al usuario realizar acciones específicas en función de su elección.');

// Define una función principal asíncrona llamada 'main'.
const main = async () => {
    // Limpia la consola y muestra un encabezado del menú principal.
    console.clear();
    console.log('******************************');
    console.log('*        MENU PRINCIPAL      *');
    console.log('******************************\n');

    // Inicializa la variable 'opcion'.
    let opcion = '';

    // Inicia un bucle 'do-while' que se ejecuta mientras la opción no sea '0'.
    do {
        // Inicia un bucle 'do-while' para solicitar la opción hasta que sea un número entre 0 y 6.
        do {
            opcion = await mostrarMenu();
        } while (!(opcion >= 0 && opcion <= 6));

        // Si la opción no es '0', imprime un mensaje indicando la ejecución del proceso y espera la pausa.
        if (opcion !== 0) {
            console.log(`\nSe ejecuta el proceso ${opcion}`);
            await pausa();
        }
    } while (opcion !== 0); // El bucle principal se repite mientras la opción no sea '0'.
};

// Llama a la función principal 'main'.
main();
