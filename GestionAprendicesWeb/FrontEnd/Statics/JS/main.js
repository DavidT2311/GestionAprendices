// dataTable para Aprendices
let opcionesAprendices = {
    language: { url: "//cdn.datatables.net/plug-ins/2.1.3/i18n/es-MX.json" },
        //     lengthMenu: "Mostrar _MENU_ registros por página",
        //     zeroRecords: "No se encontraron resultados",
        //     info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
        //     infoEmpty: "Mostrando 0 a 0 de 0 registros",
        //     infoFiltered: "(filtrado de _MAX_ registros en total)",
        //     search: "Buscar:",
        //     paginate: {
        //         first: "Primero",
        //         last: "Último",
        //         next: "Siguiente",
        //         previous: "Anterior"
        // }
    columnDefs: [
        { orderable: false, targets: [5, 6] }
    ],
}

$(document).ready( function () {
    $('#Tablas_Contenido_Aprendices').DataTable(opcionesAprendices);
});


// dataTable para Programas
let opcionesProgramas = {
    language: { url: "//cdn.datatables.net/plug-ins/2.1.3/i18n/es-MX.json" },
    columnDefs: [
        { orderable: false, targets: [2, 3] }
    ]
}

$(document).ready( function () {
    $('#Tablas_Contenido_Programas').DataTable(opcionesProgramas);
});

