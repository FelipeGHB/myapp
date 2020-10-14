var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Felipe' });
  res.send('This website was developed by Felipe!!')
  res.send('It is still under development...')
  res.end()
});

module.exports = router;
