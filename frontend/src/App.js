import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ScrollToSection from "./components/ScrollToSesction";
import Company from "./pages/Company";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import RoyalHouse from "./pages/RoyalHouse";
import LVT from "./pages/LVT";
import VinylFlooring from "./pages/VinylFlooring";

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-divisions" element={<Company />} />
        <Route path="/royal-house" element={<RoyalHouse />} />
        <Route path="/lvt" element={<LVT />} />
        <Route path="/vinyl-flooring" element={<VinylFlooring />} />
      </Routes>
      <FloatingWhatsapp />
    </Router>
  );
}

export default App;
