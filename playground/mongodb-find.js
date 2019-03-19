const {MongoClient,ObjectID}=require("mongodb");

MongoClient.connect("mongodb://localhost:27017", function(err, client) {
  
  console.log("Connected successfully to server");
  console.log("Users");
 
  const db = client.db('todoapp');
 
   const collection = db.collection('user');
  // Find some documents
 
  /*collection.find({
  	_id:new ObjectID('5c7b75098b44bc3770ebc212')}).toArray(function(err, docs) {

  	if(err){console.log(err)}
  		else{console.log(docs)}
  
});
*/

db.collection('user').find().count().then((count)=>{
	console.log(`user count:${count}`);
	
},(err)=>{
	console.log("unable to fetch user",err);
});
/*
collection.find({'location':'Pune'}).toArray(function(err,docs){

	if(err){
		console.log(err);
	}else
	{console.log(docs)}
});
*/
  });

/*const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}*/