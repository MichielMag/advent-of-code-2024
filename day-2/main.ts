import { readFileSync } from 'fs';

const data = readFileSync('./day-2/input.txt', 'utf8');
const AtMost = 3;
const AtLeast = 1;

enum Direction {
	Undecided,
	Increasing,
	Decreasing,
}

function isSafe(line: string): number {
	const values = line.split(/\s+/);
	let dir = Direction.Undecided;
	for (let i = 0; i < values.length - 1; ++i) {
		const cur = parseInt(values[i]);
		const next = parseInt(values[i + 1]);

		const sum = cur - next;

		if (sum > AtMost || sum < AtMost * -1) {
			console.log(`[❌] ${line} | ${cur} ${next} - Too Much`);
			return 0;
		}

		if (sum === 0) {
			console.log(`[❌] ${line} | ${cur} ${next} - Zero`);
			return 0;
		}

		if (
			(sum < 1 &&
				dir !== Direction.Increasing &&
				dir !== Direction.Undecided) ||
			(sum > 1 &&
				dir !== Direction.Decreasing &&
				dir !== Direction.Undecided)
		) {
			console.log(`[❌] ${line} | ${cur} ${next} - Wrong Direction`);
			return 0;
		}

		if (sum > 1) {
			dir = Direction.Decreasing;
			console.log(`${sum} caused Decreasing because ${cur} - ${next}`);
		} else if (sum < 1) {
			dir = Direction.Increasing;
			console.log(`${sum} caused Increasing because ${cur} - ${next}`);
		}
	}
	console.log(`[✔️] ${line} - Yay`);
	return 1;
}

const safetyReport = data
	.split('\n')
	.map(isSafe)
	.reduce((acc, curr) => acc + curr, 0);

console.log(safetyReport);
