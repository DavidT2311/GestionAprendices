//Guardar aprendices
let cantidad = parseInt(prompt("Digite la cantidad de aprendices que desea guardar"));

for (let i = 0; i < cantidad; i++) {
    Aprendiz.documento = prompt("Digite el documento");
    Aprendiz.nombre = prompt("Digite el nombre");
    Aprendiz.apellido = prompt("Digite el apellido");
    Aprendiz.telefono = prompt("Digite el telefono");
    Aprendiz.direccion = prompt("Digite la direccion");
    Aprendiz.estado = Boolean(prompt(true));
    Aprendiz.estado_programa = Boolean(prompt(true));
    Aprendiz.programa = parseInt(prompt("Digite el numero de ficha del programa"));
    lista_aprendices.push(Aprendiz);
};

//Guardar programas
let cantidad = parseInt(prompt("Digite la cantidad de programas que desea guardar"));

for (let i = 0; i < cantidad; i++) {
    Programa.numero_ficha = parseInt(prompt("Digite el numero de la ficha"))
    Programa.nombre_programa = prompt("Digite el nombre del programa")
}
