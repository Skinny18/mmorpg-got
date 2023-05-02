/* importar o mongodb */
var mongo = require('mongodb');
var assert = require("assert");

const url = "mongodb://localhost:27017";
const dbName = "got";

var connMongoDB = function(dados){
	mongo.connect(url, function(err, client){
		assert.equal(null,err);
		console.log("Connect successfully to server");
		const db = client.db(dbName);
		query(db, dados);
		client.close();
	});
}

function query(db, dados){
	var colletion = db.colletion(dados.colletion);
	switch(dados.operacao){
		case "inserir":
			colletion.insertOne(dados.usuario, dados.callback);
			break;
		default:
			break;	
	}
}

module.exports = function(){
	return connMongoDB;
}