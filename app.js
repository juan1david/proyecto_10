const colors = require('colors');

const {mostrarMenu, pausa} = require('./node_modules/menu.js');

console.log('Este programa muestra un menú principal con varias opciones,' +
'permitiendo al usuario realizar acciones específicas en función de su elección.');


const main = async() => {
    console.clear();
    console.log('******************************');
    console.log('*        MENU PRINCIPAL      *');
    console.log('******************************\n');

    let opcion = '';

    do {
        do {
            option = await mostrarMenu();
        } while(!(option >=0 && option<=6))

        if (option !==0){
            console.log(`\nse ejecuta el proceso ${option}`);
            await pausa();
        } 
    } while (option !== '0');

};

main();

