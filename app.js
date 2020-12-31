'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
	if (memo.has(n)) {
		return memo.get(n);
	}
	const calcuratedValue = fib(n - 2) + fib(n - 1);
	memo.set(n ,calcuratedValue);
	return calcuratedValue;
}

const length = 40;
for (let i = 0; i <= length; i++) {
	console.log("i: " + i + " -> " + fib(i));
}

