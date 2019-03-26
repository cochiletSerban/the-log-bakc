const express = require('express')
require('./db/mongoose') // the files loads


const app = express()
const port = 3000

app.use(express.json())
require("./routers")(app)

app.use(require('./middleware/error'));

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
