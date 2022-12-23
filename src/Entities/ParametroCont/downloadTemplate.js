//Descargar plantilla
setTimeout(() => {
  debugger;

  var idVista = getAppViewId();

  if (idVista == 'd4545343-f4ae-40ba-be6d-d7eb88926ff2') {
    document.getElementById("Descargar").onclick = (function () { descargarPlantilla() })


    //Descargar plantilla()
    function descargarPlantilla() {
      debugger;

      let excelUsuarios = XLSX.utils.book_new(); // Creando Excel
      excelUsuarios.Props = { // Cambiando propiedades
        Title: "Parámetros Contables",
        Subject: "Parámetros Contables",
        Author: "Orion",
      };

      excelUsuarios.SheetNames.push("Parámetros Contables");

      let resultSheet = [
        ['Código de la empresa en ContaPyme',
         'Cuenta anticipos recibidos',
         'Cuenta caja',
         'Cuenta consignaciones por identificar',
         'Cuenta descuentos por pronto pago',
         'Cuenta impuestos asumidos',
         'Cuenta intereses de mora por cobrar',
         'Cuenta retención del IVA por descontar',
         'Cuenta retención en la fuente por descontar',
         'Cuenta retención industria y comercio', 
         'Nombre aplicación contable para interfaz',//LISTA
         'Tipo del tercero para la cuenta caja',//lISTA
         'Tipo interfaz'],//lISTA
      ]

      //Llenar hojas


      /*XLSX.utils.aoa_to_sheettoma una matriz de matrices de valores JS y devuelve una hoja*/
      let hoja1 = XLSX.utils.aoa_to_sheet(resultSheet);


      excelUsuarios.Sheets["Parámetros Contables"] = hoja1;



      if (confirm('¿Quiere descargar la plantilla de excel?')) {
        /*nombre del archivo de excell*/
        XLSX.writeFile(excelUsuarios, "Parámetros Contables.xlsx", { compression: true })
        /* saveAs(new Blob([conversion(archivo)], {
          type: "application/octet-stream"
        }), 'Exportaciones.xlsx'); */
      }
    }
  }
}, 500);