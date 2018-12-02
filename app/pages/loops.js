let k = 10;

while (k >= 0) {
	if (k % 2 === 0) console.log(k);
	--k;
}



const isAdmin = true;

(isAdmin) ? 
	alert('Привет, Admin!') : alert('Ты точно не Admin');



let userName = prompt('Введите логин', '');

if (userName == 'Admin') {

  let adminPass = prompt('Введите пароль', '');

  if (adminPass == 'qwerty') {
    alert( 'Добро пожаловать, Admin' );
  } else if (adminPass == null) { // (*)
    alert( 'Отказано в доступе' );
  } else {
    alert( 'Введённый пароль неправильный' );
  }

} else if (userName == 'User') {
	let userPass = prompt('Введите пароль', '');

  if (userPass == '12345') {
    alert( 'Добро пожаловать, Admin' );
  } else if (userPass == null) { // (*)
    alert( 'Отказано в доступе' );
  } else {
    alert( 'Введённый пароль неправильный' );
  };

} else {
  alert( 'Такого логина нет в системе' );
}



const age = +prompt('Сколько тебе лет?', '12');

switch (age) {
	case '12': 
	alert('Слишком мало :(');
	break;

	case '16': 
	alert('Почти достаточно :[');
	break;

	case '18': 
	alert('Вот сейчас в самый раз! :)');
	break;

	default: 
	alert('Возраст не определен %)');
}

