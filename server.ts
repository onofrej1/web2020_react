//const express = require('express')
const express = require('express');

const next = require('next')

const port = 3000; //parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();
  console.log('after prepare');

  /*server.get('/test', (req, res) => {
    return app.render(req, res, '/test', req.query)
  });*/

  server.get('/a', (req, res) => {
    console.log('a page');
    return app.render(req, res, '/a', req.query)
  });

  server.get('/b', (req, res) => {
    console.log('b page');
    return app.render(req, res, '/b', req.query)
  });

  server.all('*', (req, res) => {
    console.log('all');
    return handle(req, res)
  });

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

export {}
