import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import BuildPage from "./Pages/BuildPage";
import UploadPage from "./Pages/UploadPage";
import PreviewPage from "./Pages/PreviewPage";

function App() {
  return (
    <div className="App justify-center">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/UploadPage" element={<UploadPage />} />
            <Route path="/BuildPage" element={<BuildPage />} />
            <Route path="/PreviewPage" element={<PreviewPage />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
