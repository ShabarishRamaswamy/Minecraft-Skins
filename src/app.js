// Importing the required modules
const express = require('express')
const app = express()
const hbs = require('hbs')
const PORT = process.env.PORT || 5000
const viewsPath = 'templates/views'
const partialsPath = 'templates/partials'

// Condifuring various express app requirements
app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setting HandleBars
hbs.registerPartials(partialsPath)

// Routes
const usernameRouter = require('./routers/playerDB')
app.use(usernameRouter)


// Deploying the local server or on the Port of a Production Server
app.listen(PORT, () => {
    console.log(`The App has started on Port ${PORT}`)
})