const {MongoClient,ObjectID}=require("mongodb");

MongoClient.connect("mongodb://localhost:27017", function(err, client) {
  
  console.log("Connected successfully to server");
  console.log("Users");
 
  const db = client.db('todoapp');
 
   const collection = db.collection('user');


   //deleteMany
    
    /*  db.collection('user').deleteMany({name:'Prashant'}).then((result)=>{

        console.log(result);
      },(err=>{

        console.log(err);
      }));
*/

  //deleteOne

     /* db.collection('user').deleteOne({name:'Suvarna'}).then((result)=>{console.log(result)},(err)=>{

        console.log(err);
      });
*/

  //Find one and delete

    db.collection('user').findOneAndDelete({
      _id:new ObjectID('5c7b75598b44bc3770ebc239')}).then((result)=>{
        console.log(result);
      });


  });

