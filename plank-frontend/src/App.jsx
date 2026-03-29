//packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import TeamCreate from "./components/team_create";
import Login from "./pages/login";
import HomePage  from "./pages/homePage";
import TeamJoin from "./components/team_join";
import TeamPage from "./components/team_page";
import SchedulePage from "./components/schedule_page";
import TeamDetailPage from "./components/detail_page";
import ChatPage from "./components/chat_page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/team-create" element={< TeamCreate />} />
          <Route path="/login" element={ < Login /> }/>
          <Route path="/team-join" element={ <TeamJoin /> } />
          <Route path="/team-page" element={< TeamPage />} />
          <Route path="/schedule-page" element={ <SchedulePage /> } />
          <Route path="/chat" element={ <ChatPage /> } />
          <Route path="/detail-page" element={ <TeamDetailPage /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
