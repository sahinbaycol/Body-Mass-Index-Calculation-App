import { useState } from 'react'

import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './pages/Form';
import Result from './pages/Result';

function App() {
  

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        height: "100vh",
        background: "linear-gradient(135deg, rgba(238,226,192,1) 0%, rgba(201,159,213,1) 50%, rgba(180,223,199,1) 100%)"
      }}
    >
      <Navbar />
      <Content />
    </div>
  )
}

const Content = () => {
  return (
    <>
      <Routes>
        <Route  path='/' element={<Form />}/>
        <Route path='result' element={<Result/>} />
      </Routes>
      <Outlet />
    </>
  );
};

export default App
