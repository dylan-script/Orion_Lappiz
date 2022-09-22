if (sessionStorage.ChangeRol == "true") {
  delete sessionStorage.ChangeRol;
  var ObjRolesApp = JSON.parse(sessionStorage.rolesApp);

  function AsingRolId(Rol) {
    var rolId = "";
    ObjRolesApp.forEach((RolObj) => {
      if (RolObj.Nombre == Rol) {
        rolId = RolObj.id;
      }
    });
    return rolId;
  }

  var mensaje = e.isNew
    ? "Usuario creado satisfactoriamente."
    : "Usuario actualizado satisfactoriamente.";
  var dataUser = e.dataItem;

  if (dataUser != undefined) {
    // var rolId = AsingRolId(dataUser.RolUsuario);
    AsignarRol();

    function AsignarRol() {
      var obj = [];
      if (!e.isNew) {
        if (sessionStorage.OldRol) {
          obj.push({
            IdRol: AsingRolId(sessionStorage.OldRol),
            Action: "Delete",
          });
        }
      }
      obj.push({ IdRol: sessionStorage.NewRol, Action: "Save" });

      $.ajax({
        url: backandGlobal.url + "/api/Roles/SaveChanges?idUser=" + dataUser.Id,
        method: "POST",
        data: JSON.stringify(obj),
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Content-Type", "application/json");
        },
        success: function (response) {
          //Guardó satisfactoriamente la asignación del rol
          toastr.info(mensaje);
          delete sessionStorage.OldRol;
          delete sessionStorage.NewRol;
          delete sessionStorage.rolesApp;
        },
        error: function (error) {
          toastr.error(
            "Se presento un inconveniente en el registro. Intentelo nuevamente y si el error persiste comuniquese con el administrador."
          );
          delete sessionStorage.OldRol;
          delete sessionStorage.NewRol;
          delete sessionStorage.rolesApp;
        },
      });
    }
  }
}