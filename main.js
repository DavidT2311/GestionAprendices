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
//function programaModel (numero_ficha, nombre_programa) { //Modelo para los programas
//    this.numero_ficha = numero_ficha;
//    this.nombre_programa = nombre_programa;
//};

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
            mensaje_aprendices += `${objeto.documento} - ${objeto.nombre} - ${objeto.apellido} - ${objeto.telefono} - ${objeto.direccion} - ${objeto.programa}\n`;
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

        if (!lista_aprendices.length == 0) {
            for (let objeto of lista_aprendices) {
                if (documento == objeto.documento) {
                    alert("El aprendiz ya existe");
                    break;
                } else {
                    lista_aprendices.push(nuevo_aprendiz);
                    alert("Se ha ingresado el aprendiz correctamente");
                    break;
                };
            };
        } else {
            lista_aprendices.push(nuevo_aprendiz);
            alert("Se ha ingresado el aprendiz correctamente");
        };
    };
};

const ActualizarAprendiz = () => {
    alert("Act aprendiz");
};

const EliminarAprendiz = () => {
    //Pedimos el aprendiz
    let aprendiz_eliminar = parseInt(prompt("Ingrese el numero de documento del aprendiz por eliminar"));

    //Buscamos el aprendiz en los objetos del arreglo de aprendices
    let es_encotrado = false;
    lista_aprendices.forEach((objeto, indice) => {
        //Validamos que el aprendiz a eliminar digitado por el usuario sea igual al aprendiz dentro del arreglo de aprendicea
        if (aprendiz_eliminar == objeto.documento) {
            //Eliminamos el objeto de la arreglo de aprendices
            lista_aprendices.splice(indice, 1);
            es_encotrado = true
        };
    });

    //Imprimimos el mensaje segun el cambio de la variable
    if (es_encotrado) {
        alert("Se ha eliminado el aprendiz");
    } else {
        alert("No se ha encontrado el aprendiz");
    };
    

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
        
        for (let objeto of lista_programas) {
            if (programa.numero_ficha == objeto.numero_ficha) {
                alert("El programa ya existe");
                break;
            } else {
                lista_programas.push(programa);
                alert("Se ha ingresado el programa correctamente");
                break;
            };
        };
    };
};

const ActualizarPrograma = () => {
    
    
};

const EliminarPrograma = () => {
    //Pedimos el programa
    let programa_eliminar = parseInt(prompt("Ingrese el numero de ficha del programa por eliminar"));

    //Buscamos el programa en los objetos de la lista de programas
    let es_encotrado = false;
    lista_programas.forEach((objeto, indice) => {
        //Validamos que el programa a eliminar digitado por el usuario sea igual al programa dentro del arreglo de programas
        if (programa_eliminar == objeto.numero_ficha) {
            //Eliminamos el objeto de la arreglo de programas
            lista_programas.splice(indice, 1);
            es_encotrado = true;
        };
    });

    //Imprimimos el mensaje segun el cambio de la variable
    if (es_encotrado) {
        alert("Se ha eliminado el programa");
    } else {
        alert("No se ha encontrado el programa");
    };
};


menuInicio();
