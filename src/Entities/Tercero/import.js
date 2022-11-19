/* Cargar plantilla2 */
setTimeout(() => {
  debugger;

  var idVista = getAppViewId();

  if (idVista == '981be98e-a078-4759-bcba-0c59e3721812') {
    debugger;
    if (e.isNew) {
      $('#importarTerceros').change(function (oEvent) {
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
            debugger;
            var data = e.target.result;
            // /puede manejar HTML representado como cadenas/;
            var workbook = XLSX.read(data, {
              type: "binary",
              cellDates: "True",
            });
            var sheetName = workbook.SheetNames[0];
            /*funciones aceptan una hoja de trabajo y un objeto de opciones opcionales.
                   Las *_to_sheetfunciones aceptan un objeto de datos y un objeto de opciones opcionales.   */

            debugger;

            let Data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
            var Query = ``;
            var nuevosRegistros = 0;
            var registrosActualizados = 0;
            debugger;
            console.clear();
            for (let i = 0; i < Data.length; i++) {
              var idTercero = Data[i]["Número de identificación"];

              var consulta = ajaxQuery(
                `SELECT * FROM Orion_Lappiz_Tercero WHERE IdTercero ='${idTercero}'`
              );
              var IdTblTipoTercero = Data[i]["Tipo de Tercero"];
              var IdTblTipoId = Data[i]["Tipo de identificación"];
              var Nombre1 = Data[i]["Primer Nombre"];
              var Nombre2 = Data[i]["Segundo Nombre"];
              var Apellido1 = Data[i]["Primer Apellido"];
              var Apellido2 = Data[i]["Segundo Apellido"];
              var RazonSocial = Data[i]["Razón Social"];
              var Direccion1 = Data[i]["Dirección 1"];
              var Direccion2 = Data[i]["Dirección 2"];
              var CodigoPostal = Data[i]["Código Postal"];
              var Email = Data[i]["Email"];
              var Telefono1 = Data[i]["Télefono 1"];
              var Telefono2 = Data[i]["Télefono2"];
              debugger
              if (consulta.length == 0) {

                Query += ` INSERT INTO Orion_Lappiz_Tercero (IdTblTipoTercero, IdTblTipoId, Nombre1, Nombre2, Apellido1, Apellido2, RazonSocial, Direccion1, Direccion2, CodigoPostal, Email, Telefono1, Telefono2)
                                    VALUES ('${IdTblTipoTercero}',
                                            '${IdTblTipoId}',
                                            '${Nombre1}',
                                            '${Nombre2}',
                                            '${Apellido1}',
                                            '${Apellido2}',
                                            '${RazonSocial}',
                                            '${Direccion1}',
                                            '${Direccion2}',
                                            '${CodigoPostal}',
                                            '${Email}',
                                            '${Telefono1}',
                                            '${Telefono2}');`;
                nuevosRegistros++;
              } else {
                var cambios = 0;
                var update = ``;
                if (IdTblTipoTercero != consulta[0].IdTblTipoTercero) {
                  update += ` IdTblTipoTercero = '${CENombreCuentaCont}', `;
                  cambios++;
                }

                if (IdTblTipoId != consulta[0].IdTblTipoId) {
                  update += ` IdTblTipoId = '${IdTblTipoId}', `;
                  cambios++;
                }

                if (Nombre1 != consulta[0].Nombre1) {
                  update += ` Nombre1 = '${Nombre1}', `;
                  cambios++;
                }

                if (Nombre2 != consulta[0].Nombre2) {
                  update += ` Nombre2 = '${Nombre2}', `;
                  cambios++;
                }

                if (Apellido1 != consulta[0].Apellido1) {
                  update += ` Apellido1 = '${Apellido1}', `;
                  cambios++;
                }

                if (Apellido2 != consulta[0].Apellido2) {
                  update += ` Apellido2 = '${Apellido2}', `;
                  cambios++;
                }

                if (RazonSocial != consulta[0].RazonSocial) {
                  update += ` RazonSocial = '${RazonSocial}', `;
                  cambios++;
                }

                if (Direccion1 != consulta[0].Direccion1) {
                  update += ` Direccion1 = '${Direccion1}', `;
                  cambios++;
                }

                if (Direccion2 != consulta[0].Direccion2) {
                  update += ` Direccion1 = '${Direccion1}', `;
                  cambios++;
                }

                if (CodigoPostal != consulta[0].CodigoPostal) {
                  update += ` CodigoPostal = '${CodigoPostal}', `;
                  cambios++;
                }

                if (Email != consulta[0].Email) {
                  update += ` Email = '${Email}', `;
                  cambios++;
                }

                if (Telefono1 != consulta[0].Telefono1) {
                  update += ` Telefono1 = '${Telefono1}', `;
                  cambios++;
                }

                if (Telefono2 != consulta[0].Telefono2) {
                  update += ` Telefono2 = '${Telefono2}',`;
                  cambios++;
                }
                /**
                 * El siguiente procedimiento tiene como fin reacomodar el query ´update´ de SQL para que no se genere ningún error al ejecutar la consulta.
                 */
                debugger
                let text = update.split(',');
                let newUpdate = '';
                let index;
                for (let j = 0; j < cambios; j++) {
                  index = j + 1;
                  if (index == cambios) {
                    console.log('Punto final')
                    newUpdate += `${text[j]}`
                  } else {
                    newUpdate += `${text[j]},`
                  }
                }
                debugger
                if (cambios > 0) {
                  Query += ` UPDATE Orion_Lappiz_Tercero
                            			SET ${newUpdate}
                             			WHERE IdTercero = '${idTercero}';`;
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
                `No se realizaron cambios: los datos no tenian cambios con respecto a la información previa`
              );
            }

          };
        }
        reader.onerror = function (ex) {
          $('#importarTerceros').val(null);
          console.log(ex);
        };
        reader.readAsBinaryString(oFile);

        $('#importarTerceros').val(null);
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