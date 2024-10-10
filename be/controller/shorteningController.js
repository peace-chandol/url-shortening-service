const connectDB = require('../config/dbConn')

const getAllUrl = async (req, res) => {
    try {
        const mySqlDB = await connectDB()
        const sql = `SELECT * FROM data`
        await mySqlDB.query(sql, (error, result) => {
            if (error) throw error
            return res.json(result)
        })

    } catch (err) {
        console.error('error message', err.message)
        res.status(500).json({ message: 'error by server' })
    }
}

const createNewUrl = async (req, res) => {
    const { longUrl } = req.body

    try {   
        const mySqlDB = await connectDB()
        let num = 0
        await mySqlDB.query('SELECT MAX(id) as maxId FROM data', async (error, result) => {
            if (error) throw error
            result = result[0].maxId
            if (result) num = result + 1

            const shortUrl = `https:short.url_${num}`
            const sql = `INSERT INTO data (longUrl, shortUrl) VALUES ('${longUrl}', '${shortUrl}')`
            await mySqlDB.query(sql, (err, result) => {
                if (err) throw err
                return res.json({ message: 'insert successful' })
            })
            
        })

        
    } catch (err) {
        console.error('error message', err.message)
        res.status(500).json({ message: 'error by server' })
    }
}

const deleteUrl = async(req, res) => {
    const { id } = req.body

    try {
        const mySqlDB = await connectDB()
        const sql = `DELETE FROM data WHERE id = ${id}`
        await mySqlDB.query(sql, (err, result) => {
            if (err) throw err
            return res.json({ message: 'deleted' })
        })
    } catch (err) {
        console.error('error message', err.message)
        res.status(500).json({ message: 'error by server' })
    }
}

const getLongUrl = async(req, res) => {
    const { shortUrl } = req.params

    try {
        const mySqlDB = await connectDB()
        const sql = `SELECT * FROM data WHERE shortUrl = '${shortUrl}'`
        await mySqlDB.query(sql, (err, result) => {
            if (err) throw err
            if (result.length === 0) return res.json({ longUrl: 'Not Found' })
            return res.json({ longUrl: result[0].longUrl })
        })
    } catch (err) {
        console.error('error message', err.message)
        res.status(500).json({ message: 'error by server' })
    }
}



module.exports = {
    getAllUrl,
    createNewUrl,
    deleteUrl,
    getLongUrl
}