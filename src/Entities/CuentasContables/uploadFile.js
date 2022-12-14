/* Cargar plantilla2 */
setTimeout(() => {
  debugger;

  var idVista = getAppViewId();

  if (idVista == '36632d50-b983-46cb-a6dc-c83f017db493') {
    if (e.isNew) {
      debugger;
      $("#CargarExportacion").change(function (oEvent) {
        debugger;
        /* beginAuto = true; */
        var oFile = oEvent.target.files[0];
        var sFilename = oFile.name;
        //Validar que sea excel
        var separador = sFilename.split(".");
        if (separador[separador.length - 1] != "xlsx") {
          toastr.warning("El archivo debe ser tipo excel");
          $("#uploadloadP").val(null);
        } else {
          var reader = new FileReader();
          reader.onload = function (e) {
            //debugger;
            var data = e.target.result;
            // /puede manejar HTML representado como cadenas/;
            var workbook = XLSX.read(data, {
              type: "binary",
              cellDates: "True",
            });
            var sheetName = workbook.SheetNames[0];
            /*funciones aceptan una hoja de trabajo y un objeto de opciones opcionales.
                   Las *_to_sheetfunciones aceptan un objeto de datos y un objeto de opciones opcionales.   */

            let Data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
            var Query = ``;
            var nuevosRegistros = 0;
            var registrosActualizados = 0;
            debugger;
            console.clear();
            for (let i = 0; i < Data.length; i++) {
              var idCuenta = Data[i]["Id de la Cuenta Contable"];

              var consulta = ajaxQuery(
                `SELECT * FROM Orion_Lappiz_CuentaCont WHERE IdCuentaCont ='${idCuenta}' AND IdCopropiedadFK = '${sessionStorage.CopropiedadId}'`
              );
              if (consulta.length == 0) {
                var IdCuentaCont = Data[i]["Id de la Cuenta Contable"];
                var CENombreCuentaCont = Data[i]["Nombre de la Cuenta Contable"];

                Query += ` INSERT INTO Orion_Lappiz_CuentaCont (CENombreCuentaCont, IdCuentaCont, IdCopropiedadFK)
                                    VALUES ('${CENombreCuentaCont}','${IdCuentaCont}', '${sessionStorage.CopropiedadId}');`;
                nuevosRegistros++;
              } else {
                var cambios = 0;
                var update = ``;
                var CENombreCuentaCont = Data[i]["Nombre de la Cuenta Contable"];
                if (CENombreCuentaCont != consulta[0].CENombreCuentaCont) {
                  update += `CENombreCuentaCont = '${CENombreCuentaCont}' `;
                  cambios++;
                }


                if (cambios > 0) {
                  Query += ` UPDATE Orion_Lappiz_CuentaCont
                            			SET ${update}
                             			WHERE IdCopropiedadFK = '${sessionStorage.CopropiedadId}' AND IdCuentaCont = '${consulta[0].IdCuentaCont}';`;
                  registrosActualizados++;
                }
              }
            }
            toastr.options = {
              closeButton: true,
              debug: false,
              newestOnTop: false,
              progressBar: false,
              positionClass: "toast-top-right",
              preventDuplicates: false,
              onclick: null,
              showDuration: "300",
              hideDuration: "5000",
              timeOut: "5000",
              extendedTimeOut: "3000",
              showEasing: "swing",
              hideEasing: "linear",
              showMethod: "fadeIn",
              hideMethod: "fadeOut",
            };

            ajaxQuery(Query);
            if (nuevosRegistros > 0 || registrosActualizados > 0) {
              if (nuevosRegistros > 0) {
                toastr.success(
                  "Se importaron " +
                  nuevosRegistros +
                  " registros en Cuentas Contables"
                );
              }
              if (registrosActualizados > 0) {
                toastr.success(
                  "Se actualizaron " +
                  registrosActualizados +
                  " registros en Cuentas Contables"
                );
              }
            } else if (nuevosRegistros == 0 && registrosActualizados == 0) {
              toastr.warning(
                `No se realizaron cambios: los datos no tenian cambios con respecto a la informaci??n previa`
              );
            }

          };
        }
        reader.onerror = function (ex) {
          $("#CargarExportacion").val(null);
          console.log(ex);
        };
        reader.readAsBinaryString(oFile);

        $("#CargarExportacion").val(null);
      });
    }
    function ajaxQuery(Query) {
      var respuesta;
      let newquery = {
        "query": Query,
        "parameters": {
          "aType": "execTx",
          "environment": `${backandGlobal.environment}`
        }
      }
      $.ajax({
        async: false,
        url: `${backandGlobal.api2}/${sessionStorage.workspace}.api/api/lappiz/sp/query`,
        type: 'POST',
        data: JSON.stringify(newquery),
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.setRequestHeader('Authorization', localStorage.Authorization);
        },
        success: function (Success) {
          respuesta = Success[0];
        },
        error: function (error) { console.log(`Error-->${error}`); }
      });
      return respuesta;
    }
  }
}, 2000);