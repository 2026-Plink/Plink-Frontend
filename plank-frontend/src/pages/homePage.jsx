import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

// 이미지 임포트 (경로 확인 필수)
import symbol from '../assets/symbol.svg';
import in_home from '../assets/in_home.svg';
import calendar from '../assets/calendar.svg';
import pen from '../assets/pen.svg';
import chat from '../assets/chat.svg';
import icon from '../assets/icon.svg';
import alarm from '../assets/alarm.svg';
import setting from '../assets/setting.svg';
import logo from '../assets/logo.svg';
import profile from '../assets/profile.svg';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #FFF;
    }
`;

const Container = styled.div`
    display: flex;
`;

/* --- Sidebar Menu Styles (기존과 동일) --- */
export const Menu = styled.div`
    height: 100vh;
    width: 130px;
    background-color: #F9F9F8;
    transition: 0.3s ease-in-out;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        width: 316px;
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
    background-color: #F9F9F8;
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
        $active ? "0 0 30px 2px rgba(192, 218, 88, 0.30)" : "none"};
    display: ${({ $active }) => ($active ? "block" : "none")};
    transition: 0.3s;

    ${Menu}:hover & {
        width: 272px;
        height: 52px;
        border-radius: 8px;
        left: 20px;
    }
`;

export const Icon = styled.img`
    width: 28px;
    height: 28px;
    margin-left: 21px;
    z-index: 2;
`;

export const Text = styled.span`
    margin-left: 40px;
    font-size: 16px;
    color: #333;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(-10px);
    transition: 0.3s;
`;

export const Line = styled.div`
    width: 70%;
    height: 1px;
    background-color: #C9C9C8;
    margin: 40px 0;
`;

/* --- Main Content Area Styles (수정됨) --- */
const Home = styled.div`
    flex: 1;
    background-color: white;
    margin-left: 130px; 
    height: 100vh;
    display: flex;
    flex-direction: column; /* 세로로 쌓기 위해 column으로 변경 */
`;

const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    padding-top: 60px;
    padding-left: 56px;
    margin-bottom: 25px; /* 선과의 간격 */
`;

const Profile = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
`;

const InfoWrapper = styled.div`
    display: flex;
    align-items: baseline;
    margin-left: 30px;
`;

const User = styled.p`
    font-weight: 600;
    font-size: 26px;
`;

const Position = styled.p`
    font-weight: 400;
    font-size: 16px;
    margin-left: 10px;
    color: #70716F;
`;

// 프로필과 텍스트 전체 아래를 가로지르는 긴 선
const Home_Line = styled.div`
    width: 350px; /* 화면 너비에 맞게 조절 */
    height: 1px;
    background-color: #C9C9C8;
    margin-left: 36px; /* 프로필 이미지와 시작선 맞춤 */
    margin-top: 20px;
`;

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <Container>
            <GlobalStyle />

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
                    <Icon src={calendar} />
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

            <Home>
                {/* 프로필 + 사용자 정보를 묶는 영역 */}
                <HeaderSection>
                    <Profile src={profile} alt="User Profile" />
                    <InfoWrapper>
                        <User>사용자</User>
                        <Position>역할</Position>
                    </InfoWrapper>
                </HeaderSection>
                
                {/* 그 아래에 긴 가로선 */}
                <Home_Line />
            </Home>
        </Container>
    );
}