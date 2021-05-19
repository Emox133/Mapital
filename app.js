const express = require('express')
const app = express()
const cors = require('cors')
const circleRouter = require('./routers/circleRouter')
const eventRouter = require('./routers/eventRouter')
const rectangleRouter = require('./routers/rectangleRouter')
const polylineRouter = require('./routers/polylineRouter')
const polygonRotuer = require('./routers/polygonRouter')
const markerRouter = require('./routers/markerRouter')

// CORS
app.use(cors())

app.use(express.json())

// ROUTERS
app.use('/api/v1/events', eventRouter)
app.use('/api/v1/polylines', polylineRouter)
app.use('/api/v1/polygons', polygonRotuer)
app.use('/api/v1/rectangles', rectangleRouter)
app.use('/api/v1/circles', circleRouter)
app.use('/api/v1/markers', markerRouter)

module.exports = app