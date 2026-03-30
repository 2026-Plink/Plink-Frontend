import styled, { createGlobalStyle } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import symbol from '../assets/symbol.svg';
import home from '../assets/home.svg';
import in_home from '../assets/in_home.svg';
import calendar from '../assets/calendar.svg';
import in_calendar from '../assets/in_calendar.svg';
import pen from '../assets/pen.svg';
import in_pen from '../assets/in_pen.svg';
import chat from '../assets/chat.svg';
import in_chat from '../assets/in_chat.svg';
import icon from '../assets/icon.svg';
import in_icon from '../assets/in_icon.svg';
import alarm from '../assets/alarm.svg';
import setting from '../assets/setting.svg';
import logo from '../assets/logo.svg';

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: Pretendard;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #FFF;
    }
`;

const Menu = styled.div`
    height: 100vh;
    width: 130px;
    background-color: #F9F9F8;
    transition: 0.3s;
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

const Symbol = styled.img`
    height: 70px;
    width: 62px;
    margin-top: 65px;
    margin-bottom: 50px;
`;

const Logo = styled.img`
    width: 132px;
    height: 65px;
    margin-top: 65px;
    margin-bottom: 50px;
    display: none;
`;

const Item = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    padding-left: 30px;

    position: relative;
    cursor: pointer;
`;

const Background = styled.div`
    width: 52px;
    height: 52px;

    position: absolute;
    left: 37px; /* 🔥 요청대로 고정 */
    top: 50%;
    transform: translateY(-50%);

    background: #FFF;
    border-radius: 50%;

    box-shadow: ${({ $active }) =>
        $active
            ? "0 0 30px 2px rgba(192, 218, 88, 0.30)"
            : "none"};

    display: ${({ $active }) => ($active ? "block" : "none")};

    transition: 0.3s;

    ${Menu}:hover & {
        width: 272px;
        height: 52px;
        border-radius: 8px;
        left: 20px;
    }
`;

const Icon = styled.img`
    width: 28px;
    height: 28px;
    margin-left: 21px;
    z-index: 2;
`;

const Text = styled.span`
    margin-left: 40px;
    font-size: 16px;
    color: #333;

    opacity: 0;
    transform: translateX(-10px);
    transition: 0.3s;
`;

const Line = styled.div`
    width: 70%;
    height: 1px;
    background-color: #C9C9C8;
    margin: 40px 0;
`;

export default function Project() {
    const navigate = useNavigate();
    const location = useLocation();

    const menus = [
        { path: "/homePage", icon: home, activeIcon: in_home, label: "HOME" },
        { path: "/schedule", icon: calendar, activeIcon: in_calendar, label: "SCHEDULE" },
        { path: "/project", icon: pen, activeIcon: in_pen, label: "PROJECT" },
        { path: "/chat", icon: chat, activeIcon: in_chat, label: "CHATTING" },
        { path: "/mypage", icon: icon, activeIcon: in_icon, label: "MY PAGE" }
    ];

    const isAlarmActive = location.pathname === "/alarm";
    const isSettingActive = location.pathname === "/setting";

    return (
        <>
            <GlobalStyle />

            <Menu>
                <Symbol className="symbol" src={symbol} />
                <Logo className="logo" src={logo} />

                {menus.map((menu) => {
                    const isActive = location.pathname === menu.path;

                    return (
                        <Item
                            key={menu.path}
                            onClick={() => navigate(menu.path)}
                        >
                            <Background $active={isActive} />

                            <Icon
                                src={isActive ? menu.activeIcon : menu.icon}
                            />

                            <Text className="text">{menu.label}</Text>
                        </Item>
                    );
                })}

                <Line />

                {/* 🔔 알림 */}
                <Item onClick={() => navigate("/alarm")}>
                    <Background $active={isAlarmActive} />
                    <Icon src={alarm} />
                    <Text className="text">NOTIFICATIONS</Text>
                </Item>

                {/* ⚙️ 설정 */}
                <Item onClick={() => navigate("/setting")}>
                    <Background $active={isSettingActive} />
                    <Icon src={setting} />
                    <Text className="text">SETTING</Text>
                </Item>
            </Menu>

            {/* 👉 프로젝트 페이지 내용 */}
            <div style={{ marginLeft: "130px", padding: "40px" }}>
                Project Page
            </div>
        </>
    );
}