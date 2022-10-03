export default function matchers(data) {
	data.sort((a, b) => (a.health > b.health ? 1 : -1)).reverse();
	return data;
}
