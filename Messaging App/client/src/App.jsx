import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import { ContactsProvider } from "./context/ContactsProvider"
import useLocalStorage from "./hooks/useLocalStorage"
import "./App.css"

function App() {
  const [id, setId] = useLocalStorage("id")

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )

  return <>{id ? dashboard : <Login onIdSubmit={setId} />}</>
}

export default App
