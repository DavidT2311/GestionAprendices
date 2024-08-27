let lista_aprendices = [];
let lista_programas = [];

//Creando modelo aprendiz
function aprendizModel(documento, nombre, apellido, telefono, direccion, programa) { //Modelo para los aprendices
    this.documento = documento;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.direccion = direccion;
    this.estado = true;
    this.estado_programa = true;
    this.programa = programa;
};

//Creando modelo programa
function programaModel (numero_ficha, nombre_programa) { //Modelo para los programas
    this.numero_ficha = numero_ficha;
    this.nombre_programa = nombre_programa;
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
                ListarAprendices();
                break;
            case 2:
                IngresarAprendiz();
                break;
            case 3:
                ActualizarAprendiz();
                break;
            case 4:
                EliminarAprendiz();
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
                ListarProgramas();
                break;
            case 2:
                IngresarPrograma();
                break;
            case 3:
                ActualizarPrograma();
                break;
            case 4:
                EliminarPrograma();
                break;
            case 5:
                break;
            default:
                alert("Digite una opcion correcta");
        };
    } while (opcion != 5);
};

//Funcion para listar todos los aprendices
const ListarAprendices = () => {
    if (lista_aprendices.length == 0) {
        alert("Aun no hay aprendices");
    } else {
        let mensaje_aprendices = "";
        //Recorrer la lista de aprendices
        for (let objeto of lista_aprendices) {
            mensaje_aprendices += `Documento : ${objeto.documento}, Nombre : ${objeto.nombre}\n`;
        };
        alert(mensaje_aprendices);
    };
};

const IngresarAprendiz = () => {
    //Guardar aprendices
    let cantidad = parseInt(prompt("Digite la cantidad de aprendices que desea guardar"));

    //Lista aprendices
    for (let i = 0; i < cantidad; i++) {
        let documento = prompt("Digite el documento");
        let nombre = prompt("Digite el nombre");
        let apellido = prompt("Digite el apellido");
        let telefono = prompt("Digite el telefono");
        let direccion = prompt("Digite la direccion");
        let programa = parseInt(prompt("Digite el numero de ficha del programa"));
        
        let nuevo_aprendiz = new aprendizModel(documento, nombre, apellido, telefono, direccion, programa);
        //Se guardan los cambios en los aprendices
        lista_aprendices.push(nuevo_aprendiz);
    };
};

const ActualizarAprendiz = () => {
    alert("Act aprendiz");
};

const EliminarAprendiz = () => {
    alert("Eliminar aprendices")
};

const ListarProgramas = () => {
    if (lista_programas.length == 0) {
        alert("No hay programas aun");
    } else {
        let mensaje_programas = "";
        for (let objeto of lista_programas) {
            mensaje_programas += `Ficha : ${objeto.numero_ficha}, Nombre : ${objeto.nombre_programa}\n`;
        };
        alert(mensaje_programas);
    };
};

const IngresarPrograma = () => {
     //Guardar programas
    let cantidad = parseInt(prompt("Digite la cantidad de programas que desea guardar"));

    for (let i = 0; i < cantidad; i++) {
        let programa = {
            numero_ficha: parseInt(prompt("Ingrese el numero de la ficha")),
            nombre_programa: prompt("Ingrese el nombre de la ficha")
        }
        lista_programas.push(programa);
    }

    console.log(lista_programas);
};

const ActualizarPrograma = () => {
    alert("act pro");
};

const EliminarPrograma = () => {
    alert("eli pro");
};


menuInicio();