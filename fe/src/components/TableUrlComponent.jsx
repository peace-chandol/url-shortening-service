import { useState, useEffect } from "react"
import axios from "axios"

const TableUrlComponent = () => {
    const [allURLs, setAllURLs] = useState([])


    useEffect(() => {
        getURLs()
    },[])

    async function getURLs() {
        try {
            const url = 'http://localhost:3000/shortening'
            const response = await axios.get(url)
            const data = response.data
            setAllURLs(data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <h2>Table Show Relationship between Long Url and Short Url</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Long Url</th>
                            <th>Short Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>Example of Long Url</td>
                            <td>Example of Short  Url</td>
                        </tr> */}
                        {allURLs.map((url) => (
                            <tr key={url.id}>
                                <td>{url.longUrl}</td>
                                <td>{url.shortUrl}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default TableUrlComponent