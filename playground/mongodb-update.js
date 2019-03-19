const {MongoClient,ObjectID}=require("mongodb");

MongoClient.connect("mongodb://localhost:27017", function(err, client) {
  
  console.log("Connected successfully to server");
  console.log("Users");
 
  const db = client.db('todoapp');
 
   const collection = db.collection('user');

    db.collection('user').findOneAndUpdate({
      _id:new ObjectID('5c7b954a8b44bc3770ebd0e6')},
      {
        $set:{
          name:'Suvarna'
        }
      },
        {
          returnOriginal:true
        }).then((result)=>{
        console.log(result);
      });
        
        db.collection('user').update(
   { name: "Suvarna" },
   { $inc: { age: 1 } }
)

});


  

