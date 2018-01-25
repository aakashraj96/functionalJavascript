const sum = require('./index');

test('adding 1+2 equals 3', function(){
	expect(sum(1, 2)).toBe(3);
});
test('adding 10+20 equals 30', function(){
	expect(sum(10, 20)).toBe(30);
});
