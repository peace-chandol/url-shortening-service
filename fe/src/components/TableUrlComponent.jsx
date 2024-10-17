import { useState, useEffect } from "react"
import axios from "axios"

const TableUrlComponent = () => {
    const [allURLs, setAllURLs] = useState([])


    useEffect(() => {
        getURLs()
        console.log(allURLs)
    }, [])

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

    async function handleDeleteBtn(e) {
        const id = e.target.id.split('_')[1]

        try {
            const response = await axios.delete('http://localhost:3000/shortening', { data: { id } })
            console.log('Data deleted successfully:', response.data)
        } catch (error) {
            console.error('Error deleting data:', error)
        }

        await getURLs()
    }

    return (
        <div className="table-url-container">
            <h2>Table Show Relationship between Long Url and Short Url</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Long Url</th>
                            <th>Short Url</th>
                            <th>Delete Row</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allURLs.map((url) => (
                            <tr key={url.id}>
                                <td><a href={url.longUrl}>{url.longUrl}</a></td>
                                <td><a href={url.longUrl}>{url.shortUrl}</a></td>
                                <td>
                                    <button id={`deleteBtn_${url.id}`} onClick={handleDeleteBtn}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default TableUrlComponent