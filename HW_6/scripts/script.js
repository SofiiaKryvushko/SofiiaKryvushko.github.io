const userLogin = prompt("Enter login ");
const login = 'admin';
const password = 'admin';
let question;
if (userLogin === login) {
const userPassword = prompt("Enter password ");
do{
    if (userPassword === password) {
        console.log("Welcome!");
    }
    else {
  console.log("Wrong password!!!");
try{
        question = prompt("Try one more time?");
        if (question === 'yes') {
            userPassword = prompt("Enter password ");
        }
        else {
            console.log("Wrong password!!!");
        }
    }catch(err){}
    }
}while(userPassword !== password && question === 'yes');
}
else{
console.log("Wrong Login");
}