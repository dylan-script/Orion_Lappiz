//Descargar plantilla
setTimeout(() => {
  debugger;

  var idVista = getAppViewId();

  if (idVista == '36632d50-b983-46cb-a6dc-c83f017db493') {
    document.getElementById("Descargar").onclick = (function () { descargarPlantilla() })


    //Descargar plantilla()
    function descargarPlantilla() {
      debugger;

      let excelUsuarios = XLSX.utils.book_new(); // Creando Excel
      excelUsuarios.Props = { // Cambiando propiedades
        Title: "Cuentas Contables",
        Subject: "Cuentas Contables",
        Author: "Orion",
      };

      excelUsuarios.SheetNames.push("Cuentas Contables");

      let resultSheet = [
        ['Nombre de la Cuenta Contable', 'Id de la Cuenta Contable']
      ]

      //Llenar hojas


      /*XLSX.utils.aoa_to_sheettoma una matriz de matrices de valores JS y devuelve una hoja*/
      let hoja1 = XLSX.utils.aoa_to_sheet(resultSheet);


      excelUsuarios.Sheets["Cuentas Contables"] = hoja1;



      if (confirm('¿Quiere descargar la plantilla de excel?')) {
        /*nombre del archivo de excell*/
        XLSX.writeFile(excelUsuarios, "Cuentas.xlsx", { compression: true })
        /* saveAs(new Blob([conversion(archivo)], {
          type: "application/octet-stream"
        }), 'Exportaciones.xlsx'); */
      }
    }
  }
}, 2000);