import Homepage from "./Main Components/Homepage";
import "./App.css";
import JokePage from "./Main Components/JokePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FunFactPage from "./Main Components/FunFactPage";
import ISROpage from "./Main Components/ISROpage";
import SpaceCrafts from "./Components/ISRO/SpaceCrafts/SpaceCrafts";
import Centres from "./Components/ISRO/Centres/Centres";
import Launchers from "./Components/ISRO/Launchers/Launchers";
import DictionaryPage from "./Main Components/DictionaryPage";
import PincodePage from "./Main Components/PincodePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jokes" element={<JokePage />} />
          <Route path="/funfacts" element={<FunFactPage />} />
          <Route path="/isro">
            <Route index element={<ISROpage />} />
            <Route path="/isro/spacecrafts" element={<SpaceCrafts />} />
            <Route path="/isro/centres" element={<Centres />} />
            <Route path="/isro/launchers" element={<Launchers />} />
          </Route>
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/pincode" element={<PincodePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
