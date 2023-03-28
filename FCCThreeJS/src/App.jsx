import DispaySection from "./components/DisplaySection"
import Jumbotron from "./components/Jumbotron"
import Nav from "./components/Nav"
import SoundSection from "./components/SoundSection"

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DispaySection /> 
    </div>
  )
}

export default App
