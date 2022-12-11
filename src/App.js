import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import UploadPage from "./Pages/UploadPage";
import BuildPage2 from "./Pages/BuildPage2";
import ResumePage from "./Pages/ResumePage";
import BuildPage3 from "./Pages/BuildPage3";
import LinkedInUpload from "./Pages/LinkedInUpload";

function App() {
  return (
    <div className="App justify-center">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/UploadPage" element={<UploadPage />} />
            <Route path="/BuildPage2" element={<BuildPage2 />} />
            <Route path="/BuildPage3" element={<BuildPage3 />} />
            <Route path="/LinkedInUpload" element={<LinkedInUpload/>} />
            <Route path="/ResumePage" element={<ResumePage />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
