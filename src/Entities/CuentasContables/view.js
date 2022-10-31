debugger
let view = getAppViewId();
if (view == 'b3c31ae0-cf42-4fa3-aa73-6c56f1f52dc3') {
  var query = `SELECT c.CENombreCuentaCont [NombreCuenta], c.IdCuentaCont [NumeroCuenta]  FROM Orion_Lappiz_CuentaCont AS c
    WHERE c.IdCopropiedadFK = '${sessionStorage.CopropiedadId
    }'`
  setTimeout(() => {
    debugger
    var data = ajaxQuery(query);
    if (data.length > 0) {
      kendo.jQuery('#GridCi').kendoGrid({
        dataSource: {
          data: data,
          autoSync: true,
          schema: {
            model: {
              fields: {
                NombreCuenta: { type: "string", editable: false },
                NumeroCuenta: { type: "string", editable: false }
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
          { field: "NombreCuenta", title: "Nombre de Cuenta" },
          { field: "NumeroCuenta", title: "Número de Cuenta" }
        ],
        editable: true,
      });

    }
  }, 1000);
}

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