
export const findMovie = (id) => {
    const movies = {
        1: "La grande vadrouille",
        2: "Le gendarme de St Tropez",
        3: "Les goonies"
    }
    const name = movies[id];
    return name;
}
