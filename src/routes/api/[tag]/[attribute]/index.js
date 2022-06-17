export async function get({params}) {
    const {tag, attribute} = params
    return {
        body: `should return info about ${tag}/${attribute}`
    }
}