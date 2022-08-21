import Homepage from "./Main Components/Homepage";
import "./App.css";
import JokePage from "./Main Components/JokePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FunFactPage from "./Main Components/FunFactPage";
import ISROpage from "./Main Components/ISROpage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jokes" element={<JokePage />} />
          <Route path="/funfacts" element={<FunFactPage />} />
          <Route path="/isro" element={<ISROpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
