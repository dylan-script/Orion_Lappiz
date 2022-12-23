//Descargar plantilla
setTimeout(() => {
  debugger;

  var idVista = getAppViewId();

  if (idVista == 'd4545343-f4ae-40ba-be6d-d7eb88926ff2') {
    document.getElementById("DescargarExport").onclick = (function () { descargarPlantilla() })

    //$("#DescargarExport").onclick(function () { descargarPlantilla() })

    //Descargar plantilla()
    function descargarPlantilla() {
      debugger;

      let result

      let Query = `SELECT CodigoEmpresaCPyme,
      CtaAnticiposRecibidos,
      CtaCaja,
      CtaIngresosPorIdentificar,
      CtaDescuentoProntoPago,
      CtaImpuestosAsumidos,
      CtaPorCobrarMora,
      CtaReteIva,
      CtaRetefuente,
      CtaReteIca,
      IdAppContable,
      TipoTerceroCaja,
      TipoInterfaz
      FROM Orion_Lappiz_ParametroCont
      WHERE IdCopropiedadFK = '${sessionStorage.CopropiedadId
        }'`;

      execQuery(Query).then((Success) => {
        result = Success[0];


        if (result == undefined) {
          toastr.error("No hay registros para descargar")
        } else {

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
          for (let i = 0; i < result.length; i++) {
            resultSheet[i + 1] = [result[i].CodigoEmpresaCPyme,
            result[i].CtaAnticiposRecibidos,
            result[i].CtaCaja,
            result[i].CtaIngresosPorIdentificar,
            result[i].CtaDescuentoProntoPago,
            result[i].CtaImpuestosAsumidos,
            result[i].CtaPorCobrarMora,
            result[i].CtaReteIva,
            result[i].CtaRetefuente,
            result[i].CtaReteIca,
            result[i].IdAppContable,
            result[i].TipoTerceroCaja,
            result[i].TipoInterfaz]
          }

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
      })
    }

  }
}, 1000);