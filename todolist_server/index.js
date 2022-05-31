#!/usr/bin/node

const http = require("http");

let mongo_client = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectID;

let url = "mongodb://localhost/";

let db;

console.log("Iniciando script mongo-http");

mongo_client.connect(url, function(error, conn){
	console.log("Dentro de MongoDB");

	if (error){
		console.log("ERROR!!!");
		return;
	}

	db = conn.db("todolist");
});

http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	});

	if (req.method == "POST"){

		let task = [];
		req.on('data', function(chunk){
			task += chunk;
		});

		req.on('end', function(){

		task = JSON.parse(task);	
		if (task.remove == "false"){
			db.collection("tasks").insertOne({"task":task.task});	
			let new_obj = db.collection("tasks").find().sort({"_id":-1}).limit(1);
			let obj_id;

			new_obj.toArray(function(error,doc){
				obj_id  = JSON.stringify(doc);

				res.end(obj_id);
				return;
			});
		}
		else {
			let idd = new ObjectId(task.task_id);
			let id =  {_id: idd};
			db.collection("tasks").deleteOne(id);
		}

	});
	
	return;

	}

	let task_o = db.collection("tasks").find();
	let tasks_string;
	task_o.toArray(function(err, data){
		tasks_string = JSON.stringify(data);
		res.end(tasks_string);
		return;
	});

}).listen(3030);
