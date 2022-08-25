import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Map from "./components/contact/Map";
import EventFragment from "./components/Events/EventFragment";
import EventsHeader from "./components/Events/EventsHeader";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import AllMenus from "./components/menu/AllMenus";
import MenuTop from "./components/menu/MenuTop";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const isSidebarOpen = useSelector(state => state.navbar.isNavbarOpen)
  return (
    <div className="app">
      <Router>
        <Navbar />
        {isSidebarOpen && <Sidebar />}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/menu" element={<AllMenus />} />
          <Route path="/events" element={<EventFragment/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
