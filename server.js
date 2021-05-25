const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cloudinary = require('cloudinary').v2

dotenv.config({
  path: './config.env'
})

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD)
const PORT = process.env.PORT || 3000

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET 
});

app.listen(PORT, () => {
    console.log('App started on port 8000')
})