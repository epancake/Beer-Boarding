var express = require('express');
var router = express.Router();
var db = require('../db/knex.js')
const knex = require('knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('movie').select('*')
    .then(function(data){
      console.log(data)
    })

})

module.exports = router;
