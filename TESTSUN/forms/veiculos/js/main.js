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