function reverseString(str: string)	{
	let reversed: string = "";
	for (let char of str)	{
		reversed = char + reversed;
	}
	return reversed;
}

console.log("input: test")
console.log("output: " + reverseString("test"));