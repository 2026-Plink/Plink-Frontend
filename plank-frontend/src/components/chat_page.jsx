//packages
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//assets, components
import { GlobalStyle } from "./team_page";
import search from "../assets/search_icon.png";
import detail_down_icon from "../assets/state_down.svg";
import menu from "../assets/menu.svg";

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

import { Menu } from "./schedule_page";
import { Symbol } from "./schedule_page";
import { Logo } from "./schedule_page";
import { Item } from "./schedule_page";
import { Background } from "./schedule_page";
import { Icon } from "./schedule_page";
import { Text } from "./schedule_page";
import { Line } from "./schedule_page";
import { PageLayout } from "./schedule_page";
import { ContentBox } from "./schedule_page";

//css
const Layout = styled.div`
    display: flex;
    height: 100vh;
`;
const SearchWapper = styled.div`
    display: flex;
    width: 354px;
    height: 52px;
    padding: 13px 20px 13px 22px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    border-radius: 100px;
    border: 1px solid var(--Light-Green-2, #C0DA58);
    background: var(--white-1, #FFF);
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.08);
`;
const SearchBox = styled.input`
    width: 330px;
    border: none;
    outline: none;
`;
const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
    aspect-ratio: 1/1;
`;
const InfoWapper = styled.div`
    margin: 10% 0 10% 0;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
`;
const UserIcon = styled.img`
    width: ${({$size}) => $size}px;
    height: ${({$size}) => $size}px;
`;
const NameText = styled.span`
    color: var(--black-1, #000);
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 5px;
`;
const StateBox = styled.div`
    display: flex;
    align-items: center;
    margin-left: 2%;
    cursor: pointer;
`;
const StateDot = styled.div`
    cursor: pointer;
    width: 10px;
    height: 10px;
    aspect-ratio: 1/1;
    border-radius: 50px;
    margin: 0px 5px 0px 0px;

    background: #${({$color}) => $color};
`;
const StateText = styled.span`
    color: var(--black-1, #000);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const DetailIcon = styled.img`
    width: 18px;
    height: 18px;
    aspect-ratio: 1/1;
    cursor: pointer;
`;
const HorizontalLine = styled.div`
    width: ${({$length}) => $length}%;
    height: 1px;
    background: #C9C9C8;
`;
const VerticalLine = styled.div`
    width: 1px;
    height: 100%;
    background: #C9C9C8;
`;
const StateMenu = styled.div`
    display: flex;
    width: 150px;
    height: 113px;
    padding: 0 13px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    position: absolute;
    top: 280px;
    left: 17%;
    z-index: 10; 

    border-radius: 12px;
    background: var(--white-1, #FFF);
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.08);
`;
const StateLine = styled.div`
    width: 124px;
    height: 0.5px;
    background: #C9C9C8;
`;
const StateWapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SideBox = styled.div`
    margin: 2%;
`;
const TopBox = styled.div`
    display: flex;
    margin: 2% 0% 2% 0%;
`;
const ChatBox = styled.div`
    display: flex;
    flex-direction: column;
`;
const UserBox = styled.div`

`;
const UserWapper = styled.div`
    display: flex;
    margin: 0px 0px 10px 20px;
`;
const UserName = styled.span`
    color: var(--black-1, #000);
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
const UserCharge = styled.span`
    margin-left: 10px;
    color: var(--Gray-7, #70716F);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const MenuIcon = styled.img`
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
`;
const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
const MessageBox = styled.div`

`;
const SendTextBox = styled.div`
    width: ${({$textLength}) => $textLength};
    display: flex;
    padding: 14px 28px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: var(--Light-Green-4, #D3EB73);
`;
const SendText = styled.span`
    color: var(--black-1, #000);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const ReceiveTextBox = styled.div`
    display: flex;
    padding: 14px 28px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: var(--Gray-4, #E0E0E0);
`;
const ReceiveText = styled.span`
    width: ${({$textLength}) => $textLength || "auto"}px;
    color: var(--black-1, #000);
    text-align: right;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const TimeText = styled.span`
    color: var(--Gray-7, #70716F);
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;



const states = [
    { color: "3AB92C", label: "활동 중", value: "ONLINE"},
    { color: "F0CF19", label: "자리비움", value: "IDLE"},
    { color: "F04419", label: "방해 금지", value: "DND"},
    { color: "B9B9B9", label: "오프라인", value: "OFFLINE"},
];

export default function ChatPage(){
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

    const [openMenu, setOpenMenu] = useState(false);
    const [currentState, setCurrentState] = useState(states[0]);
    const menuRef = useRef();

    useEffect(() => {
        const handleClick = (e) => {
            if(menuRef.current && !menuRef.current.contains(e.target)){
                setOpenMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const handleStateChange = (state) => {
        setCurrentState(state);
        setOpenMenu(false);
    }
    
    return(
        <>
            <GlobalStyle />
                <PageLayout>
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
                    <ContentBox>
                        <Layout>
                            <SideBox>
                                <SearchWapper>
                                    <SearchBox type="search" />
                                    <SearchIcon src={search} />
                                </SearchWapper>
                                <InfoWapper>
                                    <UserIcon $size={126} />
                                    <NameText></NameText>
                                    <StateBox onClick={() => setOpenMenu(prev => !prev)}>
                                        <StateDot $color={currentState.color} />
                                        <StateText style={{cursor: "pointer"}}>{currentState.label}</StateText>
                                        <DetailIcon src={detail_down_icon} />
                                    </StateBox>
                                </InfoWapper>
                                {openMenu && (
                                    <StateMenu ref={menuRef}>
                                        {states
                                            .filter(s => s.label !== currentState.label)
                                            .map((state, i, arr) => (
                                            <>
                                                    <StateWapper key={state.label} onClick={() => handleStateChange(state)} style={{cursor: "pointer"}} >
                                                        <StateDot $color={state.color} />
                                                        <StateText>{state.label}</StateText>
                                                    </StateWapper>
                                                    {i < arr.length - 1 && <StateLine /> }
                                            </> 
                                            ))
                                        }
                                    </StateMenu>
                                )}
                                <HorizontalLine $length={100} />
                                <UserBox>
                                    <UserIcon $size={60} />
                                </UserBox>
                            </SideBox>
                            <VerticalLine />
                            <RightBox>
                                <TopBox>
                                    <UserWapper>
                                        <UserIcon $size={60} style={{marginLeft: 30}} />
                                        <UserName>이름</UserName>
                                        <UserCharge>역할</UserCharge>
                                    </UserWapper>
                                    <MenuIcon src={menu} />
                                </TopBox>
                                <HorizontalLine $length={100} />
                                <ChatBox>
                                    <MessageBox>
                                        <UserIcon $size={52} />
                                        <ReceiveTextBox>
                                            <ReceiveText>

                                            </ReceiveText>
                                        </ReceiveTextBox>
                                        <TimeText></TimeText>
                                    </MessageBox>
                                    <MessageBox>
                                        <SendTextBox>
                                            <SendText>

                                            </SendText>
                                        </SendTextBox>
                                        <TimeText></TimeText>
                                    </MessageBox>
                                </ChatBox>
                            </RightBox>
                        </Layout>
                    </ContentBox>
                </PageLayout>
        </>
    )
}