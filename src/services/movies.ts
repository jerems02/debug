export const findMovie = async(id) => {
    const movies = {
        1: "La grande vadrouille",
        2: "Le gendarme de St Tropez",
        3: "Les goonies"
    }

    const name = await new Promise((resolve) => {
        setTimeout(() => {
            console.log('ici: ', movies[id]);
            resolve(movies[id]);
        }, 1000);
    });
    console.log('et là name: ', name);
    return name;
}
