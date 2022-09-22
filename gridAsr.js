console.clear();
var myVar = setInterval(CargarGrids, 500);

function CargarGrids() {
    if (e.isNew) {
        if (window.location.href.includes('appViewId=e7052146-6150-4cd1-97a6-43e5d4dd4337')) {
            execSP('ASR_Lappiz_ResumenTotalSolicitudes_Interno').then(function(result) {
                $("#grid1").kendoGrid({
                    toolbar: ["excel"],
                    excel: {
                        fileName: "Datos_Grid_Solicitudes_Intero.xlsx",
                        proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                        filterable: true,
                        allPages: true
                    },
                    dataSource: {
                        data: result.data[0],
                        schema: {
                            model: {
                                fields: {
                                    Consecutivo: { type: "string" },
                                    FechaCreacion: { type: "datetime" },
                                    Identificacion: { type: "string" },
                                    NombreCompleto: { type: "string" },
                                    EstadoRegistro: { type: "string" },
                                    TipoEntrevista : { type: "string" },
                                    Solicitante: { type: "string" },
                                    DecisionRiesgo: { type: "string" },
                                    NumeroMarcaciones: { type: "string" },
                                    Analista: { type: "string" },
                                    Empresa: { type: "string" },
                                    Beneficiaria: { type: "string" }
                                }
                            }
                        },
                    },
                    resizable: false,
                    groupable: true,
                    scrollable: true,
                    sortable: true,
                    pageable: { refresh: true, pageSize: 10 },
                    filterable: true,
                    columns: [
                        // {
                        //     command: [{
                        //         name: "Ver Solicitud",
                        //         // template: `<span class='btn btn-sm'> <i class='fa fa-edit active-color'></i></span>`,
                        //         width: 10,
                        //         onclick: function(e) {
                        //             debugger;
                        //             console.clear();
                        //             e.preventDefault();
                        //             var tr = $(e.target).closest("tr");
                        //             var data = this.dataItem(tr);
                        //             setTimeout(() => {
                        //                 location.assign(`#/forms?rowId=${data.IdSolicitud}&viewName=ASR_Lappiz_SolicitudEntrevista&entityId=db7a7676-aec6-4c4c-a0a3-6b2e0bf2ddba&appViewId=445fcf6e-c579-4e8c-bdd0-0382d02836c0`)
                        //             }, 500);
                        //         }
                        //     }],
                        // },
                        { field: "Consecutivo", title: 'Consecutivo' },
                        { field: "FechaCreacion", title: "Fecha de creación", template: "#= kendo.toString(kendo.parseDate( FechaCreacion, 'yyyy-MM-dd'), 'yyyy/MM/dd') #" },
                        { field: "Identificacion", title: 'Identificación' },
                        { field: "NombreCompleto", title: 'Persona Entrevistada' },
                        { field: "EstadoRegistro", title: 'Estado del Registro' },
                        { field: "TipoEntrevista", title: 'Tipo de entrevista' },
                        { field: "Solicitante", title: 'Solicitante' },
                        { field: "DecisionRiesgo", title: 'Decisión del riesgo del Analista' },
                        { field: "NumeroMarcaciones", title: 'Numero de marcaciones' },
                        { field: "Analista", title: 'Analista Encargado' },
                        { field: "Empresa", title: 'Empresa' },
                        { field: "Beneficiaria", title: 'Empresa Beneficiaria' }
                    ],
                    dataBound: function() {
                        for (var i = 0; i < this.columns.length; i++) {
                            this.autoFitColumn(i);
                        }
                    },
                });

                $("#grid1 tbody").on("click", "tr", function(e) {
                    var row = $(this);
                    var grid = $("#grid1").getKendoGrid();
                    if (confirm("Desea ingresar a la solicitud " + grid.dataItem(row).ConsecutivoSolicitud)) {
                        location.assign(`#/forms?rowId=${grid.dataItem(row).IdSolicitud}&viewName=ASR_Lappiz_SolicitudEntrevista&entityId=db7a7676-aec6-4c4c-a0a3-6b2e0bf2ddba&appViewId=445fcf6e-c579-4e8c-bdd0-0382d02836c0`)
                    }
                });
            });

        } else if (window.location.href.includes('appViewId=171512c8-8986-4943-aba6-a287003ad71c')) {
            execSP('ASR_Lappiz_ResumenTotalSolicitudes_Externo1', [`'${JSON.parse(sessionStorage.LappizUser).FkEmpresa}'`]).then(function(result) {
                $("#grid1").kendoGrid({
                    toolbar: ["excel"],
                    excel: {
                        fileName: "Datos_Grid_Solicitudes_Externo1.xlsx",
                        proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                        filterable: true,
                        allPages: true
                    },
                    dataSource: {
                        data: result.data[0],
                        schema: {
                            model: {
                                fields: {
                                    Consecutivo: { type: "string" },
                                    FechaCreacion: { type: "datetime" },
                                    Identificacion: { type: "string" },
                                    NombreCompleto: { type: "string" },
                                    EstadoRegistro: { type: "string" },
                                    TipoEntrevista : { type: "string" },
                                    DecisionRiesgo: { type: "string" },
                                    NumeroMarcaciones: { type: "string" },
                                    Solicitante: { type: "string" },
                                    Beneficiaria: { type: "string" }
                                }
                            }
                        },
                    },
                    resizable: false,
                    groupable: true,
                    scrollable: true,
                    sortable: true,
                    pageable: {
                        refresh: true,
                        pageSize: 10
                    },
                    filterable: true,
                    dataBound: function() { for (var i = 0; i < this.columns.length; i++) { this.autoFitColumn(i); } },
                    columns: [
                        { field: "Consecutivo", title: 'Consecutivo' },
                        { field: "FechaCreacion", title: "Fecha de creación", template: "#= kendo.toString(kendo.parseDate( FechaCreacion, 'yyyy-MM-dd'), 'yyyy/MM/dd') #" },
                        { field: "Identificacion", title: 'Identificación' },
                        { field: "NombreCompleto", title: 'Persona Entrevistada' },
                        { field: "EstadoRegistro", title: 'Estado del Registro' },
                        { field: "TipoEntrevista", title: 'Tipo de entrevista' },
                        { field: "DecisionRiesgo", title: 'Decisión del riesgo del Analista' },
                        { field: "NumeroMarcaciones", title: 'Numero de marcaciones' },
                        { field: "Solicitante", title: 'Solicitante' },
                        { field: "Beneficiaria", title: 'Empresa Beneficiaria' }
                    ]
                });

                $("#grid1 tbody").on("click", "tr", function(e) {
                    var row = $(this);
                    var grid = $("#grid1").getKendoGrid();
                    if (confirm("Desea ingresar a la solicitud " + grid.dataItem(row).ConsecutivoSolicitud)) {
                        location.assign(`#/forms?rowId=${grid.dataItem(row).IdSolicitud}&viewName=ASR_Lappiz_SolicitudEntrevista&entityId=db7a7676-aec6-4c4c-a0a3-6b2e0bf2ddba&appViewId=55a76bc2-f8d5-4e8a-9469-c8d8ba1f155b`)

                    }
                });
            });
        } else if (window.location.href.includes('appViewId=836ab5a5-4de9-4682-843c-3b6d42c98005')) {
            execSP('ASR_Lappiz_ResumenTotalSolicitudes_Externo2', [`'${JSON.parse(sessionStorage.LappizUser).Id}'`]).then(function(result) {
                $("#grid1").kendoGrid({
                    toolbar: ["excel"],
                    excel: {
                        fileName: "Datos_Grid_Solicitudes_Externo2.xlsx",
                        proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                        filterable: true,
                        allPages: true
                    },
                    dataSource: {
                        data: result.data[0],
                        schema: {
                            model: {
                                fields: {
                                    Consecutivo: { type: "string" },
                                    FechaCreacion: { type: "datetime" },
                                    Identificacion: { type: "string" },
                                    NombreCompleto: { type: "string" },
                                    EstadoRegistro: { type: "string" },
                                    TipoEntrevista : { type: "string" },
                                    DecisionRiesgo: { type: "string" },
                                    NumeroMarcaciones: { type: "string" },
                                    Solicitante: { type: "string" },
                                    Beneficiaria: { type: "string" }
                                }
                            }
                        },
                    },
                    resizable: false,
                    groupable: true,
                    scrollable: true,
                    sortable: true,
                    pageable: {
                        refresh: true,
                        pageSize: 10
                    },
                    filterable: true,
                    dataBound: function() { for (var i = 0; i < this.columns.length; i++) { this.autoFitColumn(i); } },
                    columns: [
                        { field: "Consecutivo", title: 'Consecutivo' },
                        { field: "FechaCreacion", title: "Fecha de creación", template: "#= kendo.toString(kendo.parseDate( FechaCreacion, 'yyyy-MM-dd'), 'yyyy/MM/dd') #" },
                        { field: "Identificacion", title: 'Identificación' },
                        { field: "NombreCompleto", title: 'Persona Entrevistada' },
                        { field: "TipoEntrevista", title: 'Tipo de entrevista' },
                        { field: "EstadoRegistro", title: 'Estado del Registro' },
                        { field: "DecisionRiesgo", title: 'Decisión del riesgo del Analista' },
                        { field: "NumeroMarcaciones", title: 'Numero de marcaciones' },
                        { field: "Solicitante", title: 'Solicitante' },
                        { field: "Beneficiaria", title: 'Empresa Beneficiaria' }
                    ]
                });
                $("#grid1 tbody").on("click", "tr", function(e) {
                    var row = $(this);
                    var grid = $("#grid1").getKendoGrid();
                    if (confirm("Desea ingresar a la solicitud " + grid.dataItem(row).ConsecutivoSolicitud)) {
                        location.assign(`#/forms?rowId=${grid.dataItem(row).IdSolicitud}&viewName=ASR_Lappiz_SolicitudEntrevista&entityId=db7a7676-aec6-4c4c-a0a3-6b2e0bf2ddba&appViewId=55a76bc2-f8d5-4e8a-9469-c8d8ba1f155b`)
                    }
                });

            });
        }
    }
    if ($("#grid1").html() != '' && $("#grid1").html() != undefined) {
        clearInterval(myVar);
    }
}