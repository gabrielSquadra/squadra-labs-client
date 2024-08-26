import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//HOOKS
import usePopup from "./hooks/usePopup";
import Posts from './components/layout/Posts';
import Footer from './components/layout/Footer';

function App() {

  const { Popup, showPopup, hidePopup, fixScroll } = usePopup();

  return (
    <div className={`app-wrapper${fixScroll}`}>
      <Router>
        <div>
          <Home showPopup={showPopup} hidePopup={hidePopup} />
          <Posts />
          <Footer/>
        </div>
      </Router>
      <Popup />
    </div>
  );
}

export default App;
