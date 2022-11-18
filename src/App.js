import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <div className="App justify-center">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
