function reducer(previous, current)
{
	return previous+current;
}

function mapFunc(value)
{
	if(Object.prototype.hasOwnProperty.call(value, 'quack'))
	{
		return 1;
	}
	else {
		return 0;
	}
}

function duckCount() {
	return Object.values(arguments).map(mapFunc).reduce(reducer,0);
}

module.exports = duckCount;
let notDuck = Object.create({quack: true});
let duck = {quack: true};
let otherDuck = {quack: 'hello'};
let noQuack = {value: true};

console.log('Objects and strings passed',duckCount(duck, 'asd',otherDuck) === 2);
console.log('Passing variable that doesnt inherit from Object.prototype',duckCount(duck, notDuck,otherDuck) === 2);
console.log('Passing object with no quack',duckCount(duck, notDuck,noQuack) === 1);
