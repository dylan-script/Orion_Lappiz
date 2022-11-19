//Id del formulario 
let appViewId = getAppViewId();
console.log(appViewId);

if (appViewId == 'e4596a1d-df2f-4ece-9fb2-bfdf1fc2b7bc') {
    if (sessionStorage.rolesId != '7ef5a55b-a198-4d5b-81a2-3b1303863523') {
        var query = `SELECT cop.NombreCorto [Copropiedades], cop.Id [Id]
            FROM Orion_Lappiz_CopropiedadPH AS cop
            INNER JOIN Orion_Lappiz_CredencialCopropiedad AS crecop
              ON crecop.CopropiedadFK = cop.Id
            INNER JOIN Orion_Lappiz_Credenciales AS cre
              ON cre.Id = crecop.CredencialFK
            WHERE cre.UsersFK = '${JSON.parse(sessionStorage.LappizUser).Id}'`;
    } else {
        $("#btn-test-modal-interna").css("display", "block")
        var query = `SELECT cop.NombreCorto [Copropiedades], cop.Id [Id]
        FROM Orion_Lappiz_CopropiedadPH AS cop`;
    }
    setTimeout(function () {
        debugger;


        var data = ajaxQuery(query);
        if (data.length > 0) {
            kendo.jQuery('#GridCi').kendoGrid({
                dataSource: {
                    data: data,
                    autoSync: true,
                    schema: {
                        model: {
                            fields: {
                                Copropiedades: { type: "string", editable: false },
                                Id: { type: "string", editable: false }
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
                    { field: "Copropiedades", title: "Copropiedades" }
                ],
                editable: true,
            });

        }


        $("#GridCi tbody").on("click", "tr", function (e) {
            debugger
            //console.clear();
            console.log('running...')
            let grid = kendo.jQuery('#GridCi').data('kendoGrid');
            var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
            /* The result can be observed in the DevTools(F12) console of the browser. */
            console.log(dataItem);
            sessionStorage.CopropiedadId = dataItem.Id;
            console.log(sessionStorage.CopropiedadId);
            sessionStorage.CopropiedadName = dataItem.Copropiedades;
            console.log(sessionStorage.CopropiedadName);
            toastr.success(`Se eligió la copropiedad ${sessionStorage.CopropiedadName}`);
            if (sessionStorage.Eleccion == '0') {
                $("span.link-title:contains('Copropiedad')").text(sessionStorage.CopropiedadName)
                sessionStorage.Eleccion = '1';
                console.log(sessionStorage.Eleccion)
            } else {
                $(`span.link-title:contains('${sessionStorage.CopActual}')`).text(sessionStorage.CopropiedadName)
            }
            sessionStorage.CopActual = sessionStorage.CopropiedadName;
            console.log(sessionStorage.CopActual)
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

    }, 3000);

}