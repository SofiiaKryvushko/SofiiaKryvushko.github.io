const userLogin = prompt("Enter login ");
const login = 'admin';
const password = 'admin';
let question;
if (userLogin === login) {
    let userPassword = prompt("Enter password ");
    do {
        if (userPassword === password) {
            console.log("Welcome!");
            break;
        } else {
            console.log("Wrong password!!!");
            question = prompt("Try one more time?");
            if (question === 'yes') {
                userPassword = prompt("Enter password ");
            } else if (question === 'no') {
                break;
            }
        }
    } while (question === 'yes' || userPassword !== password);
} else {
    console.log("Wrong Login");
}
