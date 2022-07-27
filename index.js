const express = require('express')

const app = express()

const format = require('date-format')
const { response } = require('express')
const res = require('express/lib/response')
const req = require('express/lib/request')

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello world from LCO</h1>")
})

app.get('/api/v1/instagram', (req, res) => {

    const instaSocial = {
        "username": "pudasaini_samrat",
        "followers": 1000,
        "follows": 500,
        "date": format.asString('yyyy-MM-dd | hh:mm:ss', new Date())
    }

    res.status(200).json({ instaSocial })
})

app.get('/api/v1/facebook', (req, res) => {

    const facebookSocial = {
        "username": "samratiam",
        "followers": 2000,
        "follows": 100,
        "date": format.asString('yyyy-MM-dd | hh:mm:ss', new Date())
    }

    res.status(200).json({ facebookSocial })
})


app.get('/api/v1/linkedin', (req, res) => {

    const linkedinSocial = {
        "username": "samratiam",
        "followers": 80,
        "follows": 40,
        "date": format.asString('yyyy-MM-dd | hh:mm:ss', new Date())
    }

    res.status(200).json({ linkedinSocial })
})

//Returns whatever in the URL
app.get('/api/v1/:token', (req, res) => {
    res.status(200).json({ params: req.params.token })
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
