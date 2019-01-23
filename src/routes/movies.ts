import * as express from 'express';

let router = express.Router();

router.get('/',  (req, res) => {
    console.log('ici')
    res.end('');

});

router.get('/test',  (req, res) => {
    console.log('et là')
    res.end('');

});

export default router;
