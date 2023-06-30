<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
	<head>
        <script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
        <script type="text/javascript" src="/portal/resources/style-guide/js/fluig-style-guide.min.js"
            charset="utf-8"></script>
        <script type="text/javascript" src="/statusestacionamento/resources/js/statusestacionamento.js"></script>
        <script type="text/javascript" src="/statusestacionamento/resources/js/main.js"></script>
		<script type="text/javascript" src="/statusestacionamento/resources/js/util.js"></script>
        <link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-filter.min.css">
        <script src="/style-guide/js/fluig-style-guide-filter.min.js"></script>
    </head>

    <body style="background-color:white'">
        <div class="fluig-style-guide">
			<form class="col-md-12" name="form" role="form">
				<h1 class="fs-txt-center">
					Status do Estacionamento
				</h1>
				<input type="hidden" class="form-control" name="campoIdentificador" id="campoIdentificador" readonly="readonly" />
                <br>
				<div class="row">
                    <div class="col-md-6">
                        <h1>Vagas ocupadas</h1>
                        <h1 id="divvagasocupadas" style="color:blue">
                        </h1>
                    </div>
                    <div class="col-md-6">
                        <h1>Vagas disponíveis</h1>
                        <h1 id="divvagasdisponiveis" style="color:green">
                        </h1>
                    </div>
                </div>
                <br>
                <div class="row" style="margin-bottom: 1px">
                    <div class="col-sm-12 col-md-12">
                        <table class="table table table-bordered" id="tableVagas">
                            <thead>
                                <tr class="warning">
                                    <td width="15%" style="text-align: center;"><b>VAGA</b></td>
                                    <td width="15%" style="text-align: center;"><b>APARTAMENTO</b></td>
                                    <td width="15%" style="text-align: center;"><b>PLACA</b></td>
                                    <td width="15%" style="text-align: center;"><b>TIPO</b></td>
                                    <td width="20%" style="text-align: center;"><b>ULTIMA MOVIMENTAÇÃO</b></td>
                                    <td width="20%" style="text-align: center;"><b>DATA ÚLTIMA MOVIMENTAÇÃO</b></td>
                                </tr>
                            </thead>
                            <tbody id="atividades">
                            </tbody>
                        </table>
                    </div>
                </div>
                <br>
			</form>
		</div>
    </body>
</div>

