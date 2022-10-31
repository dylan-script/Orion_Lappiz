setTimeout(() => {
    //debugger
    let campoTipoTercero = '59f59c72-9454-4dda-938a-829bcae6fa02';
    let TipoTercero = getFieldValue(campoTipoTercero);
    console.log(TipoTercero);
    sessionStorage.NombreTercero = '8578e119-a178-4df3-9fa2-c14a1ac0db94';
    let Tercero = {
      name1 : "",
      name2 : "",
      lastName1 : "",
      lastName2 : "",
    }
    sessionStorage.Tercero = JSON.stringify(Tercero);
}, 1000);



  //Segundo Nombre: e4698c07-2540-4855-9580-2c81eca2f939
  //Primer Nombre: b2c66461-0dba-4063-b7d9-1b1902f64a44
  //Nombre del Tercero: 8578e119-a178-4df3-9fa2-c14a1ac0db94
  //Razon Social : 192da9c9-35bb-4188-9b01-5f2fb8d48621
  //Primer Apellido: b6e51592-1fe4-42a2-ac43-e40d1d1acf0d
  //Segundo Apellido: d83bb8c3-6510-4ecd-a971-f121fefe170a
  //Tipo de Tercero: 59f59c72-9454-4dda-938a-829bcae6fa02 
  //Persona natural, Persona jurídica


  //Primer Nombre
  setTimeout(() => {
    debugger
    let campoPrimerN = 'b2c66461-0dba-4063-b7d9-1b1902f64a44';
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
    let campoSegundoN = 'e4698c07-2540-4855-9580-2c81eca2f939';
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
    let campoPrimerA = 'b6e51592-1fe4-42a2-ac43-e40d1d1acf0d';
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
    let campoSegundoA = 'd83bb8c3-6510-4ecd-a971-f121fefe170a';
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
    let campoRazon = '192da9c9-35bb-4188-9b01-5f2fb8d48621';
    let objetoJSON = JSON.parse(sessionStorage.Tercero);
    objetoJSON.name1 = getFieldValue(campoRazon);
    let name = `${objetoJSON.name1}`;
    setFieldValue(sessionStorage.NombreTercero, name);
    console.log(name);
    sessionStorage.Tercero = JSON.stringify(objetoJSON);
  }, 1000);