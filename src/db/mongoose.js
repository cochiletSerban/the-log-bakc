const mongoose = require('mongoose')

const connectionUrl = 'mongodb://test:test123@ds137404.mlab.com:37404/piky'
mongoose.connect(connectionUrl, {useNewUrlParser: true, useCreateIndex: true})