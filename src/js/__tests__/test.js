import matchers from '../app';

const inputData = [
	{ name: 'мечник', health: 10 },
	{ name: 'маг', health: 100 },
	{ name: 'лучник', health: 80 },
];
const outputData = [
	{ name: 'маг', health: 100 },
	{ name: 'лучник', health: 80 },
	{ name: 'мечник', health: 10 },
];

test('testing health toEqual level sorting', () => {
	const result = matchers(inputData);
	expect(result).toEqual(outputData);
});

test('testing health toBe level sorting', () => {
	const result = matchers(inputData);
	expect(result).not.toBe(outputData);
});
