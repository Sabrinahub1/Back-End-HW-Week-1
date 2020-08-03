var inquirer = require("inquirer");
var skw = require('fs');
const Hello = require('../greetings.js')
Hello ()
function userQuestions(){}

inquirer
.prompt([
    {
    type: "input",
    message: "What is your user name?",
    name: "username"
    },
    {
    type: "input",
    message: "What is your git hub name?",
    name: "githubName"
    },
    {  
    type: "password",
    message: "What is your password?",
    name: "password"
    },
    {
    type: "password",
    message: "Re-enter password to confirm:",
    name: "confirm"
    }


])
 // verify if both entered passwords are same if not re-enter all credintials
.then(function(data) {
    if (data.password !== data.confirm){

    console.log("Passwords do not match, Please re-enter your information");
    userQuestions ();
    }else{
    var skw = require("fs");
// store user entered information in the file  userPassword.txt
    skw.writeFile("./userPassword.txt",data.username + " : " + data.
githubName + " : " + data.password, function(err) {
     // fs.appendFile("userPassword.txt",data.username + " : " + data.password, 

if (err) {return console.log(err);
    }else{
        console.log("Success!");
    }
});
}
})
userQuestions();
