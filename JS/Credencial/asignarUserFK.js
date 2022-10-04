setTimeout(() => {
  console.clear()
  debugger
  console.log(`ID del Usuario ${sessionStorage.UserFK}`)
  console.log(`ID de la Credencial ${e.dataItem.Id}`)
  let query = `UPDATE Orion_Lappiz_Credenciales SET UsersFK = '${sessionStorage.UserFK}' WHERE Id = '${e.dataItem.Id}'`
  execQuery(query).then(function (response) {
      var dataResult = response[0];
    console.log(dataResult);
  }, function (error) {
    console.log(error);
  });
}, 1000);