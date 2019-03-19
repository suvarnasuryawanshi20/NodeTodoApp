var express=require('express');
var bodyParser=require('body-parser');
var {ObjectId}=require('mongodb');
var {mongoose}=require('./db/mongoose');
var services= require("./services.js")
var{Todo}=require('./model/todo');
var{User}=require('./model/user');

const port=process.env.PORT ||4000;
//var{User_profile}=require('./model/user_profile');
var app=express();

app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
  var todo=new Todo({
    text:req.body.text
  });
todo.save().then((docs)=>{
res.send(docs);
},(e)=>{
res.status(400).send(e);
});
});

app.get('/todos',(req,res)=>{

  Todo.find().then((todos)=>{
    res.send({todos});
    console.log(todos);
  },(e)=>{

    res.status(400).send(e);

  });
});

app.post('/user_profile',(req,res)=>{

	var user_profile=new User_profile({

		user:req.body.user
		
	});
	user_profile.save().then((docs)=>{
		res.send(docs);
	},(e)=>{
		res.status(400).send(e);
	});
});

app.get('/user_profile',(req,res)=>{

	Todo.find().then((user_profile)=>{

		res.send({user_profile});

	},(e)=>{
		res.status(400).send(e);
	});
});

//GET/todo.12345
app.get('/todos/:id',(req,res)=>{

	//res.send(req.params);
	var id=req.params.id;
	if(!ObjectId.isValid(id)){
		res.status(404).send();
	}
	Todo.findById(id).then((todos)=>{

		if(!todos){
			res.status(404).send();
		}
		res.send({todos});
		console.log(todos);

	}).catch((e)=>{res.status(400).send();
		
	});
});

app.delete('/todos/:id',(req,res)=>{

	var id=req.params.id;
	if(!ObjectId.isValid(id)){

		return res.status(404).send();
	}
	Todo.findByIdAndRemove(id).then((todos)=>{

		if(!todos){
		res.status(404).send();
		}

		res.send(todos);
	}).catch((e)=>{

		return res.status(400).send();
	});
})

app.listen(port,()=>{

  console.log(`Server is listening on port${port}`);
});

app.post('/assignTopics',(req,res)=>{
 
 var details= req.body;
 console.log("................................"+JSON.stringify(details));
	 services.assignTopicsSuvarna(res, details , function (found) {
                res.json(found);    
                res.end();

	});
});

app.get('/',(req,res)=>{

var user= "prashant"
 res.send(user)

});