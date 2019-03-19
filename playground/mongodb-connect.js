const {MongoClient,ObjectID}=require("mongodb");

var obj=new ObjectID();
console.log(obj);
MongoClient.connect("mongodb://localhost:27017/todoapp",(err,client)=>{
if(err){

	return console.log("Unable to connect to mongodb server");

}
	console.log("connected to mongodb server");
	const db=client.db('todoapp');
	

	db.collection('Todos').insertOne({

		text:'Somethccccccccccccccc',
		completed:false
	},(err,result)=>{

		if(err){

			return console.log("Unable to insert todo",err);
		}

			console.log(JSON.stringify(result.ops,undefined,2));
		});
	
		client.close();

	});



