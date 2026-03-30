import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TeamCreate from "./components/team_create";
import Login from "./pages/login";
import HomePage from "./pages/homePage";
import Schedule from "./components/schedule";
import Signup from "./pages/signup";
import Project from "./components/project";
import Chat from "./components/chat";
import MyPage from "./components/mypage";

/* 🔥 추가 */
import Alarm from "./components/alarm";
import Setting from "./components/setting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/team-create" element={<TeamCreate />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/project" element={<Project />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mypage" element={<MyPage />} />

        {/* 🔥 추가된 라우트 */}
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </Router>
  );
}

export default App;