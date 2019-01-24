
import * as express from 'express';
import * as moviesService from '../services/movies';

let router = express.Router();

router.get('/',  (req, res) => {
    res.end('Films');
});
router.get('/detail/:id',   async(req, res) => {
    let movieId = req.params.id;
    let movieName =  moviesService.findMovie(movieId);
    res.end('Nom du film: ' , movieName);

});

export default router;
