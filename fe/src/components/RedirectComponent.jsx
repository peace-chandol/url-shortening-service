import { useState } from "react"
import axios from "axios"


const RedirectComponent = () => {
    const [shortUrl, setShortUrl] = useState('')
    const [errorText, setErrorText] = useState(null)
    const [result, setResult] = useState('')

    function handleRedirectLongUrlBtn(e) {
        setShortUrl(e.target.value)
    }

    async function handleGetLongUrl() {
        if (!shortUrl) return setErrorText('Please Fill Short URL')
        try {
            const url = `http://localhost:3000/shortening/${shortUrl}`
            const response = await axios.get(url)
            const data = response.data
            setResult(data.longUrl)
            clearForm()
        } catch (err) {
            console.error(err)
        }
    }

    function clearForm() {
        setShortUrl('')
        setErrorText('')
    }


    return (
        <div className="redirect-container">
            <h2>Redirect</h2>
            <h3>Enter short URL</h3>
            <div>{ errorText }</div>
            <div>
                <input type="text" onChange={handleRedirectLongUrlBtn} value={shortUrl} />
                <button onClick={handleGetLongUrl} className="btn">Find</button>
            </div>
            <div className="little-text">{ result }</div>
        </div>
    )
}

export default RedirectComponent