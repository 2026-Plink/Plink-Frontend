import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import createIcon from "../assets/add_icon.svg";
import symbol from "../assets/symbol.svg";
import home from "../assets/home.svg";
import in_home from "../assets/in_home.svg";
import calendar from "../assets/calendar.svg";
import in_calendar from "../assets/in_calendar.svg";
import pen from "../assets/pen.svg";
import in_pen from "../assets/in_pen.svg";
import chat from "../assets/chat.svg";
import in_chat from "../assets/in_chat.svg";
import icon from "../assets/icon.svg";
import in_icon from "../assets/in_icon.svg";
import alarm from "../assets/alarm.svg";
import logo from "../assets/logo.svg";

import { GlobalStyle } from "../pages/homePage";
import { Menu } from "../pages/homePage";
import { Symbol } from "../pages/homePage";
import { Logo } from "../pages/homePage";
import { Item } from "../pages/homePage";
import { Background } from "../pages/homePage";
import { Icon } from "../pages/homePage";
import { Text } from "../pages/homePage";
import { Line } from "../pages/homePage";
import { PageLayout } from "./schedule_page";
import { ContentBox } from "./schedule_page";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const Title = styled.h1`
  margin: 0;
  color: #2c2c2c;
  font-size: 34px;
  font-weight: 700;
`;

const SubTitle = styled.p`
  margin: 8px 0 0;
  color: #888;
  font-size: 15px;
`;

const CreateButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  border: 1px solid #c0da58;
  background: #fff;
  box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
`;

const CreateIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 0 28px 28px;
`;

const Card = styled.div`
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.08);
  padding: 24px;
`;

const CardTitle = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 700;
`;

const Meta = styled.div`
  margin-top: 14px;
  color: #70716f;
  font-size: 15px;
  line-height: 1.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 18px;
`;

const ActionButton = styled.button`
  flex: 1;
  border: none;
  border-radius: 14px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

const EditButton = styled(ActionButton)`
  background: #4a90e2;
  color: #fff;
`;

const DeleteButton = styled(ActionButton)`
  background: #d9534f;
  color: #fff;
`;

const DetailButton = styled.button`
  margin-top: 18px;
  border: none;
  border-radius: 14px;
  padding: 12px 16px;
  background: #c0da58;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const CopyButton = styled.button`
  margin-left: 8px;
  border: none;
  background: none;
  color: #c0da58;
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
`;

const Message = styled.div`
  padding: 0 28px 20px;
  color: ${({ $error }) => ($error ? "#d9534f" : "#7e9640")};
  font-size: 14px;
  font-weight: 600;
`;

const EmptyState = styled.div`
  margin: 0 28px 28px;
  padding: 40px 20px;
  border: 1px dashed #d8d8d7;
  border-radius: 20px;
  text-align: center;
  color: #90908f;
`;

export default function TeamPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState("");

  const menus = [
    { path: "/homePage", icon: home, activeIcon: in_home, label: "HOME" },
    { path: "/schedule", icon: calendar, activeIcon: in_calendar, label: "SCHEDULE" },
    { path: "/project", icon: pen, activeIcon: in_pen, label: "PROJECT" },
    { path: "/chat", icon: chat, activeIcon: in_chat, label: "CHATTING" },
    { path: "/mypage", icon: icon, activeIcon: in_icon, label: "MY PAGE" }
  ];

  const handleDeleteTeam = async (teamId) => {
    if (!window.confirm("정말로 이 팀을 삭제하시겠습니까?")) return;

    const token = localStorage.getItem("token");
    try {
      await axios.delete(`/api/teams/${teamId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTeams(teams.filter(team => team.id !== teamId));
      setError("");
    } catch (err) {
      setError("팀 삭제 실패: " + (err.response?.data?.error || "알 수 없는 오류"));
    }
  };

  const loadTeams = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("로그인이 필요합니다.");
      return;
    }

    try {
      const response = await axios.get("/api/teams", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTeams(response.data.teams || []);
      setError("");
    } catch (loadError) {
      setError(loadError.response?.data?.error || "프로젝트 목록을 불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    loadTeams();
  }, []);

  return (
    <>
      <GlobalStyle />
      <PageLayout>
        <Menu>
          <Symbol className="symbol" src={symbol} />
          <Logo className="logo" src={logo} />
          {menus.map((m) => (
            <Item key={m.path} onClick={() => navigate(m.path)}>
              <Background $active={location.pathname === m.path} />
              <Icon src={location.pathname === m.path ? m.activeIcon : m.icon} />
              <Text className="text">{m.label}</Text>
            </Item>
          ))}
          <Line />
          <Item onClick={() => navigate("/notification")}>
            <Icon src={alarm} />
            <Text className="text">NOTIFICATIONS</Text>
          </Item>
        </Menu>

        <ContentBox>
          <Header>
            <div>
              <Title>프로젝트</Title>
              <SubTitle>생성한 프로젝트를 바로 확인하고 상세 페이지로 이동할 수 있어요.</SubTitle>
            </div>
            <ButtonContainer>
              <CreateButton type="button" onClick={() => navigate("/team-create")}>
                <CreateIcon src={createIcon} />
                프로젝트 생성
              </CreateButton>
              <CreateButton type="button" onClick={() => navigate("/team-join")}>
                팀 참여
              </CreateButton>
            </ButtonContainer>
          </Header>

          {error ? <Message $error>{error}</Message> : null}

          {teams.length ? (
            <Grid>
              {teams.map((team) => (
                <Card key={team.id}>
                  <CardTitle>{team.name}</CardTitle>
                  <Meta>마감일: {team.deadline || "-"}</Meta>
                  <Meta>
                    팀 코드: {team.teamCode || "-"}
                    {team.teamCode && (
                      <CopyButton onClick={() => {
                        navigator.clipboard.writeText(team.teamCode);
                        alert("팀 코드가 클립보드에 복사되었습니다!");
                      }}>
                        복사
                      </CopyButton>
                    )}
                  </Meta>
                  <Meta>인원: {team.personnel || 0}명</Meta>
                  <Meta>리더: {team.dpLeader || "-"}</Meta>
                  <ButtonGroup>
                    <EditButton
                      onClick={() => {
                        localStorage.setItem("teamId", String(team.id));
                        navigate("/detail-page", {
                          state: {
                            team: {
                              id: team.id,
                              title: team.name,
                              period: team.deadline,
                              code: team.teamCode,
                              charge: team.dpLeader,
                              members: [],
                              description: team.dpName || team.name,
                              team_explan: [],
                              team_deadline: []
                            },
                            editMode: true
                          }
                        });
                      }}
                    >
                      수정
                    </EditButton>
                    <DeleteButton
                      onClick={() => handleDeleteTeam(team.id)}
                    >
                      삭제
                    </DeleteButton>
                  </ButtonGroup>
                  <DetailButton
                    type="button"
                    onClick={() => {
                      localStorage.setItem("teamId", String(team.id));
                      navigate("/detail-page", {
                        state: {
                          team: {
                            id: team.id,
                            title: team.name,
                            period: team.deadline,
                            code: team.teamCode,
                            charge: team.dpLeader,
                            members: [],
                            description: team.dpName || team.name,
                            team_explan: [],
                            team_deadline: []
                          }
                        }
                      });
                    }}
                  >
                    상세 보기
                  </DetailButton>
                </Card>
              ))}
            </Grid>
          ) : (
            <EmptyState>아직 생성된 프로젝트가 없어요. 오른쪽 위 버튼으로 첫 프로젝트를 만들어보세요.</EmptyState>
          )}
        </ContentBox>
      </PageLayout>
    </>
  );
}
