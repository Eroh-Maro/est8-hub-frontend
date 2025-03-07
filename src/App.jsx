import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar.jsx";
import 'aos/dist/aos.css';
import AOS from 'aos';
import ScrollToTop from "./pages/ScrollToTop";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Footer from "../components/Footer.jsx";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Adjust the duration as needed
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <Provider store={store}>
    <div className="appContainer">
      <ScrollToTop />
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
    </Provider>
  );
}


export default App
