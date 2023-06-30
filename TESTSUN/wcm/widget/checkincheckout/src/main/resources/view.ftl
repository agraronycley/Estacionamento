<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
	<head>
        <script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
        <script type="text/javascript" src="/portal/resources/style-guide/js/fluig-style-guide.min.js"
            charset="utf-8"></script>
        <script type="text/javascript" src="/checkincheckout/resources/js/checkincheckout.js"></script>
        <script type="text/javascript" src="/checkincheckout/resources/js/main.js"></script>
		<script type="text/javascript" src="/checkincheckout/resources/js/util.js"></script>
        <link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-filter.min.css">
        <script src="/style-guide/js/fluig-style-guide-filter.min.js"></script>
    </head>

    <body>
        <div class="fluig-style-guide">
			<form class="col-md-12" name="form" role="form">
				<h1 class="fs-txt-center">
					Checkin/Checkout
				</h1>
				<input type="hidden" class="form-control" name="campoIdentificador" id="campoIdentificador" readonly="readonly" />
				<div class="row">
                    <div class="col-md-3">
                        <label>Tipo</label><br>
                        <label class="radio-inline">
                            <input type="radio" name="tipo" id="checkin" value="checkin"> Checkin
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="tipo" id="checkout" value="checkout"> Checkout
                        </label>
                    </div>
                </div>
                <br>
                <div class="row">
					<div class="col-md-3 col-sm-12">
						<label>Informe o apartamento</label><br>
						<input type="text" id="apartamento" name="apartamento" class="form-control"/>
					</div>
                    <div class="col-md-3 col-sm-12" id="divconsulta">
						<div class="form-group">
							<br>
							<button type="button" class="btn btn-success" id="getDadosApartamento">CARREGAR INFORMAÇÕES <span class="fluigicon fluigicon-search fluigicon-xs"></span></button>
						</div>
					</div>
                    <div class="col-md-3 col-sm-12">
						<label>Vagas disponíveis</label><br>
						<input type="text" id="vaga" name="vaga" class="form-control"/>
					</div>
                    <div class="col-md-3 col-sm-12">
						<label>Selecione a placa</label><br>
						<input type="text" id="placa" name="placa" class="form-control"/>
					</div>
                </div>
                <br>
				<div class="row">
					<div class="col-md-4 col-sm-12 col-md-offset-9">
						<div class="form-group">
							<br>
							<button type="button" class="btn btn-success" id="addChk">CADASTRAR <span class="fluigicon fluigicon-plus fluigicon-xs"></span></button>
						</div>
					</div>
				</div>
			</form>
		</div>
    </body>
</div>

