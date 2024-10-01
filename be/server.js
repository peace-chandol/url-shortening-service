const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const connectDB = require('./config/dbConn')

connectDB()

app.use('/shortening', require('./routes/shorteningRoute'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))