setTimeout(() => {
  console.clear()
  var StringQuery = `UPDATE Orion_Lappiz_CuentaCont SET IdCopropiedadFK = '${sessionStorage.CopropiedadId}' WHERE Id = '${e.dataItem.Id}'`;
  execQuery(StringQuery).then(function (response) {
    var dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
  }, function (error) {
    console.log(error);
  });
  console.log(e.dataItem)
}, 1000);