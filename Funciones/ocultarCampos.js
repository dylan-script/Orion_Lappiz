debugger;
if(e.value != "Ventas"){
	$(".form-section-title:contains(Ventas)").parent().parent().hide();//Ocultar seccion completa
}else if(e.value == "Ventas"){
	$(".form-section-title:contains(Ventas)").parent().parent().show();//Mostrar seccion completa
}