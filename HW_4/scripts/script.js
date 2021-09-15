const name = prompt('Enter name', 'Oleg');
const age = prompt('Enter age', '18');
const role = prompt('Enter role');
const occupation = prompt('Enter occupation');

let menu = prompt('1 - name defined, age>18\n' +
    '2 - role not admin or occupation not ceo\n' +
    '3 - occupation if defined, if not - role\n' +
    '4 - name - defined & age>18 / role - admin\n' +
    '5 - role - not admin & name - defined');
switch (menu) {

    case'1':
        alert((name === 'undefined') && (age > 18));//+
        break;
    case'2':
        alert((role === 'Admin' || role === 'admin') || (occupation === 'CEO' || occupation === 'ceo'));
        break;//+
    case'3':
        alert(occupation ?? undefined ? occupation: role);//+
        break;
    case'4':
        alert((((name ?? undefined) && (age > 18)) || (role === 'admin' || role === 'Admin')));
        break;
    case'5':
        alert(((role !== 'admin') && (name ?? 'undefined')) ? age : false);
        break;
    default:
        break;
}

