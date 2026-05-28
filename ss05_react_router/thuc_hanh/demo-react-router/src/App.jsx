import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PostPage from "./pages/PostPage.jsx";
import PostDetailPage from "./pages/PostDetailPage.jsx";
import Navbar from "./components/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {

  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/posts" element={<PostPage />} />
              <Route path="/posts/:id" element={<PostDetailPage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
