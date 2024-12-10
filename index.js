require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
// const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
// app.use(fileUpload({}))
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)
// app.get('/', (req, res) => {
        
//     res.status(200).json({ message: 'Working!' })
// })

// const sequelize = new Sequelize('online_store', 'postgres', 'secret', {
//     host: 'localhost',
//     dialect: 'postgres',
// });

const start = async () => {
    try {
        await sequelize.authenticate()  // Подключение к бд
        // await sequelize.drop()  // удаление всех таблиц
        
        // User.sync() - создает таблицу при отсутствии (существующая таблица остается неизменной)
        // User.sync({ force: true }) - удаляет существующую таблицу и создает новую
        // User.sync({ alter: true }) - приводит таблицу в соответствие с моделью
        await sequelize.sync({ alter: true })   
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
        console.log('Connection has been established successfully.');

    } catch (e) {
        console.log(e);
        console.log('error!!');
    }
}

start()

