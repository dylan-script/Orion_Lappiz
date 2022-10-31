function cambiarCopropiedad() {
  setTimeout(() => {
    debugger
    console.clear();
    let appViewId = getAppViewId();
    console.log(appViewId);
    debugger;

    var modalHeader1 = `<h4 class="modal-title">Hola modal 1 de Lappiz</h4>`;
    var modalBody1 = `
          <div id="GridCi"></div>
          <br>
          
          `;
    var modalFooter1 = `<button id="btn-test-modal-interna" type="button" class="btn btn-danger">
  Crear Copropiedad
</button>"`;

    var configModal = {
      htmlTemplate: true,
      headerTemplate: modalHeader1,
      bodyTemplate: modalBody1,
      footerTemplate: modalFooter1,
      showBtnsFooter: true,
      size: "xl",
      scrollable: true,
      centered: false,
      keyboard: false,
      dataItem: e.dataItem,
      viewName: "Dev_Lappiz_Test",
      entityId: "6409099a-d22e-47c3-a3b6-5d5fdbbf7480",
      parent: "",
      parentRules: "",
    };

    var doneModal = () => {
      debugger;
      console.log("Dió click en done");
    };

    var cancelModal = () => {
      debugger;
      console.log("Dió click en cancel");
    };


    openCustomModal(configModal, doneModal, cancelModal);
    getCop();
    $("#btn-test-modal-interna").ready(() => {
      $("#btn-test-modal-interna").click(() => {
        debugger;
        alert('Dió click en alert dentro de la modal');
        var form = '#/grids?viewName=Orion_Lappiz_CopropiedadPH&workspaceId=76dff898-2d10-4a5b-8da6-9720de494395&entityId=65c3da3a-b711-4618-bb94-cf4599077724&dato=Listado%20de%20copropiedades&appViewId=5eb34167-fb51-49b0-bd08-1c996b84f668'
        goLocation(form)
      });
    });
    function getCop() {

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
          console.clear();
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
          $("span.link-title:contains('Copropiedad')").text(sessionStorage.CopropiedadName)
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
  }, 1000);
}