
export const findMovie = (id) => {
    const movies = {
        1: "La grande vadrouille",
        2: "Le gendarme de St Tropez",
        3: "Les goonies"
    }
    const name = movies[id];
    /*const name = await new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('ici: ', movies[id]);
            throw Error('une erreur asynchrone');
        }, 1000);
    });*/
    //console.log('et là name: ', name);
    return name;
}
