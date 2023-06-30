var usuario_fluig = 'ronycley@bitsolucoes.info';
var senha_fluig = 'Mrrm!@4mrrm.20';

$(function () {
	util.layout();

	$('#placa').click(function () {
		var settings = {
			source: {
				url:  '/api/public/ecm/dataset/search?datasetId=ds_lista_vagas_com_checkin&searchField=PLACA&resultFields=PLACA,NUMVAGA,TIPO,ULTIMA_MOV,DATA_ULTIMA_MOV&',
				contentType: 'application/json',
				root: 'content',
				pattern: '',
				limit: 10,
				offset: 0,
				patternKey: 'searchValue',
				limitkey: 'limit',
				offsetKey: 'offset'
			},
			displayKey: 'PLACA',
			multiSelect: true,
			style: {
				autocompleteTagClass: 'tag-gray',
				tableSelectedLineClass: 'info'
			},
			table: {
				header: [
					{
						'title': 'PLACA',
						'size': 'col-xs-12',
						'dataorder': 'PLACA',
						'standard': true
					}
				],
				renderContent: ['PLACA']
			}
		};
		var filter = FLUIGC.filter('#placa', settings);
	});

	$('#getDadosVeiculo').click(function () {
		var dados = {
			"name": "ds_lista_vagas_placa",
			"fields": null,
			"constraints": [
				{
					"_field": "PLACA",
					"_initialValue": $('#placa').val(),
					"_finalValue": $('#placa').val(),
					"_type": 1,
					"_likeSearch": true
				}]
		}
		$.ajax({
			method: "POST",
			url: location.protocol + "//" + location.host + "/api/public/ecm/dataset/datasets",
			data: JSON.stringify(dados),
			contentType: "application/json",
			async: true,
			error: function (x, e) {
				FLUIGC.toast({
					title: '',
					message: 'Erro na consulta da vaga.: '+x,e,
					type: 'warning'
				});
			},
			success: function (data) {
				let vaga = data.content.values[0];
				$('#apartamento').val(vaga.APARTAMENTO);
				$('#vaga').val(vaga.NUMVAGA);
				$('#tipo').val(vaga.TIPO);
				$('#ultima_mov').val(vaga.ULTIMA_MOV);
				$('#data_ultima_mov').val(vaga.DATA_ULTIMA_MOV);

				if(vaga.ULTIMA_MOV == "" || vaga.ULTIMA_MOV == "SAIDA"){
					$("#nova_mov").val("ENTRADA");
					return;
				}
		
				$("#nova_mov").val("SAIDA");
			}
		});
	});

	$('#addMovimentacao').click(function () {

		let data_mov = getDataHora();
		parent.WCMAPI.Create(
			{ 
				url: '/api/public/2.0/cards/create', 
				data: JSON.stringify(
					{ 
						"documentDescription": "Registro de entrada e saída de veículos", 
						"parentDocumentId": 33016, 
						"version": 1000, 
						"formData": [ 
							{ "name": "vaga", "value": $("#vaga").val() }, 	
							{ "name": "placa", "value": $("#placa").val() }, 
							{ "name": "tipo", "value": $("#tipo").val() },
							{ "name": "ultima_mov", "value": $("#ultima_mov").val() },
							{ "name": "data_ultima_mov", "value": $("#data_ultima_mov").val() },
							{ "name": "mov", "value": $("#nova_mov").val() },
							{ "name": "data_mov", "value": data_mov },
						] 
					}
				), 
				success: function (data, status, xhr) { 
					FLUIGC.toast({ 
						title: '', 
						message: "A movimentação foi cadastrada.", 
						type: 'success' 
					}); 

					atualizaVaga($("#vaga").val(),$("#nova_mov").val(),data_mov);
				}, 
				error: function(xhr, status, error) { 
					FLUIGC.toast({ 
						title: '', 
						message: "Ocorreu um erro ao cadastrar o Tema. Se o problema persistir, cadastre a empresa pelo GED.", 
						type: 'danger' 
					}); 
				} 
			}
		); 

	});
});

function atualizaVaga(vaga,ultima_mov,data_ultima_mov) {

    var xmlAnexo = '';
    xmlAnexo += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">';
    xmlAnexo += '  <soapenv:Header/>';
    xmlAnexo += '  <soapenv:Body>';
    xmlAnexo += '     <ws:updateCardData>';
	xmlAnexo += '         <companyId>1</companyId>';
    xmlAnexo += '         <username>'+usuario_fluig+'</username>';
    xmlAnexo += '         <password>'+senha_fluig+'</password>';
    xmlAnexo += '         <cardId>33038</cardId>';
    xmlAnexo += '        <cardData>';
	xmlAnexo += '        	<item><field>ultima_mov___'+vaga+'</field><value>'+ultima_mov+'</value></item>';
	xmlAnexo += '        	<item><field>data_ultima_mov___'+vaga+'</field><value>'+data_ultima_mov+'</value></item>';
	xmlAnexo += '        </cardData>';
    xmlAnexo += '    </ws:updateCardData>';
    xmlAnexo += ' </soapenv:Body>';
    xmlAnexo += ' </soapenv:Envelope>';

    var parser = new DOMParser();
    var xmlRequest = parser.parseFromString(xmlAnexo, "text/xml");

    parent.WCMAPI.Create({
        url: window.location.origin + '/webdesk/ECMCardService?wsdl',
        contentType: 'text/xml',
        dataType: 'xml',
        data: xmlRequest,
        success: function () {
            FLUIGC.toast({
                title: '',
                message: 'Vaga atualizada com sucesso!',
                type: 'success'
            });
        },
        error: function (msg) {
			FLUIGC.toast({
                title: '',
                message: 'Erro na atualização da vaga: '+msg,
                type: 'warning'
            });
        }
    });
}

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

function getDataHora(){
	
	var data = new Date();
	var dia     = data.getDate().toString().padStart(2, '0');           // 1-31
	var mes     = (data.getMonth()+1).toString().padStart(2, '0');          // 0-11 (zero=janeiro)
	var ano4    = data.getFullYear();       // 4 dígitos
	var hora    = data.getHours().toString().padStart(2, '0');          // 0-23
	var min     = data.getMinutes().toString().padStart(2, '0');        // 0-59
	var seg     = data.getSeconds().toString().padStart(2, '0');        // 0-59
	var str_data = dia + '/' + (mes) + '/' + ano4;
	var str_hora = hora + ':' + min + ':' + seg;

	return  str_data+' '+str_hora;
}