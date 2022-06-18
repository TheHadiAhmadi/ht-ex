import minibase from "$lib/minibase"

export async function get({params}) {
    const {tag, attribute} = params
    return {
        body: `should return examples for ${tag}/${attribute}`
    }
}

export async function post({request, params}) {
    const {tag, attribute} = params
    const {content} = await request.json() 

    const body = await minibase.insert('examples', {
        tag,
        attribute,
        content
    })

    return {
        body: {
            status: 200,
            body,
            message: `should add new example for ${tag}/${attribute}`
        }
    }
}