import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ScrollToSection from "./components/ScrollToSesction";
import Company from "./pages/Company";

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/companies" element={<Company />} />
      </Routes>
    </Router>
  );
}

export default App;
