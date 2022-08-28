import Homepage from "./Main Components/Homepage";
import "./App.css";
import JokePage from "./Main Components/JokePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ISROpage from "./Main Components/ISROpage";
import SpaceCrafts from "./Components/ISRO/SpaceCrafts/SpaceCrafts";
import QuotePage from "./Main Components/QuotePage";
import Centres from "./Components/ISRO/Centres/Centres";
import Launchers from "./Components/ISRO/Launchers/Launchers";
import DictionaryPage from "./Main Components/DictionaryPage";
import PincodePage from "./Main Components/PincodePage";
import AboutPage from "./Main Components/AboutPage";
import ContactPage from "./Main Components/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jokes" element={<JokePage />} />
          <Route path="/quotes" element={<QuotePage />} />
          <Route path="/isro">
            <Route index element={<ISROpage />} />
            <Route path="/isro/spacecrafts" element={<SpaceCrafts />} />
            <Route path="/isro/centres" element={<Centres />} />
            <Route path="/isro/launchers" element={<Launchers />} />
          </Route>
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/pincode" element={<PincodePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
