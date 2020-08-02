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
const craftarRouter = require('./routers/craftar')
app.use(usernameRouter)
app.use(craftarRouter)



// Deploying the local server
app.listen(PORT, () => {
    console.log(`The App has started on Port ${PORT}`)
})