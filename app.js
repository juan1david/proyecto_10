const colors = require('colors');

const {mostrarMenu, pausa} = require('./node_modules/menu.js');

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

