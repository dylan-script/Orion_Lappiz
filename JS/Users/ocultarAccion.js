console.clear();
setTimeout(function() {
  console.log(e.dataItem);
  sessionStorage.UserFK = e.dataItem.Id
  console.log(sessionStorage.UserFK)
  $('#moreActions').hide(); 
  if(!e.isNew){
    $('#moreActions').show(); 
  }
}, 1000);