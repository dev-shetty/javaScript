import "./App.css"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import useLocalStorage from "./hooks/useLocalStorage"

function App() {
  const [id, setId] = useLocalStorage("id")
  return <>{id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}</>
}

export default App
