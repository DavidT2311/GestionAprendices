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
            llamarAprendicesProgramas(opcion);
            break;
        case 2:
            llamarAprendicesProgramas(opcion);
            break;
        case 3:
            break;
        default:
            alert("Digite una opcion correcta");
    };

} while (opcion != 3);


function llamarAprendicesProgramas(opcion) {
    let nombre_opcion;
    if (opcion == 1) {
        nombre_opcion = "Aprendiz";
    } 
    if (opcion == 2) {
        nombre_opcion = "Programas";
    }
    
    do {
        opcion = parseInt(prompt(
            `Eliga una opcion
            1. Listar ${nombre_opcion}
            2. Ingresar un ${nombre_opcion}
            3. Actualizar un ${nombre_opcion}
            4. Eliminar un ${nombre_opcion}
            5. Volver al menu de aprendices-programas
            `
        ));
    } while (opcion != 5);
}

