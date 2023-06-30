$(function () {
	util.layout();

	var dados = {
		"name": "ds_lista_vagas",
		"fields": null,
		"constraints": []
	}
	$.ajax({
		method: "POST",
		url: location.protocol + "//" + location.host + "/api/public/ecm/dataset/datasets",
		data: JSON.stringify(dados),
		contentType: "application/json",
		async: true,
		error: function (x, e) {
			FLUIGC.toast({ 
				title: 'ERRO', 
				message: "Ocorreu um erro na consulta das vagas: "+e+x, 
				type: 'warning' 
			}); 
		},
		success: function (data) {
			if(data.content.values.length > 0){
				let qtsvagasocupadas = 0;
				for (var i = 0; i < data.content.values.length; i++) {
					let vaga = data.content.values[i];
					let color = 'blue';
					if(vaga.APARTAMENTO != ""){
						color = 'red';
						qtsvagasocupadas++;
					}
					$("#tableVagas tbody").append(
						"<tr>"+
							"<td style='color:"+color+"'><center>"+vaga.NUMVAGA+"</center></td>"+
							"<td style='color:"+color+"'><center>"+vaga.APARTAMENTO+"</center></td>"+
							"<td style='color:"+color+"'><center>"+vaga.PLACA+"</center></td>"+
							"<td style='color:"+color+"'><center>"+vaga.TIPO+"</center></td>"+
							"<td style='color:"+color+"'><center>"+vaga.ULTIMA_MOV+"</center></td>"+
							"<td style='color:"+color+"'><center>"+vaga.DATA_ULTIMA_MOV+"</center></td>"+
						"</tr>"
					);
				}
				$('#divvagasocupadas').html(qtsvagasocupadas);
				$('#divvagasdisponiveis').html(data.content.values.length - qtsvagasocupadas);
			}
		}
	});
});