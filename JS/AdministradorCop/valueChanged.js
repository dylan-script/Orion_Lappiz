setTimeout(() => {
  //debugger
  let campoTipoTercero = '5f168ea1-7f6e-48d7-a95c-25fca4b369cc';
  let TipoTercero = getFieldValue(campoTipoTercero);
  console.log(TipoTercero);
  sessionStorage.NombreTercero = '94467708-0b16-44d5-a9ae-f3013e002889';
  let Tercero = {
    name1 : "",
    name2 : "",
    lastName1 : "",
    lastName2 : "",
  }
  sessionStorage.Tercero = JSON.stringify(Tercero);
}, 1000);

//Segundo Nombre: 1b741581-071d-4c98-94d3-97656cc7778e
//Primer Nombre: ff6e2a42-39aa-4e96-8357-2281d14c9e05
//Nombre del Administrador: 94467708-0b16-44d5-a9ae-f3013e002889
//Razon Social : e3391d95-0da8-499d-bc63-ac3c4fd2827b
//Primer Apellido: 5c405dc1-4082-4e07-af82-43970f12393a
//Segundo Apellido: f2d36d73-cf69-40b7-920c-a6c380d51ac1
//Tipo de Tercero: 5f168ea1-7f6e-48d7-a95c-25fca4b369cc 
//Persona natural, Persona jurídica


//Primer Nombre
setTimeout(() => {
  debugger
  let campoPrimerN = 'ff6e2a42-39aa-4e96-8357-2281d14c9e05';
  let objetoJSON = JSON.parse(sessionStorage.Tercero); 
  objetoJSON.name1 = getFieldValue(campoPrimerN);
  let name = `${objetoJSON.name1} ${objetoJSON.name2} ${objetoJSON.lastName1} ${objetoJSON.lastName2}`;
  setFieldValue(sessionStorage.NombreTercero, name);
  console.log(name);
  sessionStorage.Tercero = JSON.stringify(objetoJSON);
}, 1000);

//Segundo Nombre
setTimeout(() => {
  debugger
  let campoSegundoN = '1b741581-071d-4c98-94d3-97656cc7778e';
  let objetoJSON = JSON.parse(sessionStorage.Tercero); 
  objetoJSON.name2 = getFieldValue(campoSegundoN);
  let name = `${objetoJSON.name1} ${objetoJSON.name2} ${objetoJSON.lastName1} ${objetoJSON.lastName2}`;
  setFieldValue(sessionStorage.NombreTercero, name);
  console.log(name);
  sessionStorage.Tercero = JSON.stringify(objetoJSON);
}, 1000);

//Primer Apellido
setTimeout(() => {
  debugger
  let campoPrimerA = '5c405dc1-4082-4e07-af82-43970f12393a';
  let objetoJSON = JSON.parse(sessionStorage.Tercero); 
  objetoJSON.lastName1 = getFieldValue(campoPrimerA);
  let name = `${objetoJSON.name1} ${objetoJSON.name2} ${objetoJSON.lastName1} ${objetoJSON.lastName2}`;
  setFieldValue(sessionStorage.NombreTercero, name);
  console.log(name);
  sessionStorage.Tercero = JSON.stringify(objetoJSON);
}, 1000);

//Segundo Apellido
setTimeout(() => {
  debugger
  let campoSegundoA = 'f2d36d73-cf69-40b7-920c-a6c380d51ac1';
  let objetoJSON = JSON.parse(sessionStorage.Tercero); 
  objetoJSON.lastName2 = getFieldValue(campoSegundoA);
  let name = `${objetoJSON.name1} ${objetoJSON.name2} ${objetoJSON.lastName1} ${objetoJSON.lastName2}`;
  setFieldValue(sessionStorage.NombreTercero, name);
  console.log(name);
  sessionStorage.Tercero = JSON.stringify(objetoJSON);
}, 1000);

//Razón Social
setTimeout(() => {
  debugger
  let campoRazon = 'e3391d95-0da8-499d-bc63-ac3c4fd2827b';
  let objetoJSON = JSON.parse(sessionStorage.Tercero);
  objetoJSON.name1 = getFieldValue(campoRazon);
  let name = `${objetoJSON.name1}`;
  setFieldValue(sessionStorage.NombreTercero, name);
  console.log(name);
  sessionStorage.Tercero = JSON.stringify(objetoJSON);
}, 1000);