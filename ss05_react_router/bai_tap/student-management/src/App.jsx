import './App.css'
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StudentListPage from "./pages/StudentListPage.jsx";
import StudentFormPage from "./pages/StudentFormPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {getAllMajor, getAllStudents} from "./services/studentService.js";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <BrowserRouter>
          <ToastContainer />
          <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/students" element={<StudentListPage />} />
            <Route path="/students/add" element={<StudentFormPage />} />
            <Route path="/students/:id/edit" element={<StudentFormPage />} />
        </Routes>
          <Footer />
      </BrowserRouter>
  )
}

export default App
