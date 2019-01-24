
import * as express from 'express';
import * as moviesService from '../services/movies';

let router = express.Router();

router.get('/',  (req, res) => {
    res.end('Films');

});
//todo ggg$
router.get('/detail/:id',   async(req, res) => {
    let movieId = req.params.id;

    /*try {
        let movieName = await moviesService.findMovie(movieId).catch( err => {
            throw (err);
        });
    } catch (err) {
        console.log(err);
    }*/
    let movieName =  moviesService.findMovie(movieId);

    res.end('Nom du film: ' , movieName);

});

export default router;
