import { useState } from "react"
import axios from "axios"

const GenerateShortUrlComponent = () => {
    const [longUrl, setLongUrl] = useState('')

    async function handleCreateShortUrl() {
        try {
            const url = 'http://localhost:3000/shortening'
            const data = { longUrl }
            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            clearForm()
            window.location.reload()
        } catch (err) {
            console.error(err)
        }
    }

    function handleCreateShortUrlBtn() {
        if (longUrl) {
            handleCreateShortUrl()
        }
        else console.log('empty input')
    }

    function clearForm() {
        setLongUrl('')
    }

    function handleInputLongUrl(e) {
        setLongUrl(e.target.value)
    }

    return (
        <div className="generate-url-container">
            <h2>Generate Short URL</h2>
            <h3>Enter Long URL</h3>
            <div>
                <input type="text" id='generateShortUrl' value={longUrl} onChange={handleInputLongUrl}/>
                <button id='createShortUrlBtn' onClick={handleCreateShortUrlBtn} className="btn">Create</button>
            </div>
        </div>
    )
}

export default GenerateShortUrlComponent