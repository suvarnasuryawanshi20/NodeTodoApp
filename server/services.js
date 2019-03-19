
var{user_profile}=require('./model/user_profile');
var{Todo}=require('./model/todo');

exports.assignTopicsSuvarna = function(res, details, callback){

var emailIDs = details.emailIDs;
var Topics=   details.Topics;

var fn = function updateSingleRecord(email){ // sample async action
   // return new Promise(resolve => setTimeout(() => resolve(v * 2), 100));

    return new Promise((resolve, reject) => {
    	console.log("emai is....."+email)

    	Todo.findOneAndUpdate({"email":email}, {"Topics":Topics}, (err,data) => {
    if (err) {
        console.log("Failed to upedat");
        reject (err)
    }
    else{

      resolve(data);
    }
    //console.log("Succeeded to update: " + posts[idx].title);
    
});
		
});
}
// map over forEach since it returns
var emailIDs;
var actions= emailIDs.map(fn);// run the function over all items

// we now have a promises array and we want to wait for it

var results = Promise.all(actions); // pass array of promises

results.then(data =>{ // or just .then(console.log)
    console.log(data)
    callback(data)
    } // [a, 4, 6, 8, 10]
);
}

