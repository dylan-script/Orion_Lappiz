//Id del formulario 
if (window.location.href.includes("appViewId=4dc7db96-d1f0-41ec-8405-38921a970770")) {
    setTimeout(function () {
        $('#cargar').click(function () {
            debugger;
            var query = `SELECT
            IdTercero [ID],
            IdTblTipoId [TipoID],
            IdTblTipoTercero [TipoTercero]
            FROM Orion_Lappiz_Tercero`;

            var data = ajaxQuery(query);
            if (data.length > 0) {
                $('#GridCi').kendoGrid({
                    dataSource: {
                        data: data,
                        autoSync: true,
                        schema: {
                            model: {
                                fields: {
                                    ID: { type: "string", editable: false },
                                    TipoID: { type: "string", editable: false },
                                    TipoTercero: { type: "string", editable: false }
                                },
                            },
                        },
                        //sort: [{ field: "Reserva", dir: "asc" }],
                    },
                    height: 450,
                    scrollable: true,
                    sortable: true,
                    filterable: true,
                    resizable: true,
                    pageable: {
                        pageable: true,
                        previousNext: false,
                        pageSize: 10,
                        alwaysVisible: true,
                        numeric: true,
                        buttonCount: 5
                    },
                    dataBound: function () {
                        for (var i = 0; i < this.columns.length; i++) {
                            this.autoFitColumn(i);
                        }
                    },
                    columns: [
                        { field: "ID", title: "ID" },
                        { field: "TipoID", title: "Tipo de ID" },
                        { field: "TipoTercero", title: "Tipo de Tercero" }
                    ],
                    editable: true,
                });

            }

            $("#GridCi tbody").on("click", "tr", function(e) {
                debugger
                //var urlFormEdited = '#/forms?rowId=423DBD02-E42E-4CCB-9505-00E1307E3B9A&viewName=Nombre_Entidad&entityId=79668f51-d03a-412e-9d37-7ba91488000d';
                console.log('OK-1');
                var row = $(this);
                console.log(row);
                var grid = $("#GridCi").getKendoGrid();
                if (confirm("Desea ingresar al tercero? ")) {
                    console.log(e.dataItem);
                    location.assign(`#/forms?rowId=${grid.dataItem(row).Id}&viewName=Orion_Lappiz_Tercero&entityId=7eef8db4-6509-4f5e-b9b3-6cd6d1a18178&AppViewId=1436e050-ce43-4946-9469-57906af198c8`)

                }
            });

            function ajaxQuery(query) {
                let data
                let newquery = {
                    "query": query,
                    "parameters": {
                        "aType": "execTx",
                        "environment": `${backandGlobal.environment}`
                    }
                }

                $.ajax({
                    async: false,
                    url: `${backandGlobal.api2}/${sessionStorage.workspace}.api/api/lappiz/sp/query`,
                    type: 'POST',
                    data: JSON.stringify(newquery),
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Content-Type', 'application/json');
                        xhr.setRequestHeader('Authorization', localStorage.Authorization);
                    },
                    success: function (result) {
                        data = result[0]
                    },
                    error: function (error) {
                        console.log(error)
                    }
                })
                return data
            }
        });


    }, 850);

}