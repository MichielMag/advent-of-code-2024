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

const amounts = right.reduce<Record<number, number>>((prev, cur) => {
	const x = {
		...prev,
		[cur]: prev[cur] !== undefined ? prev[cur] + 1 : 1,
	};
	return x;
}, {});

const suma = left.reduce(
	(prev, cur, index) => prev + Math.abs(cur - right[index]),
	0
);

const sumb = left.map(x => (amounts[x] ?? 0) * x).reduce((p, c) => p + c);

console.log('part 1:', suma);
console.log('part 2:', sumb);
