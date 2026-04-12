//packages
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

//assets
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

//components
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

//css
const HeaderBox = styled.div`
    margin: 8% 0 1% 10%;
`;
const HeaderText = styled.span`
    color: var(--black-1, #000);
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
const AlarmBox = styled.div`
    margin: 8% 0 1% 10%;
    display: flex;
    flex-direction: column;
`;
const NotificationText = styled.span`
    color: var(--Gray-6, #959794);
    font-feature-settings: 'ss05' on;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 25.2px */
    letter-spacing: 0.15px;
`;
const AlarmWapper = styled.div`
    margin-bottom: 10px;
    display: flex;
    width: 1200px;
    height: 96px;
    padding: 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: var(--white-1, #FFF);
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.08);

    cursor: pointer;

    &:hover,
    &:active {
        border-radius: 16px;
        border: 1px solid var(--Light-Green-2, #C0DA58);
        background: var(--white-1, #FFF);
        box-shadow: 0 0 30px 2px rgba(192, 218, 88, 0.30);
    }
    &:hover ${NotificationText},
    &:active ${NotificationText}{
        color: var(--Light-Green-3, #90A442);
    }
`;
const TextWapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    flex: 1;
`;
const MessageText = styled.span`
    color: var(--Gray-6, #959794);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 16.8px */
`;
const StateText = styled.span`
    color: var(--Gray-7, #70716F);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 16.8px */
`;

const messageState = [
    {value: "안 읽음",state: "NOREAD"},
    {value: "읽음", state: "READ"}
];

export default function NotificationPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const menus = [
        { path: "/homepage", icon: home, activeIcon: in_home, label: "HOME" },
        { path: "/schedule", icon: calendar, activeIcon: in_calendar, label: "SCHEDULE" },
        { path: "/project", icon: pen, activeIcon: in_pen, label: "PROJECT" },
        { path: "/chat", icon: chat, activeIcon: in_chat, label: "CHATTING" },
        { path: "/mypage", icon: icon, activeIcon: in_icon, label: "MY PAGE" }
    ];

    //message 더미데이터 로컬스토리지대신 db로 가능하게 변경
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem("notifications");
        return saved ? JSON.parse(saved) : [
          {headertext: "프로젝트 마감", message: "UI/UX 개선 프로젝트의 마감일이 3일 남았습니다.", state: "NOREAD", send: "project"},
          {headertext: "피드백", message: "피드백이 추가되었습니다.", state: "NOREAD", send: "chat"},
          {headertext: "채팅", message: "안녕하세요 반갑습니다.", state: "NOREAD", send: "chat"},
          {headertext: "채팅", message: "채팅이 왔습니다.", state: "NOREAD", send: "chat"},
        ];
      });

    // 알림 정보 저장되는 로직으로 변경
    useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(messages));
    }, [messages]);

    const handleRead = (index, send) => {
        setMessages((prev) =>
          prev.map((msg, i) => (i === index ? { ...msg, state: "READ" } : msg))
        );
        navigate(`/${send}`);
      };

    return (
        <>
            <GlobalStyle />
            <PageLayout>
                <Menu>
                    <Symbol className="symbol" src={symbol} />
                    <Logo className="logo" src={logo} />
                    {menus.map((menu) => (
                        <Item key={menu.path} onClick={() => navigate(menu.path)}>
                            <Background $active={location.pathname === menu.path} />
                            <Icon src={location.pathname === menu.path ? menu.activeIcon : menu.icon} />
                            <Text className="text">{menu.label}</Text>
                        </Item>
                    ))}
                    <Line />
                    <Item onClick={() => navigate("/notification")}>
                        <Background $active={location.pathname === "/notification"} />
                        <Icon src={alarm} />
                        <Text className="text">NOTIFICATIONS</Text>
                    </Item>
                </Menu>
                <ContentBox>
                    <HeaderBox>
                        <HeaderText>알림</HeaderText>
                    </HeaderBox>
                    <AlarmBox>
                        {messages.map((message, index) => (
                            <AlarmWapper key={index} onClick={() => handleRead(index, message.send)}>
                                <TextWapper>
                                    <NotificationText>{message.headertext}</NotificationText>
                                    <MessageText>{message.message}</MessageText>
                                </TextWapper>
                                <StateText>{messageState.find(item => item.state === message.state)?.value}</StateText>
                            </AlarmWapper>
                        ))}
                    </AlarmBox>
                </ContentBox>
            </PageLayout>
        </>
    );
}