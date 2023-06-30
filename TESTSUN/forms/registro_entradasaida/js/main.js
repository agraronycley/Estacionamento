$(function () {
	util.layout();

	if(FORMMODE == "VIEW") {
		$("#addVeiculo").hide();
	} else {
		$("#addVeiculo").on("click", function() {
			wdkAddChild("tbVeiculo");
		});
	}
});

function setSelectedZoomItem(selectedItem) {

	if (selectedItem.inputId == "placa") {
        $("#vaga").val(selectedItem.NUMVAGA);
        $("#tipo").val(selectedItem.TIPO);
        $("#ultima_mov").val(selectedItem.ULTIMA_MOV);
		$("#data_ultima_mov").val(selectedItem.DATA_ULTIMA_MOV);

		if(selectedItem.ULTIMA_MOV == "" || selectedItem.ULTIMA_MOV == "SAIDA"){
			$("#nova_mov").val("ENTRADA");
			return;
		}

		$("#nova_mov").val("SAIDA");
    } 
	
}