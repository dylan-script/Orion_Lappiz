setTimeout(() => {
  $("#actualizar").click(function () {
    debugger
    let nombreDocumento = getFieldValue('c61d943c-65bf-435f-98e3-70821756d073');
    let tipoDocumento = getFieldValue('fef77307-9a48-4580-bbde-a2df3e71feec');
    let numeroInicial = getFieldValue('cd6f47f0-3969-4379-a63a-41a0df961dd6');
    var StringQuery = `UPDATE Orion_Lappiz_DocumentoContable SET NumeracionInicialDoc = '${numeroInicial}', TipoDocumentoCont = '${tipoDocumento}' WHERE IdCopropiedadFK = '${sessionStorage.CopropiedadId}' AND NombreDocumentoCont = '${nombreDocumento}'`;
    execQuery(StringQuery).then(function (response) {
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
    }, function (error) {
      console.log(error);
    });
    reload();
    var urlForm = '#/forms?viewName=Orion_Lappiz_DocumentoContable&entityId=5503b4f6-2daa-42d1-a67e-780f9fa8b5ff&viewMenu=true&appViewId=6c78002d-291f-4072-afa4-dc884fbcf26f';
    goLocation(urlForm);
  });
}, 1000);