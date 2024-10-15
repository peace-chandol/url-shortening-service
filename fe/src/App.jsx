import './App.css'
import GenerateShortUrlComponent from './components/GenerateShortUrlComponent'
import RedirectComponent from './components/RedirectComponent'
import TableUrlComponent from './components/TableUrlComponent'

function App() {

  return (
    <>
        <div className='container'>
            <h1>URL SHORTENING</h1>

            <RedirectComponent />
            <GenerateShortUrlComponent />
            <TableUrlComponent />

        </div>
        
    </>
  )
}

export default App
