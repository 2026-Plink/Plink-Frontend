import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

// 이미지 임포트 (경로 확인 필수)
import symbol from '../assets/symbol.svg';
import in_home from '../assets/in_home.svg';
import calendarIcon from '../assets/calendar.svg';
import pen from '../assets/pen.svg';
import chat from '../assets/chat.svg';
import icon from '../assets/icon.svg';
import alarm from '../assets/alarm.svg';
import setting from '../assets/setting.svg';
import logo from '../assets/logo.svg';
import profile from '../assets/profile.svg';

/* --- Global Styles (Font 포함) --- */
export const GlobalStyle = createGlobalStyle`
    /* Pretendard 폰트 불러오기 */
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

    * {
        /* Pretendard를 최우선으로 설정 */
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #FFF;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* 스크롤바 커스텀 (선택 사항) */
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background: #EEE;
        border-radius: 10px;
    }
`;

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

/* --- Sidebar Menu Styles --- */
export const Menu = styled.div`
    height: 100vh;
    width: 130px;
    background-color: #F9F9F8;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 10;

    &:hover {
        width: 300px;
    }
    &:hover .text {
        opacity: 1;
        transform: translateX(0);
    }
    &:hover .symbol {
        display: none;
    }
    &:hover .logo {
        display: block;
    }
`;

export const Symbol = styled.img`
    height: 70px;
    width: 62px;
    margin-top: 65px;
    margin-bottom: 50px;
`;

export const Logo = styled.img`
    width: 132px;
    height: 65px;
    margin-top: 65px;
    margin-bottom: 50px;
    display: none;
`;

export const Item = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    position: relative;
    cursor: pointer;
`;

export const Background = styled.div`
    width: 52px;
    height: 52px;
    position: absolute;
    left: 37px;
    top: 50%;
    transform: translateY(-50%);
    background: #FFF;
    border-radius: 50%;
    box-shadow: ${({ $active }) =>
        $active ? "0 0 20px rgba(192, 218, 88, 0.4)" : "none"};
    display: ${({ $active }) => ($active ? "block" : "none")};
    transition: 0.3s;

    ${Menu}:hover & {
        width: calc(100% - 40px);
        height: 52px;
        border-radius: 8px;
        left: 20px;
    }
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 21px;
    z-index: 2;
`;

export const Text = styled.span`
    margin-left: 40px;
    font-size: 16px;
    color: #333;
    font-weight: 500;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(-10px);
    transition: 0.3s;
    z-index: 2;
`;

export const Line = styled.div`
    width: 60px;
    height: 1px;
    background-color: #E5E5E5;
    margin: 30px 0;
    transition: 0.3s;
    ${Menu}:hover & { width: 240px; }
`;

/* --- Layout Sections --- */
const MainContent = styled.div`
    flex: 1;
    margin-left: 130px;
    display: grid;
    grid-template-columns: 380px 1fr 350px; /* 좌측 달력 | 중앙 메인 | 우측 알림 */
    height: 100vh;
`;

/* 1. Left Section (Profile & Calendar) */
const LeftPanel = styled.div`
    border-right: 1px solid #EDEDED;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
`;

const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

const ProfileImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #E2E2E2;
    object-fit: cover;
`;

const ProfileInfo = styled.div`
    margin-left: 20px;
    .name { font-size: 22px; font-weight: 700; color: #333; display: block; }
    .job { font-size: 14px; color: #999; margin-top: 4px; display: block; }
`;

const CalendarPlaceholder = styled.div`
    margin-top: 20px;
    text-align: center;
    img { width: 100%; border-radius: 12px; }
`;

const MiniSchedule = styled.div`
    margin-top: 40px;
    .item {
        background: #FDFDFD;
        border: 1px solid #F0F0F0;
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 12px;
        display: flex;
        align-items: flex-start;
        span { font-weight: 700; color: #C0DA58; margin-right: 15px; }
        div p:first-child { font-size: 13px; font-weight: 600; color: #333; }
        div p:last-child { font-size: 12px; color: #999; margin-top: 4px; }
    }
`;

/* 2. Middle Section (Timeline & Tasks) */
const MiddlePanel = styled.div`
    padding: 60px 50px;
    overflow-y: auto;
`;

const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #333;
`;

const SubTitle = styled.p`
    color: #AAA;
    font-size: 14px;
    margin-bottom: 30px;
`;

const WeekSlider = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    padding: 0 20px;
    .day {
        text-align: center;
        color: #CCC;
        font-weight: 500;
        cursor: pointer;
        &.active { color: #C0DA58; position: relative; 
            &::after { content: '●'; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); font-size: 8px; }
        }
    }
`;

const TaskSection = styled.div`
    margin-top: 40px;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        h3 { font-size: 18px; color: #333; letter-spacing: 1px; font-weight: 700; }
        button { background: none; border: none; font-size: 24px; cursor: pointer; color: #CCC; line-height: 1; }
    }
`;

const TaskItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    font-size: 15px;
    color: #444;
    cursor: pointer;
    &::before {
        content: '';
        width: 18px;
        height: 18px;
        border-radius: 4px;
        background-color: ${({ $color }) => $color || "#E0E0E0"};
        margin-right: 15px;
        display: inline-block;
    }
`;

/* 3. Right Section (Notifications) */
const RightPanel = styled.div`
    border-left: 1px solid #EDEDED;
    padding: 60px 30px;
    background-color: #FFF;
`;

const AlarmCard = styled.div`
    background: #FFF;
    border: 1px solid #F0F0F0;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 15px;
    box-shadow: ${({ $highlight }) => $highlight ? "0 4px 15px rgba(192, 218, 88, 0.15)" : "none"};
    border-left: ${({ $highlight }) => $highlight ? "4px solid #C0DA58" : "1px solid #F0F0F0"};

    h4 { font-size: 14px; margin-bottom: 8px; display: flex; justify-content: space-between; color: #333;
         span { font-weight: 400; color: #BBB; font-size: 11px; } }
    p { font-size: 12px; color: #777; line-height: 1.5; }
`;

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <Container>
            <GlobalStyle />
            
            {/* 사이드바 메뉴 */}
            <Menu>
                <Symbol className="symbol" src={symbol} />
                <Logo className="logo" src={logo} />
                <Item onClick={() => navigate("/homePage")}>
                    <Background $active={true} />
                    <Icon src={in_home} />
                    <Text className="text">HOME</Text>
                </Item>
                <Item onClick={() => navigate("/schedule")}>
                    <Background $active={false} />
                    <Icon src={calendarIcon} />
                    <Text className="text">SCHEDULE</Text>
                </Item>
                <Item onClick={() => navigate("/project")}>
                    <Background $active={false} />
                    <Icon src={pen} />
                    <Text className="text">PROJECT</Text>
                </Item>
                <Item onClick={() => navigate("/chat")}>
                    <Background $active={false} />
                    <Icon src={chat} />
                    <Text className="text">CHATTING</Text>
                </Item>
                <Item onClick={() => navigate("/mypage")}>
                    <Background $active={false} />
                    <Icon src={icon} />
                    <Text className="text">MY PAGE</Text>
                </Item>
                <Line />
                <Item onClick={() => navigate("/alarm")}>
                    <Icon src={alarm} />
                    <Text className="text">NOTIFICATIONS</Text>
                </Item>
                <Item onClick={() => navigate("/setting")}>
                    <Icon src={setting} />
                    <Text className="text">SETTING</Text>
                </Item>
            </Menu>

            <MainContent>
                {/* 1. 왼쪽 패널: 프로필 & 달력 */}
                <LeftPanel>
                    <ProfileSection>
                        <ProfileImg src={profile} alt="Profile" />
                        <ProfileInfo>
                            <span className="name">이민지</span>
                            <span className="job">디자이너</span>
                        </ProfileInfo>
                    </ProfileSection>
                    
                    <div style={{borderTop: '1px solid #EEE', paddingTop: '30px'}}>
                        <CalendarPlaceholder>
                            <p style={{color: '#333', fontWeight: 'bold', marginBottom: '20px'}}>March</p>
                            <div style={{fontSize: '12px', color: '#AAA', padding: '40px 0', background: '#F9F9F9', borderRadius: '12px'}}>달력 라이브러리 영역</div>
                        </CalendarPlaceholder>
                    </div>

                    <MiniSchedule>
                        <div className="item">
                            <span>15</span>
                            <div>
                                <p>UI/UX 개선 프로젝트</p>
                                <p>UX 리서치</p>
                            </div>
                        </div>
                        <div className="item">
                            <span>18</span>
                            <div>
                                <p>UI/UX 개선 프로젝트</p>
                                <p>그래픽 디자인</p>
                            </div>
                        </div>
                    </MiniSchedule>
                </LeftPanel>

                {/* 2. 중앙 패널: 타임라인 & 할 일 */}
                <MiddlePanel>
                    <Title>Today</Title>
                    <SubTitle>3월 3주차</SubTitle>
                    
                    <WeekSlider>
                        <span style={{cursor: 'pointer'}}>&lt;</span>
                        <div className="day active">15</div>
                        <div className="day">16</div>
                        <div className="day active">17</div>
                        <div className="day">18</div>
                        <div className="day">19</div>
                        <div className="day active">20</div>
                        <span style={{cursor: 'pointer'}}>&gt;</span>
                    </WeekSlider>

                    <TaskSection>
                        <div className="header">
                            <h3>PROJECT</h3>
                            <button>+</button>
                        </div>
                        <TaskItem $color="#C0DA58">[UIUX 개선 프로젝트] 기획서 작성</TaskItem>
                        <TaskItem $color="#E0E0E0">[UIUX 개선 프로젝트] 그래픽 디자인</TaskItem>
                        <TaskItem $color="#E0E0E0">[키오스크 개선 프로젝트] 휴리스틱 평가</TaskItem>
                        <p style={{color: '#CCC', fontSize: '14px', marginLeft: '33px'}}>할 일을 입력해 주세요</p>
                    </TaskSection>

                    <TaskSection>
                        <div className="header">
                            <h3>TODO</h3>
                            <button>+</button>
                        </div>
                        <TaskItem $color="#C0DA58">[시각디자인] 주제선정</TaskItem>
                        <TaskItem $color="#C0DA58">[시각디자인] 브랜드 핵심가치</TaskItem>
                        <TaskItem $color="#E0E0E0">[DD] 기존 모바일 앱 분석</TaskItem>
                    </TaskSection>
                </MiddlePanel>

                {/* 3. 오른쪽 패널: 알림 */}
                <RightPanel>
                    <h3 style={{fontSize: '20px', marginBottom: '30px', fontWeight: '700'}}>알림</h3>
                    
                    <AlarmCard $highlight={true}>
                        <h4>프로젝트 마감 <span>안 읽음</span></h4>
                        <p>UI/UX 개선 프로젝트의 마감일이 3일 남았습니다.</p>
                    </AlarmCard>

                    <AlarmCard>
                        <h4>피드백 <span>읽음</span></h4>
                        <p>피드백이 추가되었습니다.</p>
                    </AlarmCard>

                    <AlarmCard>
                        <h4>채팅 <span>읽음</span></h4>
                        <p>채팅이 왔습니다.</p>
                    </AlarmCard>
                </RightPanel>
            </MainContent>
        </Container>
    );
}