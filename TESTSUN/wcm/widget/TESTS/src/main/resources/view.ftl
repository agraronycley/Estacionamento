<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
	<head>
        <script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
        <script type="text/javascript" src="/portal/resources/style-guide/js/fluig-style-guide.min.js"
            charset="utf-8"></script>
        <script type="text/javascript" src="/TESTS/resources/js/TESTS.js"></script>
        <script type="text/javascript" src="/TESTS/resources/js/main.js"></script>
		<script type="text/javascript" src="/TESTS/resources/js/util.js"></script>
        <link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-filter.min.css">
        <script src="/style-guide/js/fluig-style-guide-filter.min.js"></script>
    </head>

    <body>
        <div class="fluig-style-guide">
			<form class="col-md-12" name="form" role="form">
				<h1 class="fs-txt-center">
					Registro de Entrada/Saída de veículos no estacionamento
				</h1>
				<input type="hidden" class="form-control" name="campoIdentificador" id="campoIdentificador" readonly="readonly" />
				<div class="row">
					<div class="col-md-3 col-sm-12">
						<label>Selecione a placa</label><br>
						<input type="text" id="placa" name="placa" class="form-control"/>
					</div>
                    <div class="col-md-3 col-sm-12">
						<div class="form-group">
							<br>
							<button type="button" class="btn btn-success" id="getDadosVeiculo">CARREGAR INFORMAÇÕES <span class="fluigicon fluigicon-search fluigicon-xs"></span></button>
						</div>
					</div>
				</div>
				<BR>
				<div class="row">
					<div class="col-md-4 col-sm-12">
						<label>Apartamento</label><br>
						<input type="text" id="apartamento" name="apartamento" class="form-control" readonly/>
					</div>
					<div class="col-md-4 col-sm-12">
						<label>Vaga</label><br>
						<input type="text" id="vaga" name="vaga" class="form-control" readonly/>
					</div>
					<div class="col-md-4 col-sm-12">
						<label>Tipo do veículo</label><br>
						<input type="text" id="tipo" name="tipo" class="form-control" readonly/>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 col-sm-12">
						<label>Última movimentação</label><br>
						<input type="text" id="ultima_mov" name="ultima_mov" class="form-control" readonly/>
					</div>
					<div class="col-md-4 col-sm-12">
						<label>Data Última movimentação</label><br>
						<input type="text" id="data_ultima_mov" name="data_ultima_mov" class="form-control" readonly/>
					</div>
					<div class="col-md-4 col-sm-12">
						<label>Nova movimentação</label><br>
						<input type="text" id="nova_mov" name="nova_mov" class="form-control" readonly/>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 col-sm-12 col-md-offset-8">
						<div class="form-group">
							<br>
							<button type="button" class="btn btn-success" id="addMovimentacao">CADASTRA NOVA MOVIMENTAÇÃO <span class="fluigicon fluigicon-plus fluigicon-xs"></span></button>
						</div>
					</div>
				</div>
			</form>
		</div>
    </body>
</div>

