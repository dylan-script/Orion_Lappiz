//Id del formulario 
let appViewId = getAppViewId();
console.log(appViewId);

if (appViewId == '6c78002d-291f-4072-afa4-dc884fbcf26f') {

  $("#btn-test-modal-interna").css("display", "block")
  var query = `SELECT dc.NombreDocumentoCont [NombreDocumento], 
  dc.NumeracionInicialDoc [NumeroInicial],
   dc.TipoDocumentoCont [TipoDocumento] FROM Orion_Lappiz_DocumentoContable AS dc WHERE dc.IdCopropiedadFK = '${sessionStorage.CopropiedadId}'`;

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
                NombreDocumento: { type: "string", editable: false },
                NumeroInicial: { type: "string", editable: false },
                TipoDocumento: { type: "string", editable: false }
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
          { field: "NombreDocumento", title: "Nombre del Documento" },
          { field: "NumeroInicial", title: "Número Inicial" },
          { field: "TipoDocumento", title: "Tipo de Documento" }
        ],
        editable: true,
      });

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

  }, 3000);

}