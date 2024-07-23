const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/views/home.html');
  })

  app.get('/home/me', (req, res) => {
    res.send('Hello ')
  })

  app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/views/about.html');
  })
  

  app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/views/contact.html');
  })

  app.get('/edit/:id/', (req, res) => {
    var edits = req.params.id;
    res.send('Hello Edit'+ edits)
  })
  
  app.get('/search/', (req, res) => {
    var mysearch = req.query.q;
    res.send('Hello search is'+ q)
  })

  app.get('/process', (req, res) => {
    var a = parseInt(req.query.dsa);
    var b = parseInt(req.query.python);
    var c = parseInt(req.query.java);
    var d = parseInt(req.query.ml);
    var e = parseInt(req.query.os);
    var sum = a + b + c + d + e;
    var avg = sum / 5;
     var msg=''
    if(a < 27 || b < 27 || c < 27 || d < 27 || e < 27)
    {
      msg = "You Failed"
    }
    else
    {
      msg = "You Passed"
    }

    var ans = `<table border = '1'>
    <tr> <th>Subject</th> <th>Marks</th></tr>
    <tr> <td>DSA<td> ${a}</tr>
    <tr> <td>Python<td>${b}</tr>
    <tr> <td>Java<td>${c}</tr>
    <tr> <td>ML<td>${d}</tr>
    <tr> <td>OS<td>${e}</tr>
    <tr> <td>AVERAGE<td>${avg}</tr>
    <tr> ${msg}</tr>
    `
    res.send(ans)
  })


  app.get('*', (req, res) => {
    res.send('404: ERROR FOUND')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})