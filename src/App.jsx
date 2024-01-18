
import Home from "./Screens/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Navbar from "./Components/Navbar"
function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<SignUp />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
