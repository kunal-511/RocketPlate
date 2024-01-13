
import Home from "./Screens/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Screens/Login";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<Login />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
