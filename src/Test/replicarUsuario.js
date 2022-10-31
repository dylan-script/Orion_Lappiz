var axios = require('axios');

var urlLappizUser = obj.body.urlLappizUser;
var urlApiReplicate = obj.body.urlApiReplicate;
var urlGetStatus = obj.body.urlGetStatus;
var token = obj.body.token;
var user = obj.body.user;
var environment = obj.body.parameters.environment;

var axios = require('axios');

var config = {
    method: 'get',
    url: urlGetStatus,
};


axios(config)
    .then(function (response) {
        //Validar si el correo ya existe registrado
        if (response.data == null) {
            //Envio a LappizUSer
            var data = JSON.stringify({
                "FullName": user.name,
                "Email": user.email,
                "Contrasena": user.password,
                "Activo": true,
                "tenantId": "null",
                "parameters": {
                    "userId": "28243b3b-9adf-4726-a280-8ccdf5d8dff0",
                    "appViewId": "49de7d30-c4b4-479f-af4e-29b9c0156061",
                    "pType": "Guardar",
                    "aType": "view",
                    "environment": environment
                }
            });

            var config = {
                method: 'post',
                url: urlLappizUser,
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (milleteUser) {
                    //Envio a replicate
                    var userId = milleteUser.data.Id;
                    var data = JSON.stringify({
                        "UserName": user.email,
                        "Email": user.email,
                        "PasswordHash": user.password,
                        "Activo": true,
                        "Id": userId
                    });

                    var config = {
                        method: 'post',
                        url: urlApiReplicate,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        data: data
                    };

                    axios(config)
                        .then(function (response) {
                            //Asignamos rol
                            var data = JSON.stringify([
                                {
                                    "IdRol": "8d0fe8b4-7426-40af-a81a-675e2ee51f87",
                                    "Action": "Save"
                                }
                            ]);

                            var config = {
                                method: 'post',
                                url: 'https://designer.lappiz.io/Api/api/Roles/SaveChanges?idUser='+userId.toUpperCase(),
                                headers: {
                                    'Authorization': 'Bearer '+token,
                                    'Content-Type': 'application/json',
                                },
                                data: data
                            };

                            axios(config)
                                .then(function (response) {
                                    return res.status(200).json({message: "Todo el proceso completo", transaction:"1"})
                                })
                                .catch(function (error) {
                                    //retornar error si ocurre al asignar el rol
                                    return res.status(400).json(error);
                                });

                        })
                        .catch(function (error) {
                            //retornamos el error del replicate
                            res.status(400).json(errir);
                        });

                })
                .catch(function (error) {
                    //capturo el error en Lappiz Users
                    return res.status(400).json(error);
                });
        } else {
            //retornar que el correo ya existe
            return res.status(200).json(response.data);
        }
    })
    .catch(function (error) {
        //retorno error si existe al tratar consular el estado 
        return res.status(400).json(error);
    });

