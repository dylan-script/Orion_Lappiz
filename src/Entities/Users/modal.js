setTimeout(() => {
  debugger
  console.clear();
  let appViewId = getAppViewId();
  console.log(appViewId);
  if (appViewId == 'e4596a1d-df2f-4ece-9fb2-bfdf1fc2b7bc') {
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
    $("#btn-test-modal-interna").ready(() => {
      $("#btn-test-modal-interna").click(() => {
        debugger;
        alert('Dió click en alert dentro de la modal');
        var form = '#/grids?viewName=Orion_Lappiz_CopropiedadPH&workspaceId=76dff898-2d10-4a5b-8da6-9720de494395&entityId=65c3da3a-b711-4618-bb94-cf4599077724&dato=Listado%20de%20copropiedades&appViewId=5eb34167-fb51-49b0-bd08-1c996b84f668'
        goLocation(form)
      });
    });
  }
}, 1000);