export async function get({params}) {
    const {tag, attribute} = params
    return {
        body: `should return examples for ${tag}/${attribute}`
    }
}

export async function post({params}) {
    const {tag, attribute} = params
    return {
        body: `should add new example for ${tag}/${attribute}`
    }
}