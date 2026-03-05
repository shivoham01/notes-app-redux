import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify';
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App