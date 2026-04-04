//packages
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

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
import backIcon from "../assets/detail_back_icon.svg";
import { GlobalStyle } from "./team_page";

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
const TextLine = styled.div`
    width: 100%;
    height: 1px;
    background: #C9C9C8;
    margin-bottom: 0;
    margin-top: ${({$margin_size}) => $margin_size}px;
`;
const Wapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    margin-left: 12%;
`;
const BackWapper = styled.div`
    margin: 2%;
    padding: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const BackText = styled.span`
    color: var(--Gray-7, #70716F);
    font-feature-settings: 'ss05' on;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
const TeamIcon = styled.img`
    width: 28px;
    height: 28px;
    aspect-ratio: 1/1;
`;
const TeamLogo = styled.img`
    width: 142px;
    height: 142px;
`;
const TeamName = styled.span`
    color: var(--Grey-grey-12, #2C2C2C);
    font-feature-settings: 'ss05' on;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
const InfoText = styled.span`
    color: var(--Gray-7, #70716F);
    font-feature-settings: 'ss05' on;
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
const DataText = styled.span`
    color: var(--black-1, #000);
    font-feature-settings: 'ss05' on;
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.022px;
`;
const TextWapper = styled.div`
    display: flex;
    align-items: center;
`;
const UserIcon = styled.img`

`;
const NameText = styled.span`

`;
const VerticalLine = styled.div`
    width: 4px;
    height: 50px;
    background: #C0DA58;
`;
const ExplanText = styled.span`
    margin: 20px;
    color: var(--Gray-8, #575856);
    font-feature-settings: 'ss05' on;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: -0.15px;
`;
const DescriptionText = styled.span`
    margin-left: 28px;
    align-items: center;
    color: var(--black-1, #000);
    font-feature-settings: 'ss05' on;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.15px;
`;
const FeedBackText = styled.span`
    color: var(--Gray-8, #575856);
    font-feature-settings: 'ss05' on;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.15px;
`;

export default function TeamDetailPage(){
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
    
    const menuRef = useRef();
    const [search, setSearch] = useState("");
    const [openMenu, setOpenMenu] = useState(false);
    const [getProgress, setProgress] = useState(0);

    return(
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
            </Menu>
            <BackWapper onClick={() => navigate("/project")}>
                <TeamIcon src={backIcon} />
                <BackText>돌아가기</BackText>
            </BackWapper>
            <TextLine />
            <Wapper>
                <TeamLogo src={null} />
                <TeamName>프로젝트 명</TeamName>
                <TextWapper>
                    <InfoText>기간</InfoText>
                    <DataText></DataText>
                </TextWapper>
                <TextWapper>
                    <InfoText>담당</InfoText>
                    <DataText></DataText>
                </TextWapper>
                <TextWapper>
                    <InfoText>참여코드</InfoText>
                    <DataText></DataText>
                </TextWapper>
                <TextWapper>
                    <InfoText>참여자</InfoText>
                    <DataText>
                        <UserIcon />
                        <NameText></NameText>
                    </DataText>
                </TextWapper>
            </Wapper>
            <TextLine $margin_size={30} />
            <Wapper>
                <TextWapper>
                    <VerticalLine />
                    <DescriptionText>dadcc</DescriptionText>
                </TextWapper>
                <ExplanText>cqcqcdqc</ExplanText>
                <TextWapper>
                    <VerticalLine />
                    <DescriptionText>피드백</DescriptionText>
                </TextWapper>
                <FeedBackText>

                </FeedBackText>
            </Wapper>
        </>
    )
}