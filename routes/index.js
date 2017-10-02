const textSearch = require('rx-text-search');
const express = require('express');
const _ = require('lodash');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/search', function (req, res) {
  const query = req.query.q;

  textSearch.findAsPromise(query, '**/*.pug', {cwd: 'views/docs'})
    .then(function (results) {
        results = _.uniqBy(results, 'file');

        results.forEach(function (page) {
          page.uri = '/' + page.file.replace(/\.pug$/, '');

          res.locals.menu.some(function (section) {
            const menuResult = _.find(section.pages, function (p) {
              return p.uri === page.uri;
            });

            if (menuResult) {
              page.menu = menuResult;
              page.section = section.label;
              return true;
            }
          });
        });

        results = _.filter(results, function (result) {
          return !!result.menu;
        });

        res.render('search-results', {
          query,
          results
        });
      }).catch(function (err) {
        res.send(err);
      });
});

module.exports = router;
