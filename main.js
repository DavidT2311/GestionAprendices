//Creando modelo aprendiz
let Aprendiz = { //Modelo para los aprendices
    documento: "",
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    estado: Boolean,
    estado_programa: Boolean,
    programa: 0,
};

//Creando modelo programa
let Programa = { //Modelo para los programas
    numero_ficha: "",
    nombre_programa: "",
};

const menuInicio = () => {
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
            
        //Creacion de switch de programas y aprendices
        switch(opcion) {
            case 1:
                llamarAprendices();
                break;
            case 2:
                llamarProgramas();
                break;
            case 3:
                break;
            default:
                alert("Digite una opcion correcta");
        };

    } while (opcion != 3);
};

//Funcion para los metodos de aprendices
const llamarAprendices = () => {
    //Creando lista para guardar los aprendices
    let lista_aprendices = [];

    let opcion;
    do {
        opcion = parseInt(prompt(
            `Eliga una opcion
            1. Listar aprendiz
            2. Ingresar un aprendices
            3. Actualizar un aprendices
            4. Eliminar un aprendices
            5. Volver al menu de aprendices-programas
            `
        ));

        //Switch para elegir un metodo de los aprendices
        switch(opcion) {
            case 1:
                ListarAprendices(lista_aprendices);
                break;
            case 2:
                lista_aprendices = IngresarAprendiz();
                break;
            case 3:
                ActualizarAprendiz(lista_aprendices);
                break;
            case 4:
                EliminarAprendiz(lista_aprendices);
                break;
            case 5:
                break;
            default:
                alert("Digite una opcion correcta");
        }
    } while (opcion != 5);
};

//Funcion para los metodos de programas
const llamarProgramas = () => {
    //Creando lista para guardar los programas
    let lista_programas = [];

    let opcion;
    do {
        opcion = parseInt(prompt(
            `Eliga una opcion
            1. Listar programas
            2. Ingresar un programa
            3. Actualizar un programa
            4. Eliminar un programa
            5. Volver al menu de aprendices-programas
            `
        ));

        //Switch para elegir un metodo de los programas
        switch(opcion) {
            case 1:
                ListarProgramas(lista_programas);
                break;
            case 2:
                lista_programas = IngresarPrograma();
                break;
            case 3:
                ActualizarPrograma(lista_programas);
                break;
            case 4:
                EliminarPrograma(lista_programas);
                break;
            case 5:
                break;
            default:
                alert("Digite una opcion correcta");
        };
    } while (opcion != 5);
};

//Funcion para listar todos los aprendices
const ListarAprendices = (lista_aprendices) => { 
    let mensaje;
    for (let i = 0; i < lista_aprendices.length; i++) {
        mensaje += `${lista_aprendices[i]}\n`;
    };
    alert("Lista de aprendices\n", mensaje);
};

const IngresarAprendiz = () => {
    //Guardar aprendices
    let cantidad = parseInt(prompt("Digite la cantidad de aprendices que desea guardar"));
    let lista_aprendices = [];

    for (let i = 0; i < cantidad; i++) {
        Aprendiz.documento = prompt("Digite el documento");
        Aprendiz.nombre = prompt("Digite el nombre");
        Aprendiz.apellido = prompt("Digite el apellido");
        Aprendiz.telefono = prompt("Digite el telefono");
        Aprendiz.direccion = prompt("Digite la direccion");
        Aprendiz.estado = Boolean(prompt(true));
        Aprendiz.estado_programa = Boolean(prompt(true));
        Aprendiz.programa = parseInt(prompt("Digite el numero de ficha del programa"));
        
        //Se guardan los cambios en los aprendices
        return Aprendiz;
    };
};

const ActualizarAprendiz = (lista_aprendices) => {
    alert("Act aprendiz");
};

const EliminarAprendiz = (lista_aprendices) => {
    alert("Eliminar aprendices")
};



const ListarProgramas = (lista_programas) => {
    alert("En Listar Programas")
};

const IngresarPrograma = () => {
     //Guardar programas
    let cantidad = parseInt(prompt("Digite la cantidad de programas que desea guardar"));

    let lista_programas = [];
    for (let i = 0; i < cantidad; i++) {
        Programa.numero_ficha = parseInt(prompt("Digite el numero de la ficha"));
        Programa.nombre_programa = prompt("Digite el nombre del programa");
        lista_programas.push(Programa);
    };
    return lista_programas;
};

const ActualizarPrograma = (lista_programas) => {
    alert("act pro");
};

const EliminarPrograma = (lista_programas) => {
    alert("eli pro");
};


menuInicio();