setTimeout(() => {
  debugger
  console.log(e.dataItem)
  //CECopropiedadFK
  //https://docs-lappiz.gitbook.io/lappiz/
  //Orion_Lappiz_CredencialCopropiedad
  var StringQuery = `UPDATE Orion_Lappiz_CredencialCopropiedad SET UserFK = '${sessionStorage.UserFK}'   WHERE Id = '${e.dataItem.CECopropiedadFK}'`;
execQuery(StringQuery).then(function(response){
    var dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
},function(error){
    console.log(error);
});
}, 1000);