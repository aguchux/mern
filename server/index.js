import express from 'express'
import path from 'path'
import apiRoutes from './routes/apiRoutes.js'
import redis from 'redis'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()



const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

// Have Node serve the files for our built React app
const dirname = path.resolve(path.dirname(''));
app.use(express.static(path.join(dirname, '/client/build')));
// Have Node serve the files for our built React app

app.use("/api", apiRoutes)

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.join(dirname, '/client/build', 'index.html'));
})
// All other GET requests not handled before will return our React app

app.post('*', (req, res) => {
    res.status(200).json({})
})

const redisConfig = {
    port: process.env.REDIS_PORT || '14163',
    host: process.env.REDIS_URL || 'localhost',
    password: process.env.REDIS_PASSWORD || 'password'
}
const mongoURI = process.env.MONGO_URL || 'mongodb'

redis.createClient(redisConfig)
    .on('error', (error) => {
        console.log(error.message)
    }).on('connect', () => {
        console.log('Redis Started')
    }).on('ready', () => {
        console.log('Redis is ready')
        mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Mongo Db is connected and ready')
                app.listen(PORT, () => {
                    console.log(`Server running on PORT ${PORT}`)
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    })
