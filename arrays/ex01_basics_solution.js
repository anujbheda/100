
var exercise = {};

exercise.length = function(){

	var fruits = ['Apple', 'Banana', 'Pear', 'Orange'];
	var length = 0;

	// solution
	length = fruits.length;

	return length;
};

exercise.concatenate = function(){
	var list = ['It','was','the','best','of','times,','it','was','the','worst','of','times'];
	var text = '';

	// solution
	for (var i = 0; i < list.length; i++) {
		text += list[i] + ' ';
	}

	return text;
};


exercise.add = function(){

	var fruits = ['Banana', 'Pear', 'Orange'];

	// solution
	fruits.push('Mango');

	return fruits;
};

// package API
module.exports = exercise;

