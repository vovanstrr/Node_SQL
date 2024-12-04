require('dotenv').config()

const express = require('express')
const { Sequelize } = require('sequelize');
// const sequelize = require('./db')
const models = require('./models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)
// app.get('/', (req, res) => {
        
//     res.status(200).json({ message: 'Working!' })
// })

const sequelize = new Sequelize('online_store', 'postgres', 'secret', {
    host: 'localhost',
    dialect: 'postgres',
});

const start = async () => {


    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
        console.log('Connection has been established successfully.');

    } catch (e) {
        console.log(e);
        console.log('error!!');


    }
}

start()

