function upperCaser(input)
{
	return input.toUpperCase();
}

console.log('Testing the function',upperCaser('hello')==='HELLO');
console.log('Numbers inside a string',upperCaser('123a')==='123A');
console.log('Special characters ',upperCaser('!@ad')==='!@AD');
