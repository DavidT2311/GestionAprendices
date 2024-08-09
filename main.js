//Creando listas para guardar aprendices y programas de formacion
let lista_aprendices = [];
let lista_programas = [];

//Creando modelo
let Aprendiz = {
    documento: "",
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    estado: Boolean,
    estado_programa: Boolean,
    programa: 0,
};


let Programa = { //Modelo para los programas de formacion
    numero_ficha: "",
    nombre_programa: "",
};


let opcion;
do {
    //Menu para elegir entre los aprendices o los programas
    opcion = parseInt(prompt(
        `Eliga una opcion
        1: Aprendices
        2: Programas
        3: Salir
        `
    ));
        
    //Creacion de switch
    switch(opcion) {
        case 1:
            llamarAprendices();
            break;

        case 2:
    };



} while (opcion != 3);


function llamarAprendices() {
    //Creacion del CRUD
    let opcion;
    do {
        opcion = parseInt(prompt(
            `Eliga una opcion
            1. Listar aprendices
            2. Ingrear un aprendiz
            3. Actualizar un aprendiz
            4. Eliminar un aprendiz
            5. Volver al menu de aprendices-programas
            `
        ));


    } while (opcion != 5);

}

