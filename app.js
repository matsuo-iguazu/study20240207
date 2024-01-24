const express = require('express')
const app = express()
// const port = 3001
const port = 8080

app.get('/', (req, res) => {console.log("Get request is called")
  res.send('Hello World! Yo_oY')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

