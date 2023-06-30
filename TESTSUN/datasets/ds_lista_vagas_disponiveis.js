function createDataset(fields, constraints, sortFields) {
	
	var filtroativo = new Array();
    var cfiltro = DatasetFactory.createConstraint("metadata#active", "true", "true", ConstraintType.MUST);
    filtroativo.push(cfiltro);
    var ds_categoriasMarketing = DatasetFactory.getDataset("ds_veiculos", null, filtroativo, null);
    var documentId = ds_categoriasMarketing.getValue(0, "metadata#id");
    var documentVersion = ds_categoriasMarketing.getValue(0, "metadata#version");

    //Retorna os dados do usuário logado
    var constraints_cat = new Array();
    var c1 = DatasetFactory.createConstraint("tablename", "tbVeiculo", "tbVeiculo", ConstraintType.MUST);
    constraints_cat.push(c1);
    var c2 = DatasetFactory.createConstraint("metadata#id", documentId, documentId, ConstraintType.MUST);
    constraints_cat.push(c2);
    var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);
    constraints_cat.push(c3);
    var c4 = DatasetFactory.createConstraint("placa", "" , "", ConstraintType.MUST);
    constraints_cat.push(c4);
    var c5 = DatasetFactory.createConstraint("apartamento", "" , "", ConstraintType.MUST);
    constraints_cat.push(c5);
    
    var vagas = DatasetFactory.getDataset("ds_veiculos", null, constraints_cat, null);
    
    var dataset = DatasetFactory.newDataset();
    dataset.addColumn("NUMVAGA");
    dataset.addColumn("PLACA");
    dataset.addColumn("TIPO");
    dataset.addColumn("ULTIMA_MOV");
    dataset.addColumn("DATA_ULTIMA_MOV");

    for (var j = 0; j < vagas.rowsCount; j++) {
        var num_vaga = vagas.getValue(j, "num_vaga");
        var placa = vagas.getValue(j, "placa");
        var tipo = vagas.getValue(j, "tipo");
        var ultima_mov = vagas.getValue(j, "ultima_mov");
        var data_ultima_mov = vagas.getValue(j, "data_ultima_mov");
        dataset.addRow(new Array(num_vaga,placa, tipo, ultima_mov, data_ultima_mov));
    }
    
    return dataset;
	

}