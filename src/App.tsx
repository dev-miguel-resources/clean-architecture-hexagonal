import { FC, useEffect } from 'react'
import { GetAllAchiviementsQry } from './features/achiviements/application/get-all-achiviements-qry'
import { container } from "./core/dependency-injection/container"
import logo from './logo.svg'
import './App.css'

const App: FC = () => {

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const getAllAchiviementsQry = container.resolve(GetAllAchiviementsQry)
    const results = await getAllAchiviementsQry.execute()
    console.log(results)
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App


