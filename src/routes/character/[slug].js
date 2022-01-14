import mm from '../../data/a-heroic-death/mm';

export async function get (request) {
    const { slug } = request.params;
    const character = mm.getCharacter(slug);
    if (character) {
        return { status: 200, body: character };
    }
    else {
        return { status: 404, body: "code not found" };
    }
}