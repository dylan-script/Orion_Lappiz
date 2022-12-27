/**
 * 1:Factura de venta,2:Recibo de caja,3:Nota aplicación anticipos,4:Nota intereses de mora,5:Nota crédito,6:Nota reintegro anticipos,7:Nota reversión crédito,8:Nota ajuste cuota administración,9:Comprobante interfaz contable
 */
setTimeout(function () {
  debugger
  const parametroQuery = `INSERT INTO Orion_Lappiz_ParametroCop (CopropiedadFK) VALUES ('${e.dataItem.Id}')`;
  execQuery(parametroQuery).then(function (response) {
    var dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
    toastr.success('Parámetros Listos para configurar!');
  }, function (error) {
    console.log(error);
    toastr.error(`Ocurrió el soguiente error con los parámetros: ${error}`);
  });
  debugger
  const documentosQuery = `INSERT INTO Orion_Lappiz_DocumentoContable (IdDoc, NumeracionInicialDoc , NombreDocumentoCont, TipoDocumentoCont, PrefijoDocumentoCont, IdCopropiedadFK) VALUES
  ('1', 1, '1:Factura de venta', '', '', '${e.dataItem.Id}'),
  ('2', 2, '2:Recibo de caja', '', '', '${e.dataItem.Id}'),
  ('3', 3, '3:Nota aplicación anticipos', '', '', '${e.dataItem.Id}'),
  ('4', 4, '4:Nota intereses de mora', '', '', '${e.dataItem.Id}'),
  ('5', 5, '5:Nota crédito', '', '', '${e.dataItem.Id}'),
  ('6', 6, '6:Nota reintegro anticipos', '', '', '${e.dataItem.Id}'),
  ('7', 7, '7:Nota reversión crédito', '', '', '${e.dataItem.Id}'),
  ('8', 8, '8:Nota ajuste cuota administración', '', '', '${e.dataItem.Id}'),
  ('9', 9, '9:Comprobante interfaz contable', '', '', '${e.dataItem.Id}')`;
  execQuery(documentosQuery).then(function (response) {
    var dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
    toastr.success('Documentos Contables Listos para configurar!');
  }, function (error) {
    console.log(error);
    toastr.error(`Ocurrió el soguiente error con los documentos contables: ${error}`);
  });

}, 1000);