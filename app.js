const express = require('express')
const cors = require('cors')
const circleRouter = require('./routers/circleRouter')
const eventRouter = require('./routers/eventRouter')
const rectangleRouter = require('./routers/rectangleRouter')
const polylineRouter = require('./routers/polylineRouter')
const polygonRotuer = require('./routers/polygonRouter')
const markerRouter = require('./routers/markerRouter')
const globalErrorHandler = require('./controllers/errorController')
const os = require('os')
const fileupload = require('express-fileupload')

const app = express();
app.use(cors())

app.use(express.json());

app.use(fileupload({
    useTempFiles: true,
    tempFileDir: os.tmpdir()
}));

// ROUTERS
app.use('/api/v1/events', eventRouter)
app.use('/api/v1/polylines', polylineRouter)
app.use('/api/v1/polygons', polygonRotuer)
app.use('/api/v1/rectangles', rectangleRouter)
app.use('/api/v1/circles', circleRouter)
app.use('/api/v1/markers', markerRouter)

//* All routes that do not exist
app.all('*', (req, res, next) => {
    res.status(404).json({
        message: `The requested route ${req.originalUrl} is not found.`
    })
}); 

app.use(globalErrorHandler)

module.exports = app