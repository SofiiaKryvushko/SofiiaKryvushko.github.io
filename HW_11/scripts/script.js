'use strict'
function findUser() {
    let userLog = prompt("Enter login ");
    if (userLog in users) {
        let hiddenPassword = users[userLog];
        checkpassword(hiddenPassword);
    } else {
        createUser(userLog);
    }
}

function checkpassword(hiddenPassword) {
    let userPassword = prompt("Enter password");
    let question;
    do {
        if (hiddenPassword === userPassword) {
            alert('welcome!');
            break;
        } else {
            question = confirm("Try one more time?");
            if (question) {
                userPassword = prompt("Enter password");
            }
        }
    } while (question && userPassword !== hiddenPassword);
}

function createUser(userLog) {
    let question = alert('Create user?');
    let newUserPassword;
    if (question) {
        alert("((");
    } else {
        newUserPassword = prompt('Enter password');
        users[userLog] = newUserPassword;
        console.log(users);
    }
    findUser();
}

let users = {
    'user3': 'user3',
    'user4': 'user4',
    'user5': 'user5',
};

findUser();