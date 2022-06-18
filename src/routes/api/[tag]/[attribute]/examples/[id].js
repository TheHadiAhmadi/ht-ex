import minibase from '$lib/minibase'

export async function put({request, params}) {
    const {content} = request.json();
    const {id} = params;

    minibase.update('examples', id, {content})

    return {
        body: {
            message: "example successfully edited"
        }
    }   
}