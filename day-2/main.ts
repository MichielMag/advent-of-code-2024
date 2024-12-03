import { readFileSync } from 'fs';

const data = readFileSync('./day-1/input.txt', 'utf8');

const [left, right] = data.split('\n').reduce<number[][]>(
	(prev, cur) => {
		const s = cur.split(/\s+/);
		return [
			[...prev[0], parseInt(s[0])],
			[...prev[1], parseInt(s[1])],
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

const sum = left.map(x => (amounts[x] ?? 0) * x).reduce((p, c) => p + c);

console.log(sum);
