setTimeout(() => {
  console.clear();
  debugger;
  if (e.dataItem && e.dataItem.RolUsuario != null && e.dataItem.RolUsuario != undefined) {
      sessionStorage.OldRol = e.dataItem.RolUsuario;
  } else {
      delete sessionStorage.OldRol;
  }
  console.log(e.dataItem)
  var url = `${backandGlobal.api2}/${sessionStorage.configAppName}.api/api/functions/getRoles`;
  var auth = localStorage.Authorization.replace('bearer', '').trim();
  var objGetRoles = {
      workspaceId: sessionStorage.workspaceId,
      tokenAuth: auth,
      parameters: {
          userId: sessionStorage.userId,
          aType: "lappizFunction",
          pType: "Execute",
          lappizFunctionId: "95ed82b1-b650-4352-a4e4-8a968c9be795",
          environment: backandGlobal.environment
      }
  };

  $.ajax({
      async: false,
      url: url,
      type: 'POST',
      data: JSON.stringify(objGetRoles),
      beforeSend: function(xhr) {
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.setRequestHeader('Authorization', 'Bearer ' + auth)
      },
      success: function(response) {
          
          sessionStorage.rolesApp = JSON.stringify(response);
          if (!e.isNew) {
          $('#9fa14e8e-e4bd-4246-81fe-726485449c0d').kendoComboBox({
              dataSource: response,
              dataTextField: "Nombre",
              dataValueField: "Nombre",
              value: e.dataItem.RolUsuario ? e.dataItem.RolUsuario:null,
              change: function() {
                  sessionStorage.NewRol = this.dataItem().id
                  sessionStorage.ChangeRol = 'true'
              }
          });
      }else{
          $('#9fa14e8e-e4bd-4246-81fe-726485449c0d').kendoComboBox({
              dataSource: response,
              dataTextField: "Nombre",
              dataValueField: "Nombre",
              
              change: function() {
                  sessionStorage.NewRol = this.dataItem().id
                  sessionStorage.ChangeRol = 'true'
              }
          });
      }
      },
      error: function(error) {
          toastr.options = {
              timeOut: 0,
              extendedTimeOut: 0,
              closeButton: true
          };
          toastr.warning('No se pudo acceder a los roles');
      }
  });

}, 500);