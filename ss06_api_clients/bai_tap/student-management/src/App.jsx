import { useState } from 'react'
import './App.css'
import {getAllStudents} from "./services/studentService.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import StudentListPage from "./pages/StudentListPage.jsx";
import {ToastContainer} from "react-toastify";
import StudentFormPage from "./pages/StudentFormPage.jsx";

function App() {
  const [students, setStudents] = useState(getAllStudents());

  return (
    <BrowserRouter>
        <ToastContainer />
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} ></Route>
        <Route path={'/students'} element={<StudentListPage />}></Route>
          <Route path={'/students/add'} element={<StudentFormPage />}></Route>
          <Route path={'/students/:id/edit'} element={<StudentFormPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
