import './App.css'
import { useState } from "react";
import { Portfolio } from './components/Portfolio'
import { Toolbar } from './components/Toolbar'

function App() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"]
  const [filter, setState] = useState("All");
  const onSelectFilter = (filter) => {
    setState(filter)
  }

  return (
    <>
      <div>
        <Portfolio/>
      </div>
    </>
  )
}

export default App
