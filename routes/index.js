const carRoute = require('./car')
const uvRoute = require('./uv')
const rainRoute = require('./rain')

function route(app) {
    app.use('/api/rain', rainRoute)
    app.use('/api/uv', uvRoute)
    app.use('/api/car', carRoute)
}

module.exports = route
