
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as path from "path";
import * as serveStatic from 'serve-static';
import indexRouter from './routes/index';
import moviesRouter from './routes/movies';

const app = express();

app.use(serveStatic(__dirname));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/movies', moviesRouter);


// error handler
app.use(function (err, req, res, next) {

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    console.error('error:', err.status || 500);
    res.status(err.status || 500);
    res.render('error');
});

export = app;