setTimeout(() => {
  //Segundo Nombre: e4698c07-2540-4855-9580-2c81eca2f939
  //Primer Nombre: b2c66461-0dba-4063-b7d9-1b1902f64a44
  //Nombre del Tercero: 8578e119-a178-4df3-9fa2-c14a1ac0db94
  //Razon Social : 192da9c9-35bb-4188-9b01-5f2fb8d48621
  //Primer Apellido: b6e51592-1fe4-42a2-ac43-e40d1d1acf0d
  //Segundo Apellido: d83bb8c3-6510-4ecd-a971-f121fefe170a
  //Tipo de Tercero: 59f59c72-9454-4dda-938a-829bcae6fa02 
  //Persona natural, Persona jurídica
  if(e.isNew){
    $("button[title='Guardar']").onclick = function() {  
  debugger;
  let NombreTercero;
  console.clear();
  let campoTipoTercero = '59f59c72-9454-4dda-938a-829bcae6fa02';
  let TipoTercero = getFieldValue(campoTipoTercero);
  console.log(TipoTercero);
  asignarNombre(TipoTercero);

  function asignarNombre(Tercero){
    if(Tercero == 'Persona natural'){
      NombreTercero = getFieldValue('b2c66461-0dba-4063-b7d9-1b1902f64a44') + ' ' + getFieldValue('e4698c07-2540-4855-9580-2c81eca2f939') + ' ' + getFieldValue('b6e51592-1fe4-42a2-ac43-e40d1d1acf0d') + ' ' + getFieldValue('d83bb8c3-6510-4ecd-a971-f121fefe170a');
    }else{
      NombreTercero = getFieldValue('192da9c9-35bb-4188-9b01-5f2fb8d48621');
    }
    console.log(NombreTercero);
    setFieldValue('8578e119-a178-4df3-9fa2-c14a1ac0db94', NombreTercero);
  }
};
}
}, 1000);
