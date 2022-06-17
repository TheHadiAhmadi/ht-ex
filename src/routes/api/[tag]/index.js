export async function get({params}) {
    const {tag} = params
    return {
        body: `should return info about ${tag}`
    }
}