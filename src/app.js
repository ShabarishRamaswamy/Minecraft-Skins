// Importing the required modules
const express = require('express')
const app = express()
const hbs = require('hbs')
const PORT = process.env.PORT || 5000
const viewsPath = 'templates/views'

// Condifuring various express app requirements
app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setting HandleBars
hbs.registerPartial('templates/views', function(err){})

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Hello Everyone' });
})

// Deploying the local server
app.listen(PORT, () => {
    console.log(`The App has started on Port ${PORT}`)
})