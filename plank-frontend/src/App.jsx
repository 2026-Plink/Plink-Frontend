import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TeamCreate from "./components/team_create";
import Login from "./pages/login";
import HomePage  from "./pages/homePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/team-create" element={< TeamCreate />} />
          <Route path="/login" element={ <Login/> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
