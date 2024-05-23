import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SnapShortDiv from './components/SnapShortDiv';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookmarkDiv from './components/BookmarkDiv';
import NewCommingPage from './components/NewCommingPage';
import ContextProvider from './Context API/ContextProvider';

function App() {
  document.body.style.backgroundColor = "#ADD8E6";
  const [message, setMessage] = useState('');
  const [main, setMain] = useState('');
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const click = () => {
    setMain(message);
  }
  return (
    <>
      <ContextProvider>
        <Router>
          <Navbar handleChange={handleChange} click={click} />
          <Routes>
            <Route exact path="/" element={<SnapShortDiv key='random' message='all'/>} />
            <Route exact path="/newImages" element={<SnapShortDiv message={main} key={main}/>} />
            <Route exact path="/bookmark" element={<BookmarkDiv message={main.length === 0 ? 'all' : main} key={main}/>} />
            <Route exact path="/newCommingPage" element={<NewCommingPage />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
