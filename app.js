const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const express = require('express')
const models = require('./models')
const multer = require('multer')
const path = require('path')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use('/uploads', express.static('uploads'))
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', './views')

const storage = multer.diskStorage({
  // Creates a folder in your directory which will hold the uploaded images
  destination : './uploads/',
  filename : ( (req, file, cb) => {
    // callback function. "null" because we don't want an error, otherwise replace "null" with "err"
    // fiendname refers to the "myimage" name of input file in the index.mustache template
    // concatenate the current time + an extension name "jpeg, png, etc"
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  })
})

// Init Upload
const upload = multer({
  // for storage we want to use the "storage" constant defined above
  storage : storage
  // "single" because it is a single file. "array" for an array of images
  // "myimage" is the name of input file in index.mustache.
})


app.get('/', (req,res) => {
  res.redirect('/upload')
})

app.get('/upload', (req,res) => {
  models.images.findAll().then((image) => {
    res.render('index', {
      image : image
    })
  })
})

app.post('/upload', upload.single('myimage'), (req,res) => {
  models.images.create({
    image : req.file.path
  })
})
app.listen(3000, () => {
  console.log('You are live on channel 3000')
})
