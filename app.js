const express = require('express');
const path = require('path');
const fs = require('fs');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./libs/menu').middleware);

// define routes here
app.use('/', require('./routes/index'));

app.use(function (req, res, next) {
  const uri = `docs${req.originalUrl}`;

  fs.stat(`views/${uri}.pug`, function (err, stats) {
    if (err) {
      console.log(err, stats);
      return next();
    }

    res.render(uri, function (err, html) {
      if (err) {
        console.error(err);

        return res.render('error', {
          error: { status: 500, stack: err.toString() },
          message: `Compile error: ${err.msg}`,
          description: `Line ${err.line}, Column ${err.column}`
        });
      }

      res.send(html);
    });
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
