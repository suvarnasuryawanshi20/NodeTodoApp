var mongoose=require('mongoose');

var User_profile = mongoose.model('User_profile', {
  
    userType :{Type: String},
    username  :{Type: String},
    password: {Type: String},
    preferredfirstname : {Type: String},
    preferredlastname: {Type: String},
    cellphonenumber : {Type: Number},
    email: {Type: String},
    Topics:{Type: Array}
    /*"providesCellPhones" : "Yes",
    "policynumber" : "3549232",
    "firsttimeuser" : "",
    "progressId" : "kjdksadjkadj",
    "settingsId" : "lsafjdslkfdsflf",
    "voice" : "on",
    "claimNumber" : "0001736297",
    "claimfaultrating" : "100%",
    "lastcompletedtopic" : "",
    "lastcompletedsubtopic" : "",
    "topicInprogress" : "",
    "loginCount" : 19.0,
    "lastlogin" : "03/09/19",
    "completedsubtopics" : [],
    "completedtopics" : [],
    "assignedtopics" : [],
    "agency" : "ESSER HAYES INS GROUP INC"*/
  }
);

module.exports={User_profile};


  