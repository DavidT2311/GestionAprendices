let lista_aprendices = [];
let lista_programas = [];

const obtenerDatos = () => {
    if (!JSON.parse(localStorage.getItem("ListaAprendices")) == null) {
        lista_aprendices = JSON.parse(localStorage.getItem("ListaAprendices"));
    }

    if (!JSON.parse(localStorage.getItem("ListaProgramas")) == null) {
        lista_programas = JSON.parse(localStorage.getItem("ListaProgramas"));
    }
};

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
        switch (opcion) {
            case 1:
                llamarAprendices();
                break;
            case 2:
                llamarProgramas();
                break;
            case 3:
                //Guardamos los datos
                localStorage.setItem("ListaAprendices", JSON.stringify(lista_aprendices));
                localStorage.setItem("ListaProgramas", JSON.stringify(lista_programas));
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
        switch (opcion) {
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
        switch (opcion) {
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

//CRUD para los aprendices
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
    //Se pregunta al usuario que aprendiz desea actualizar
    let actualizar_aprendices = parseInt(prompt("Ingrese el numero de documento del aprendiz por actualizar"));

    let mensaje = "";

    //Validacion si no hay aprendices
    if (lista_aprendices.length == 0) {
        mensaje = "Aun no hay aprendices"
    }

    let indice_aprendiz;
    //Se busca el aprendiz que deseamos actualizar
    lista_aprendices.forEach((elemento, indice) => {
        //Validamos que el documento que ingreso el usuario este en la lista de aprendices
        if (actualizar_aprendices == elemento.documento) {
            mensaje = "Se ha encontrado el aprendiz";
            indice_aprendiz = indice;
        } else {
            mensaje = "No se ha encontrado el aprendiz";
        };
    });

    alert(mensaje);
    //Validamos que se haya encontrado para ejecutar la funcion de actualizar aprendices
    if (indice_aprendiz != null) {
        menuActualizarAprendices(indice_aprendiz);
    };

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

//CRUD para los programas
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

        if (!lista_programas.length == 0) {
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
        } else {
            lista_programas.push(programa);
            alert("Se ha ingresado el programa correctamente");
        };
    };
};

const ActualizarPrograma = () => {
    //Se pregunta al usuario que programa desea actualizar
    let actualizar_programa = parseInt(prompt("Ingrese el numero de ficha por actualizar"));

    let mensaje = "";

    //Validacion si no hay programas
    if (lista_aprendices.length == 0) {
        mensaje = "Aun no hay programas"
    }

    let indice_programa;
    //Se busca el programa que deseamos actualizar
    lista_programas.forEach((elemento, indice) => {
        //Validamos que el numero de ficha que ingreso el usuario este en la lista de programas
        if (actualizar_programa == elemento.numero_ficha) {
            mensaje = "Se ha encontrado el programa";
            indice_programa = indice;
        } else {
            mensaje = "No se ha encontrado el programa";
        };
    });

    alert(mensaje);
    //Validamos que se haya encontrado para ejecutar la funcion de actualizar programa
    if (indice_programa != null) {
        menuActualizarPrograma(indice_programa);
    };
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

//Menu de actualizar programas
const menuActualizarPrograma = (indice_programa) => {
    let opcion;
    do {
        //Menu para elegir que campo desea actualizar 
        opcion = parseInt(prompt(`Eliga una opcion
            1: Nombre del programa
            2: Salir
            `));

        //Creacion de switch para actualizar nombre
        switch (opcion) {
            case 1:
                actualizarNombrePrograma(indice_programa);
                opcion = 2;
                break;
            case 2:
                break;
            default:
                alert("Digite una opcion correcta");
        };

    } while (opcion != 2);
};

//Funcion para modificar el nombre del programa
const actualizarNombrePrograma = (indice_programa) => {
    let nuevo_nombre_programa = prompt("Ingrese el nuevo nombre del programa");
    //Validacion para verificar que el nombre por actualizar del programa tenga contenido
    while (nuevo_nombre_programa == "") {
        alert("Digite correctamente el nombre del programa");
        nuevo_nombre_programa = prompt("Ingrese el nuevo nombre del programa");
    };

    lista_programas[indice_programa].nombre_programa = nuevo_nombre_programa;
    alert("Se ha actualizado el programa correctamente");
};

//Menu para actualizar aprendices
const menuActualizarAprendices = (indice_aprendiz) => {

    let opcion;
    do {
        //Menu para elegir que campo desea actualizar 
        opcion = parseInt(prompt(`Eliga una opcion
            1: Nombre 
            2: Apellido
            3: Telefono
            4: Direccion
            5: Salir
            `));

        //Creacion de switch para actualizar los campos de los aprendices
        switch (opcion) {
            case 1:
                actualizarNombreAprendiz(indice_aprendiz);
                break;
            case 2:
                actualizarApellidoAprendiz(indice_aprendiz);
                break;
            case 3:
                actualizarTelefonoAprendiz(indice_aprendiz);
                break;
            case 4:
                actualizarDireccionAprendiz(indice_aprendiz);
                break;
            case 5:
                break;
            default:
                alert("Digite una opcion correcta");
        };

    } while (opcion != 5);

};

//Funcion para modificar el nombre del aprendiz
const actualizarNombreAprendiz = (indice_aprendiz) => { 
    let nuevo_nombre_aprendiz = prompt("Ingrese el nuevo nombre del aprendiz");
    //Validacion para verificar que el nombre por actualizar del aprendiz tenga contenido
    while (nuevo_nombre_aprendiz == "") {
        alert("Digite correctamente el nombre del aprendiz");
        nuevo_nombre_aprendiz = prompt("Ingrese el nuevo nombre del aprendiz");
    };

    lista_aprendices[indice_aprendiz].nombre = nuevo_nombre_aprendiz;
    alert("Se ha actualizado el nombre correctamente");
};

//Funcion para modificar el apellido del aprendiz
const actualizarApellidoAprendiz = (indice_aprendiz) => { 
    let nuevo_apellido_aprendiz = prompt("Ingrese el nuevo apellido del aprendiz");
    //Validacion para verificar que el apellido por actualizar del aprendiz tenga contenido
    while (nuevo_apellido_aprendiz == "") {
        alert("Digite correctamente el apellido del aprendiz");
        nuevo_apellido_aprendiz = prompt("Ingrese el nuevo apellido del aprendiz");
    };

    lista_aprendices[indice_aprendiz].apellido = nuevo_apellido_aprendiz;
    alert("Se ha actualizado el apellido correctamente");
};

//Funcion para modificar el telefono del aprendiz
const actualizarTelefonoAprendiz = (indice_aprendiz) => {
    let nuevo_telefono_aprendiz = parseInt(prompt("Ingrese el nuevo apellido del aprendiz"));
    //Validacion para verificar que el telefono por actualizar del aprendiz tenga contenido
    while (nuevo_telefono_aprendiz == "") {
        alert("Digite correctamente el telefono del aprendiz");
        nuevo_telefono_aprendiz = parseInt(prompt("Ingrese el nuevo apellido del aprendiz"));
    };

    lista_aprendices[indice_aprendiz].telefono = nuevo_telefono_aprendiz;
    alert("Se ha actualizado el telefono correctamente");
};

 //Funcion para modificar el direccion del aprendiz
const actualizarDireccionAprendiz = (indice_aprendiz) => { 
    let nueva_direccion_aprendiz = prompt("Ingrese la nueva direccion del aprendiz");
    //Validacion para verificar que el direccion por actualizar del aprendiz tenga contenido
    while (nueva_direccion_aprendiz == "") {
        alert("Digite correctamente la direccion del aprendiz");
        nueva_direccion_aprendiz = prompt("Ingrese la nueva direccion del aprendiz");
    };

    lista_aprendices[indice_aprendiz].direccion = nueva_direccion_aprendiz;
    alert("Se ha actualizado la direccion correctamente");
};

obtenerDatos();
menuInicio();

