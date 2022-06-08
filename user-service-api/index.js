const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>  res.json([
  {
    name: 'Shahnawaz',
    email: 'shahnawaz@gmail.com'
  },
  {
    name: 'Alice',
    email: 'alice@gmail.com'
  },
  {
    name: 'Jake',
    email: 'jake@gmail.com'
  },
  {
    name: 'Maria',
    email: 'maria@yahoo.com'
  }
]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})