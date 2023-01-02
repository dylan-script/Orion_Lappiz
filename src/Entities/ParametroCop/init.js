  setTimeout(() => {
    var StringQuery = `select Id from Orion_Lappiz_ParametroCop WHERE CopropiedadFK ='${sessionStorage.CopropiedadId}'`;
    execQuery(StringQuery).then(function (response) {
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
      sessionStorage.ParamId = dataResult[0].Id;
      console.log(sessionStorage.ParamId);
    }, function (error) {
      console.log(error);
    });
  }, 1000);