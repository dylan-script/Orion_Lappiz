var axios = require('axios');
//configuración del servicio que quieres consumir
var config = {
  method: 'get',
  url: 'https://registroventas.pactia.com/service/api/AdministracionMaestros/obteneredificiosconmarcas',
  headers: { }
};

axios(config)
.then(function (response) {
  //para retornar lo que te responda el servicio que acabas de consumir

return res.status(200).json(response.data)
})
.catch(function (error) {
  return error res.status(404).json(error)
});