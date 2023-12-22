var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//Creating Flash Message 
router.get('/flash', function(req, res) {
  req.flash("age",25);
  req.flash("Name","ShivamSharma");
  res.send("Flash Message Created !");
});

//Reading Flash Messages
router.get('/flashread', function(req, res) {
  console.log(req.flash("age"),req.flash("Name"));
  res.send("Read FLASH MSG on console !");
});

module.exports = router;
