import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import SubmitForm from './pages/SubmitForm';
import './App.css';
import {toast,ToastContainer} from "react-toastify"

function App() {
  return (
<>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit-form" element={<SubmitForm />} />
      </Routes>
      <Footer />
    </Router>
    <ToastContainer/>
</>
    
  );
}

export default App;
