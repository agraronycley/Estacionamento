function util(){}

//REMOVE ESPACAMENTO ENTRE LINHAS DO PAI E FILHO
util.layout = function() {
	$(".fs-md-space").each(function () {
		$(this).removeClass("fs-md-space");
	});
};
