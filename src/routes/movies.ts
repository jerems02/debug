import * as express from 'express';
import * as moviesService from '../services/movies';

let router = express.Router();

router.get('/',  (req, res) => {
    res.end('Films');

});

router.get('/detail/:id',   (req, res) => {
    let movieId = req.params.id;
    try {
        throw Error('mince alors');
    } catch (err) {
        console.log(err);
    }

    // let movieName =  moviesService.findMovie(movieId);
    res.end('Nom du film: ' );

});

export default router;
