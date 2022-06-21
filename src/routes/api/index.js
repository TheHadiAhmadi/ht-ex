// import minibase from '$lib/minibase';

// export async function get({ params }) {
// 	const [tags, attributes, examples, bc] = await Promise.all([
// 		minibase.get('tags'),
// 		minibase.get('attributes'),
// 		minibase.get('examples'),
// 		minibase.get('bc')
// 	]);

// 	let browsers = {};

// 	bc.map((b) => {
// 		const feature = b.attribute ? b.attribute : b.tag;

// 		browsers[b.tag] ??= {};
// 		browsers[b.tag][feature] ??= {};
// 		browsers[b.tag][feature][b.browser] = b.supports;
// 	});

// 	return {
// 		body: tags
// 			.map((tag) => ({
// 				id: tag.id,
// 				tag: tag.name,
// 				description: tag.description,
// 				attributes: [
// 					{
// 						name: tag.name,
// 						examples: examples
// 							.filter((ex) => ex.tag === tag.name && (!ex.attribute || ex.attribute === tag.name))
// 							.map((ex) => ({ id: ex.id, content: ex.content }))
// 					},
// 					...attributes
// 						.filter((attr) => attr.tag === tag.name)
// 						.map((attr) => ({
// 							id: attr.id,
// 							name: attr.name,
// 							description: attr.description,
// 							examples: examples
// 								.filter((ex) => ex.tag === tag.name && ex.attribute === attr.name)
// 								.map((ex) => ({
// 									id: ex.id,
// 									content: ex.content
// 								}))
// 						}))
// 				],
// 				browsers: browsers[tag.name]
// 			}))
// 			.sort((a, b) => (a.tag.toLowerCase() > b.tag.toLowerCase() ? 1 : -1))
// 	};
// }
import data from './_data-cache.json'
export function get() {
	return {
		body: data
	}
}