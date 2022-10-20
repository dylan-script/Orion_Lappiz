setTimeout(() => {
  if(e.isNew){
      console.log('Creando nuevo elemento');
      $("button[title='Guardar']").hide();
      $("button[title='Guardar y nuevo']").hide();
      $("#3_Terceros").hide();
      $("#4_Cuentas_Contables").hide();
      $("#5_Documentos_Contables").hide();
      $("#6_Sectores").hide();
     // $("#7_Modulos").hide();
  }
  else{
      console.log('Editando elemento ya existente');
      console.log(e.dataItem);
      sessionStorage.IdCopropiedad = e.dataItem.Id;
      
  }
}, 1000);