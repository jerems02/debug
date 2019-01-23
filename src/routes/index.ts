import * as express from 'express';
let router = express.Router();

router.get('/', function(req, res, next) {
    console.error('oh oh')
    res.end('test')
    //res.render('index', { title: 'Demo debug' });
});

export default router;