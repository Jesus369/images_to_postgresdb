## Built With:
1. Node JS
2. Express JS
3. Sequelize
4. Mustache Express
5. Multer

### Install node_modules
###### In command line
npm init
###### Require Path
...const path = require('path')
...This will help us with grabbing the extensions of the uploaded image. (jpg, pgn, etc)

### Install and Set up our view engine
###### In Command Line
npm install mustache-express --save
###### In app.js
* const mustacheExpress = require('mustache-express')
* app.engine('mustache', mustacheExpress())
* app.set('view engine', 'mustache')

### Install Express
###### In Command Line
npm install express --save
###### In app.js
const express = require('express')
const app = express()

### Install Body-Parser
###### In Command Line
npm install body-parser --save
###### In app.js
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

### Install Multer
###### In Command Line
npm install --save multer
###### In app.js
const multer = require('multer')
