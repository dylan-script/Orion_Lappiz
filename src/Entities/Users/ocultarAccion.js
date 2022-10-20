console.clear();
setTimeout(function() {
  $('#moreActions').hide();
  console.log(e.dataItem);
  //Si el formulario está en modo edición, el botón, que despliega las demás acciones creadas, se hace visible. 
  if(!e.isNew){
        $('#moreActions').show(); 
  }
}, 1000);