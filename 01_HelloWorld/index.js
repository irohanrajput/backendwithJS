const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('take this response for you get request at port: 3000, helllllloooooooo worldddd...')
})

app.listen(port, () => {
    console.log('yo, I am listening at port:',port)
})