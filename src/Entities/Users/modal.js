setTimeout(() => {
  debugger
  console.clear();
  var url = location.href;
  var urlSplit = url.split('appViewId=')
  var idVista = urlSplit[1];
  if (idVista == 'e4596a1d-df2f-4ece-9fb2-bfdf1fc2b7bc' && sessionStorage.rolesId != '7ef5a55b-a198-4d5b-81a2-3b1303863523') {
    debugger;

    var modalHeader1 = `<h4 class="modal-title">Hola modal 1 de Lappiz</h4>`;
    var modalBody1 = `
            <div id="GridCi"></div>
            <br>
            <button id="btn-test-modal-interna" type="button" class="btn btn-danger">Ejecutar alerta</button>
            
            
            `;
    var modalFooter1 = `<h3>Modal footer</h3>`;

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
      });
    });
  }
}, 1000);