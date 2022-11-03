//Descargar plantilla
setTimeout(() => {
  debugger;

  var idVista = getAppViewId();

  if (idVista == 'b3c31ae0-cf42-4fa3-aa73-6c56f1f52dc3') {
    document.getElementById("DescargarExport").onclick = (function () { descargarPlantilla() })

    //$("#DescargarExport").onclick(function () { descargarPlantilla() })

    //Descargar plantilla()
    function descargarPlantilla() {
      debugger;

      let result

      let Query = `SELECT CENombreCuentaCont, IdCuentaCont FROM Orion_Lappiz_CuentaCont
      WHERE IdCopropiedadFK = '${sessionStorage.CopropiedadId
        }'`;

      execQuery(Query).then((Success) => {
        result = Success[0];


        if (result == undefined) {
          toastr.error("No hay registros para descargar")
        } else {

          let excelUsuarios = XLSX.utils.book_new(); // Creando Excel
          excelUsuarios.Props = { // Cambiando propiedades
            Title: "Cuentas Contables",
            Subject: "Cuentas Contables",
            Author: "Orion",
          };

          excelUsuarios.SheetNames.push("result");

          let resultSheet = [
            ['CENombreCuentaCont', 'IdCuentaCont']
          ]

          //Llenar hojas

          for (let i = 0; i < result.length; i++) {
            resultSheet[i + 1] = [result[i].CENombreCuentaCont, result[i].IdCuentaCont]
          }

          /*XLSX.utils.aoa_to_sheettoma una matriz de matrices de valores JS y devuelve una hoja*/
          let hoja1 = XLSX.utils.aoa_to_sheet(resultSheet);


          excelUsuarios.Sheets["result"] = hoja1;

          //exportando

          /*Las funciones exportadas write y writeFile aceptan un argumento de opciones:*/
          let archivo = XLSX.write(excelUsuarios, {
            bookType: 'xlsx',
            type: 'binary'
          });

          function conversion(s) {

            let buf = new ArrayBuffer(s.length);
            let view = new Uint8Array(buf);
            for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
          }

          if (confirm('¿Quiere descargar la plantilla de excel?')) {
            /*nombre del archivo de excell*/

            saveAs(new Blob([conversion(archivo)], {
              type: "application/octet-stream"
            }), 'Exportaciones.xlsx');
          }
        }






      })
    }

  }
}, 2000);