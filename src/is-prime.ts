function isPrime(num: number)	{
	if (num <= 1)
		return false;
	if (num == 2)
		return true;
	let squ: number = Math.sqrt(num);
	for (let div: number = 2; div < squ; div++)	{
		if (num % 2 == 0)
			return false;
	}
	return true;
}

for (let i: number = 1; i < 20; i++)	{
	console.log(i + (isPrime(i) ? ": prime" : ""));
}