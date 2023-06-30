var usuario_fluig = 'ronycley@bitsolucoes.info';
var senha_fluig = 'Mrrm!@4mrrm.20';
$(function () {
	util.layout();

	$('#vaga').click(function () {
		var settings = {
			source: {
				url:  '/api/public/ecm/dataset/search?datasetId=ds_lista_vagas_disponiveis&searchField=PLACA&resultFields=NUMVAGA&',
				contentType: 'application/json',
				root: 'content',
				pattern: '',
				limit: 10,
				offset: 0,
				patternKey: 'searchValue',
				limitkey: 'limit',
				offsetKey: 'offset'
			},
			displayKey: 'NUMVAGA',
			multiSelect: true,
			style: {
				autocompleteTagClass: 'tag-gray',
				tableSelectedLineClass: 'info'
			},
			table: {
				header: [
					{
						'title': 'VAGA',
						'size': 'col-xs-12',
						'dataorder': 'NUMVAGA',
						'standard': true
					}
				],
				renderContent: ['NUMVAGA']
			}
		};
		var filter = FLUIGC.filter('#vaga', settings);
	});

	$('#checkin').click(function () { 
		$('#vaga').prop("readonly","");	
		$('#vaga').prop("disabled","");	
		$('#placa').prop("readonly","");	
	});
	
	$('#checkout').click(function () { 
		$('#vaga').prop("readonly","readonly");	
		$('#vaga').prop("disabled","disabled");	
		$('#placa').prop("readonly","readonly");	
	});

	$('#getDadosApartamento').click(function () {
		var dados = {
			"name": "ds_lista_dados_apartamento",
			"fields": null,
			"constraints": [
				{
					"_field": "APARTAMENTO",
					"_initialValue": $('#apartamento').val(),
					"_finalValue": $('#apartamento').val(),
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
					title: 'ERRO', 
					message: "Erro na consulta dos dados do apartamento: "+e+x, 
					type: 'warning' 
				}); 
			},
			success: function (data) {
				if(data.content.values.length == 0){
					FLUIGC.toast({ 
						title: '', 
						message: "Apartamento disponível.", 
						type: 'success' 
					}); 
					$('#vaga').prop("readonly","");	
					$('#vaga').prop("disabled","");	
					$('#placa').prop("readonly","");
					$('#vaga').val("");	
					$('#placa').val("");
					return;
				}
				$('#vaga').prop("readonly","readonly");	
				$('#vaga').prop("disabled","disabled");	
				$('#placa').prop("readonly","readonly");	
				let vaga = data.content.values[0];
				$('#vaga').val(vaga.NUMVAGA);
				$('#placa').val(vaga.PLACA);
			}
		});
	});

	$('#addChk').click(function () {
		var dados = {
			"name": "ds_lista_dados_apartamento",
			"fields": null,
			"constraints": [
				{
					"_field": "APARTAMENTO",
					"_initialValue": $('#apartamento').val(),
					"_finalValue": $('#apartamento').val(),
					"_type": 1,
					"_likeSearch": true
				}]
		}
		if($('input[name="tipo"]:checked').val() == "checkin"){
			$.ajax({
				method: "POST",
				url: location.protocol + "//" + location.host + "/api/public/ecm/dataset/datasets",
				data: JSON.stringify(dados),
				contentType: "application/json",
				async: true,
				error: function (x, e) {
					FLUIGC.toast({ 
						title: '', 
						message: "Ocorreu um erro ao tentar realizar o checkin/checkout.", 
						type: 'success' 
					}); 
				},
				success: function (data) {
					if(data.content.values.length == 0){
						atualizaVaga($('#apartamento').val(),$('#vaga').val(),$('#placa').val());
						return;
					}else{
						FLUIGC.toast({ 
							title: '', 
							message: "O apartamento não está disponível.", 
							type: 'success' 
						}); 
					}
				}
			});
		}else{
			$.ajax({
				method: "POST",
				url: location.protocol + "//" + location.host + "/api/public/ecm/dataset/datasets",
				data: JSON.stringify(dados),
				contentType: "application/json",
				async: true,
				error: function (x, e) {
					FLUIGC.toast({
						title: '',
						message: 'Erro na cadastro da movimentação: '+x,e,
						type: 'warning'
					});
				},
				success: function (data) {
					if(data.content.values.length == 0){
						FLUIGC.toast({ 
							title: '', 
							message: "O apartamento informado não está alocado.", 
							type: 'success' 
						}); 
						return;
					}else{
						atualizaVaga("",$('#vaga').val(),"")
					}
				}
			});

		}
		
	});
});

function atualizaVaga(apartamento,vaga,placa) {
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
	xmlAnexo += '        	<item><field>apartamento___'+vaga+'</field><value>'+apartamento+'</value></item>';
	xmlAnexo += '        	<item><field>placa___'+vaga+'</field><value>'+placa+'</value></item>';
	xmlAnexo += '        </cardData>';
    xmlAnexo += '    </ws:updateCardData>';
    xmlAnexo += ' </soapenv:Body>';
    xmlAnexo += ' </soapenv:Envelope>';

    var parser = new DOMParser();
    var xmlRequest = parser.parseFromString(xmlAnexo, "text/xml");

	let txt_message = "Checkin realiado. Apartamento/Vaga atualizados com sucesso!";
	if(apartamento = ""){
		txt_message = "Checkout realiado. Apartamento/Vaga atualizados com sucesso!";
	}
    parent.WCMAPI.Create({
        url: window.location.origin + '/webdesk/ECMCardService?wsdl',
        contentType: 'text/xml',
        dataType: 'xml',
        data: xmlRequest,
        success: function () {
            FLUIGC.toast({
                title: 'AVISO',
                message: txt_message,
                type: 'success'
            });
			setInterval(() => {
				parent.window.location.reload();
			}, 4000);
        },
        error: function (msg) {
			FLUIGC.toast({
                title: 'AVISO',
                message: 'Erro no checkin/checkout: '+msg,
                type: 'warning'
            });
        }
    });
}