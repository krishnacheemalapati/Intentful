const express = require('express')
const multer = require('multer')
const cors = require('cors')
const bodyParser = require('body-parser')

const auth = require('./middleware/auth')
const User = require('./database')
const processSingleTranscript = require('./utils/processTranscript')
const processTranscript = require('./utils/berkesprocessTranscript')

const app = express()
app.use(cors())

// create application/json parser
const jsonParser = bodyParser.json()



const upload = multer()


// create a user
app.post('/createUser', jsonParser, async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const user = new User({ email, password })

    await user.save()
    res.send(user)
})

// log the user in
app.post('/loginUser', jsonParser, async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ token })
    }
    catch (e) {
        res.status(403).send()
    }
})

// log the user out
app.post('/logoutUser', auth, async (req, res) => {
    try {
        const user = req.user
        const token = req.token
        await user.removeAuthToken(token)
        res.sendStatus(200)
    }
    catch (e) {
        res.sendStatus(403)
    }
})


// route for file upload. make sure file is json
app.post('/uploadTranscript', auth, upload.single('file'), async (req, res) => {
    const user = req.user
    const json = JSON.parse(req.file.buffer)

    
    let allPreviousIntents = new Map()

    if(user.intents !== undefined){
        allPreviousIntents = new Map(Object.entries(user.intents));
    }

    const intentsForThisFile = processTranscript(allPreviousIntents, [json])

    if(! allPreviousIntents.has("allIntents")){
        allPreviousIntents.set("allIntents", [intentsForThisFile])
    }
    else{
        allPreviousIntents.set("allIntents", user.intents["allIntents"].push(intentsForThisFile))
    }
    allPreviousIntents.set(req.file.originalname, intentsForThisFile)    


    await user.saveTranscript(req.file.buffer, req.file.originalname, intentsForThisFile)
    await user.saveIntents(allPreviousIntents)
    res.sendStatus(200)
})

// route to get intents for the user requesting
app.get('/getIntents', auth, async (req, res) => {
    try {
        const user = req.user
        res.send(user.intents)
    }

    catch (e) {
        res.sendStatus(403)
    }

})

app.get('/getOneTranscriptIntents', auth, async (req, res) => {
    const name = req.query.name
    const user = req.user
    const transcripts = req.user.transcripts
    for (const obj of transcripts) {
        if (name in obj) {
            res.send(obj.intents)
        }
    }
})

// route to get all the previously uploaded transcript
app.get('/getTranscripts', auth, async (req, res) => {
    try {
        const user = req.user
        const files = user.transcripts
        res.send(files)
    }
    catch (e) {
        res.sendStatus(403)
    }
})


app.listen(8080, () => {
    console.log('server is up')
})
