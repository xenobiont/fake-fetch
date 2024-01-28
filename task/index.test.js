import { fetchData } from './index.js';

describe('fetchData', () => {
	test('returns correct data for a valid URL', async () => {
		expect.assertions(1);

		expect(
			fetchData('https://jsonplaceholder.typicode.com/posts'),
		).resolves.toContainEqual({
			userId: expect.any(Number),
			title: expect.any(String),
			id: expect.any(Number),
			body: expect.any(String),
		});

		// const result = await fetchData('https://jsonplaceholder.typicode.com/posts');

		// expect(result).toContainEqual({
		// 	userId: expect.any(Number),
		// 	title: expect.any(String),
		// 	id: expect.any(Number),
		// 	body: expect.any(String),
		// });

		// expect(result).toEqual(expect.any(Array))
	});

	test('rejects the Promise for an invalid URL', async () => {
		expect.assertions(2);

		try {
			const result = fetchData('invalid-url');
		} catch (e) {
			expect(e).toBeInstanceOf(URIError);
			expect(e.message).toBe('URL is not valid');
			expect(e).toHaveProperty('message', 'URL is not valid');
		}

		// await expect(fetchData('invalid-url')).rejects.toThrow();
		// await expect(fetchData('invalid-url')).rejects.toThrow('URL is not valid');
		// await expect(fetchData('invalid-url')).rejects.toBeInstanceOf(URIError);
	});
});
