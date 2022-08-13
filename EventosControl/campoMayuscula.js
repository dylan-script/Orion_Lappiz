//Campo en mayúscula 
//Evento Tipo ValueChanged
console.clear();
sessionStorage.NombreCampo = getFieldValue('IdCampo');
setFieldValue('IdCampo', sessionStorage.NombreCampo.toUpperCase());
console.log(`Valor del campo: ${sessionStorage.NombreCampo}`);
//Observaciones
CampoId=353546c6-e983-4de3-b8eb-739143c704ad
//Observaciones del cliente
CampoId=f0f4663b-ec07-4c9a-8e42-51d28153cc9e

//html
<textarea>I really like jAvaScript</textarea> 
//css
 textarea{ text-transform: uppercase; } 
 //js
  var myTextArea = document.getElementsByTagName('textarea');
  for(var i=0; i<myTextArea.length; i++){
	  console.log('Textarea ' + i + ' output: ' + myTextArea[i].innerHTML); //I really like jAvaScript
	  console.log('Textarea ' + i + ' converted output: ' + myTextArea[i].innerHTML.toUpperCase()); //I REALLY LIKE JAVASCRIPT
	  } 