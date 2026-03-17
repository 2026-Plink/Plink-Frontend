import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TeamCreate from "./components/team_create";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/schedule" element={""} />
          <Route path="/team-create" element={< TeamCreate />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
