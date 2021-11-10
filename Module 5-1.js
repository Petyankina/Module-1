let x = +prompt('Введите число: ');

if (typeof x == 'number' && isNaN(x)) {
	console.log('Упс, кажется, вы ошиблись');
} else if (x % 2 == 0) {
	console.log('чётное');
} else {
	console.log('нечётное');
}
