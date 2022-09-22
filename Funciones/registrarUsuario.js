setTimeout(() => {

  function getToken(){
      return new Promise((resolve, reject)=>{
          var settings = {
              "url": "https://designer.lappiz.io/Api/token",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              "data": {
                "grant_type": "password",
                "username": "admin@optimusoft.com",
                "password": "Optimus.2022"
              }
            };
            
            $.ajax(settings).done(function (response) {
              resolve(response);
            }).fail(function(error){
                reject(error);
            });
      });
  }

  function createUser(token, tokenType, user){
      return new Promise((resolve, reject)=>{
          var urlLappizUser = `${backandGlobal.api2}/Orion_Lappiz.api/api/lappiz/Lappiz_Users`;
          var urlReplicate = `${backandGlobal.url}/api/Users/replicate?appCode=Orion_Lappiz&languageApp=es`;
          var urlGetStatus = `${backandGlobal.url}/api/Users/getStatus?email=${user.email}`;
          
          var settings = {
              "url": "https://tx.lappiz.io/Orion_Lappiz.api/api/functions/replicateUser",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": `${tokenType} ${token}`,
                "Content-Type": "application/json"
              },
              "data": JSON.stringify({
                "urlLappizUser": urlLappizUser,
                "urlApiReplicate": urlReplicate,
                "urlGetStatus": urlGetStatus,
                "token": token,
                "user": {
                  "name": user.name,
                  "email": user.email,
                  "password": user.password
                },
                "parameters": {
                  "userId": "28243b3b-9adf-4726-a280-8ccdf5d8dff0",
                  "lappizFunctionId": "fb3c77cd-6f23-4531-b89e-162ecc8df2ca",
                  "aType": "lappizFunction",
                  "pType": "Execute",
                  "environment": backandGlobal.environment
                }
              }),
            };
            
            $.ajax(settings).done(function (response) {
              resolve(response);
            }).fail(function(error){
                reject(error);
            });
      });
  }

  // function sendMail(){
  //     return new Promise((resolve, reject)=>{

  //     });
  // }

  function validate(name, email, password, terminos){
      let confirm = true;
      if(name == undefined || name == null || name == ""){
          $("#msmErrorName")[0].textContent = "Debe diligenciar el campo";
          confirm = false;
      }else{
          $("#msmErrorName")[0].textContent = "";
      }
      if(email == undefined || email == null || email == ""){
          $("#msmErrorEmail")[0].textContent = "Debe diligenciar el campo";
          confirm = false;
      }else{
          $("#msmErrorEmail")[0].textContent = "";
      }
      if(password == undefined || password == null || password == ""){
          confirm = false;
          $("#msmErrorPass")[0].textContent = "Debe diligenciar el campo";
      }else{
          $("#msmErrorPass")[0].textContent = "";
      }
      if(terminos == undefined || terminos == null || terminos == "" || terminos == false){
          confirm = false;
          $("#msmErrorTerminos")[0].textContent = "Debe diligenciar el campo";
      }else{
          $("#msmErrorTerminos")[0].textContent = "";
      }
      return confirm;
  }

  $("#btnSave").click(function(){
      let name = $("#txtNombre").val();
      let email = $("#txtEmail").val();
      let password = $("#txtPass").val();
      let terminos = $('#ckTerminos')[0].checked;

      if(validate(name, email, password, terminos)){
          var user = {
              name: name,
              email: email,
              password: password
          };

          getToken().then(function(dataAuth){
              let token = dataAuth.access_token;
              let type = dataAuth.token_type;
              
              createUser(token, type, user).then(function(response){
                  var data = (response.data != undefined || response.data != null)?response.data.Email:response;
                  if(data.Email == email){
                      toastr.info("El correo que intenta usar, ya se encuentra en uso");
                  }else{
                      if(data.transaction == "1"){
                          toastr.success("El usuario ha sido creado correctamente. Verifica tu corre para activar tu cuenta");
                      }else{
                          console.log(data);
                      }
                  }
                  toastr.info("Llegamos hasta el final");
              }, function(error){
                  console.log(error);
                  toastr.warning("Hubo un inconveniente al crear el usuario");
              });

          },function(error){
              toastr.warning("Hubo un inconveniente al crear el usuario");
          });
      }else{
          toastr.warning("Debe diligenciar todos los campos");
      }

  }); 
}, 1000);