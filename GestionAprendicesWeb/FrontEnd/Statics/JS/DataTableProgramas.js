// dataTable para Programas
let opcionesProgramas = {
    language: { 
            lengthMenu: "Mostrar _MENU_ registros por página",
            zeroRecords: "No se encontraron resultados",
            info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
            infoEmpty: "Mostrando 0 a 0 de 0 registros",
            infoFiltered: "(filtrado de _MAX_ registros en total)",
            search: "Buscar:",
            paginate: {
                first: "Primero",
                last: "Último",
                next: "Siguiente",
                previous: "Anterior"
        }
    },
    columnDefs: [
        { orderable: false, targets: [2, 3] }
    ]
}

$(document).ready( function () {
    $('#Tablas_Contenido_Programas').DataTable(opcionesProgramas);
});