const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {console.log("Get request is called")
  res.send('HELLO WORLD! Hello World! Hello World!! Hello World!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

