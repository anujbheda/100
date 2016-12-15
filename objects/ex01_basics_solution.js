var exercise = {};
var obj = {
	name   : 'peter parker',
	email  : 'peter@mit.edu',
	age    : 18,
	school : 'MIT'
};


exercise.addProperty = function(){
	obj.city = 'boston';
	return obj;		
};

exercise.changeProperty = function(){
	obj.school = 'bu';
	return obj;		
};


exercise.addObject = function(){
	obj.sports = {fall : ['tennis','soccer'], spring : ['baseball','squash']};
	return obj;		
};


// share work
module.exports = exercise;

