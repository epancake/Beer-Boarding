var express = require('express');
var router = express.Router();
const knex = require('knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('questions').join('*')
    .then(function(data){
      console.log(data)
    })

})

module.exports = router;
