//Descargar plantilla
setTimeout(() => {
  debugger;

  var idVista = getAppViewId();

  if (idVista == '6c78002d-291f-4072-afa4-dc884fbcf26f') {
    document.getElementById("Descargar").onclick = (function () { descargarPlantilla() })


    //Descargar plantilla()
    function descargarPlantilla() {
      debugger;

      let excelUsuarios = XLSX.utils.book_new(); // Creando Excel
      excelUsuarios.Props = { // Cambiando propiedades
        Title: "Documentos Contables",
        Subject: "Documentos Contables",
        Author: "Orion",
      };

      excelUsuarios.SheetNames.push("Documentos Contables");

      let resultSheet = [
        ['Nombre del documento contable',
         'Tipo documento en contabilidad',
        'Número inicial del documento']
      ]

      //Llenar hojas


      /*XLSX.utils.aoa_to_sheettoma una matriz de matrices de valores JS y devuelve una hoja*/
      let hoja1 = XLSX.utils.aoa_to_sheet(resultSheet);


      excelUsuarios.Sheets["Documentos Contables"] = hoja1;



      if (confirm('¿Quiere descargar la plantilla de excel?')) {
        /*nombre del archivo de excell*/
        XLSX.writeFile(excelUsuarios, "Documentos.xlsx", { compression: true })
        /* saveAs(new Blob([conversion(archivo)], {
          type: "application/octet-stream"
        }), 'Exportaciones.xlsx'); */
      }
    }
  }
}, 2000);