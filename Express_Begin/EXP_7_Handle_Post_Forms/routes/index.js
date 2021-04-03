var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  const data = {
      name: 'Index',
      date: 'April 22, 2018',
      profiles: [
        {name: 'Steven', city:'Sydney', profession:'doctor'},
        {name: 'Mark', city:'Perth', profession:'lawyer'},
        {name: 'Michelle', city:'Sydney', profession:'programmer'}
      ]
  }

  res.render('index', data)
})

router.get('/json', (req, res, next) => {
  const data = {name:'David', location:'Sydney'}
  res.json(data)
})

router.get('/html', (req, res, next) => {
  const html = '<html><h1 style="color:red">This is an HTML response!</h1></html>'
  res.send(html)
})

router.get('/query', (req, res, next) => {
  const query = req.query
  res.json(query)
})

router.get('/params/:name/:location/:occupation', (req, res, next) => {
  const params = req.params
  res.json({params: params})
})

module.exports = router;
