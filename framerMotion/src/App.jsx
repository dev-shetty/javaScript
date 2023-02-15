import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Normal from "./components/Normal"
import Scroll from "./components/Scroll"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Normal />} />
          <Route path="/scroll" element={<Scroll />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
