import { readFileSync } from 'fs';

const data = readFileSync('./day-1/input.txt', 'utf8');

const [left, right] = data.split('\n').reduce<number[][]>(
	(prev, cur) => {
		const s = cur.split(/\s+/);
		return [
			[...prev[0], parseInt(s[0])].sort(),
			[...prev[1], parseInt(s[1])].sort(),
		];
	},
	[[], []]
);
const sum = left.reduce(
	(prev, cur, index) => prev + Math.abs(cur - right[index]),
	0
);
console.log(sum);
