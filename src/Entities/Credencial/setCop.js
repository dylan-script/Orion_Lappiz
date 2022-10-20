setTimeout(() => {
  console.clear()
  debugger
  console.log(sessionStorage.CantidadRegistros);
  sessionStorage.CantidadRegistros = e.dataItem.Orion_Lappiz_CredencialCopropiedad.length;
  console.log(e.dataItem.Orion_Lappiz_CredencialCopropiedad[0]);
  console.log(e.dataItem.Orion_Lappiz_CredencialCopropiedad[0].Id);
  console.log(`ID del Usuario ${sessionStorage.UserFK}`);
  console.log(`ID de la Credencial ${e.dataItem.Id}`);
  setUserFK();
  let query1 = `UPDATE Orion_Lappiz_Credenciales SET UsersFK = '${sessionStorage.UserFK}' WHERE Id = '${e.dataItem.Id}'`
  execQuery(query1).then(function (response) {
    var dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
  }, function (error) {
    console.log(error);
  });
}, 1000);

function setUserFK() {
  debugger
  let limit = parseInt(sessionStorage.CantidadRegistros);
  for (let i = 0; i < limit; i++) {
    let id = e.dataItem.Orion_Lappiz_CredencialCopropiedad[i].Id;
    let query2 = `UPDATE Orion_Lappiz_CredencialCopropiedad SET UserFK = '${sessionStorage.UserFK}' WHERE Id = '${id}'`
    execQuery(query2).then(function (response) {
      var dataResult = response[0];
      console.log(dataResult);
    }, function (error) {
      console.log(error);
    });
  }
}