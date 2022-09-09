import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EventFragment from "./pages/EventFragment";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllMenus from "./pages/AllMenus";
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
