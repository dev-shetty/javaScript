import Homepage from "./Main Components/Homepage";
import "./App.css";
import JokePage from "./Main Components/JokePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jokes" element={<JokePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
