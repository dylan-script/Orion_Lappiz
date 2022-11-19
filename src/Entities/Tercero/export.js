//Exportar terceros
setTimeout(() => {
  let idVista = getAppViewId();
  let btnExportarTerceros = document.getElementById('exportarTerceros')

  if (idVista == '981be98e-a078-4759-bcba-0c59e3721812') {
    btnExportarTerceros.onclick = (function () { exportarTerceros() });
  }
}, 2000);

function exportarTerceros() {
  let result;
  let Query = `SELECT IdTblTipoTercero, IdTblTipoId, IdTercero, Nombre1, Nombre2, Apellido1, Apellido2, RazonSocial, Direccion1, Direccion2, CodigoPostal, Email, Telefono1, Telefono2 FROM Orion_Lappiz_Tercero`;

  execQuery(Query).then((Success) => {
    result = Success[0];

    if (result === undefined) {
      toastr.error("No hay registros para descargar");
    } else {
      let excelUsuarios = XLSX.utils.book_new(); // Creando Excel
      excelUsuarios.Props = { // Cambiando propiedades
        Title: "Terceros",
        Subject: "Terceros",
        Author: "Orion",
      };

      excelUsuarios.SheetNames.push("Terceros");

      let resultSheet = [
        [ 'Tipo de Tercero',
          'Tipo de identificación',
          'Número de identificación',
          'Primer Nombre', 
          'Segundo Nombre',
          'Primer Apellido',
          'Segundo Apellido',
          'Razón Social',
          'Dirección 1',
          'Dirección 2',
          'Código Postal',
          'Email',
          'Télefono 1',
          'Télefono2']
      ];

      for (let i = 0; i < result.length; i++) {
        resultSheet[i + 1] = [result[i].IdTblTipoTercero, result[i].IdTblTipoId, result[i].IdTercero,
        result[i].Nombre1, result[i].Nombre2, result[i].Apellido1, result[i].Apellido2,
        result[i].RazonSocial, result[i].Direccion1, result[i].Direccion2, result[i].CodigoPostal,
        result[i].Email, result[i].Telefono1, result[i].Telefono2];
      }

      let hoja1 = XLSX.utils.aoa_to_sheet(resultSheet);

      excelUsuarios.Sheets.Terceros = hoja1;

      if (confirm('¿Quiere exportar los terceros a Excel?')) {
        XLSX.writeFile(excelUsuarios, "Terceros.xlsx", { compression: true });
      }
    }
  });
}