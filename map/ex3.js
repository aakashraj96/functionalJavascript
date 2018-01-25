function doubleAll(numbers) {
	let result = numbers.map(element => element*2);
	return result;
}

function arrayEqual(first,second)
{
	if(first.length === second.length)
	{
		for(let i=0;i<first.length;i++)
		{
			if(first[i] !== second[i])
			{
				return false;
			}
		}
		return true;
	}
	else
	{
		return false;
	}
}

console.log('Testing doubleAll call',arrayEqual(doubleAll([1,2,3]),[2,4,6]));
console.log('Passing decimal values [1.1,2.2,3.3] expected output: [2.2,4.4,6.6]',arrayEqual(doubleAll([1.1,2.2,3.3]),[2.2,4.4,6.6]));


module.exports = doubleAll;
