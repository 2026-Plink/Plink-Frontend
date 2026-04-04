//packages
import styled, { createGlobalStyle } from "styled-components"
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

//assets, components
import searchIcon from "../assets/search_icon.png";
import createIcon from "../assets/add_icon.svg";
import menuIcon from "../assets/menu.svg";
import modifyIcon from "../assets/modify_icon.svg";
import hidingIcon from "../assets/hiding_icon.svg";
import deleteIcon from "../assets/delete_icon.svg";
import team_icon from "../assets/default_user_icon.svg";

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
export const GlobalStyle = createGlobalStyle`
    *{
        font-family: Pretendard;
        margin : 0;
        padding : 0;
        box-sizing: border-box;
        background-color: #FFF;
    }
`;
export const Menu = styled.div`
    height: 100vh;
    width: 130px;
    background-color: #F9F9F8;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
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
const HeaderBar = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 10px;
`;
const SearchBox = styled.div`
    display: flex;
    width: 826px;
    height: 52px;
    padding: 13px 20px 13px 22px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    border-radius: 100px;
    border: 1px solid var(--Light-Green-2, #C0DA58);
    background: var(--white-1, #FFF);
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.08);
`;
const SearchInput = styled.input`
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
`;
const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
    aspect-ratio: 1/1;
    margin-left: 10px;
    cursor: pointer;
`;
const JoinButton = styled.button`
    margin-right: 30px;
    cursor: pointer;
    width: 157px;
    height: 52px;
    padding: 14px 43px 14px 44px;
    justify-content: center;
    align-items: center;

    border-radius: 100px;
    border: 1px solid var(--Light-Green-2, #C0DA58);
    background: var(--white-1, #FFF);
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.08);

    color: var(--black-1, #000);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const TeamBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 20px;
`;
const TeamBarContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 394px;
    height: 418px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 16px;
    background: var(--white-1, #FFF);
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.08);

    &:hover{
        border-radius: 16px;
        border: 1px solid var(--Light-Green-2, #C0DA58);
        background: var(--white-1, #FFF);
        box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.08);
    }
`;
const TeamLogo = styled.img`
    width: 67px;
    height: 67px;
    border-radius: 12px;
`;
const EllipsisIcon = styled.img`
    width: 24px;
    height: 24px;
    justify-content: flex-end;
    margin-left: auto;
    aspect-ratio: 1/1;
    cursor: pointer;
`;
const TextBox = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
const TeamBarTitle = styled.span`
    align-self: stretch;
    color: var(--black-1, #000);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
const DetailBox = styled.div`

`;
const PeriodText = styled.span`
    color: var(--Light-Green-3, #90A442);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
const TeamDetailText = styled.span`
    margin-left: 12px;
    color: var(--black-1, #000);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const ChargeText = styled.span`
    color: var(--Light-Green-3, #90A442);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
const ProgressText = styled.span`
    color: var(--black-1, #000);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 70%;
`;
const BarWapper = styled.div`

`;
const ProgressBar = styled.div`
    width: 290px;
    height: 2px;
    background: #C9C9C8;
`;
const BarFill = styled.div`
    width: ${({$progress}) => $progress}%;
    height: 4px;
    background: #C0DA58;
`;
const DetailText = styled.span`
    color: var(--Gray-7, #70716F);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    margin-left: 60%;
    margin-top: 20px;

    cursor: pointer;

    &:hover{
        color: var(--Light-Green-3, #90A442);
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;
const CreateButton = styled.button`
    position: fixed;
    right: 30px;
    bottom: 30px;

    width: 64px;
    height: 64px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    border-radius: 42.5px;
    border: 1px solid var(--Light-Green-2, #C0DA58);
    background: var(--white-1, #FFF);
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.08);

    cursor: pointer;
`;
const CreateIcon = styled.img`
    width: 24px;
    height: 24px;
`;
const MenuBox = styled.div`
    position: absolute;
    top: 100px;
    right: 50px;
    display: flex;
    width: 150px;
    height: 113px;
    padding: 0 13px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 12px;
    background: var(--white-1, #FFF);
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.08);
`;
const MenuWapper = styled.div`
    display: flex;
`;
const MenuIcon = styled.img`
    width: 20px;
    height: 20px;
    aspect-ratio: 1/1;
`;
const MenuText = styled.span`
    margin-left: 5px;
    color: var(--black-1, #000);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const MenuLine = styled.div`
    width: 124px;
    height: 0.5px;
    background: #C9C9C8;
`;
const Wapper = styled.div`
    width: 80%;
    margin: 10px;
    display: flex;
    justify-content: space-between;
`;


export default function TeamPage(){
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

    useEffect(() => {
        const handleClick = (e) => {
            if(menuRef.current && !menuRef.current.contains(e.target)){
                setOpenMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const handleSearch = () => {
        console.log("검색어:", search);
    };
    const spreadButton = () => {
        
    };

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
                    </Menu>
                    <ContentBox>
                        <HeaderBar>
                            <SearchBox>
                                <SearchInput type="search" value={search} onChange={(e) => setSearch(e.target.value)}
                                    onKeyDown={(e) => {if (e.key === "Enter") handleSearch();}} />
                                <SearchIcon src={searchIcon} onClick={handleSearch} />
                            </SearchBox>
                            <JoinButton onClick={() => navigate("/team-join")} >참가하기</JoinButton>
                        </HeaderBar>
                        <TeamBox>
                            <TeamBarContainer>
                                <Wapper>
                                    <TeamLogo src={team_icon} />
                                    <EllipsisIcon src={menuIcon} onClick={() => setOpenMenu(prev => !prev)} />
                                </Wapper>
                                {openMenu && (
                                    <MenuBox ref={menuRef}>
                                        <MenuWapper>
                                            <MenuIcon src={modifyIcon} />
                                            <MenuText>수정</MenuText>
                                        </MenuWapper>
                                        <MenuLine />
                                        <MenuWapper>
                                            <MenuIcon src={hidingIcon} />
                                            <MenuText>숨김</MenuText>
                                        </MenuWapper>
                                        <MenuLine />
                                        <MenuWapper>
                                            <MenuIcon src={deleteIcon} />
                                            <MenuText>삭제</MenuText>
                                        </MenuWapper>
                                    </MenuBox>
                                )}
                                <TextBox>
                                    <TeamBarTitle>프로젝트 명</TeamBarTitle>
                                    <DetailBox>
                                        <PeriodText>기간</PeriodText>
                                        <TeamDetailText>03/01 - 06/01</TeamDetailText>
                                    </DetailBox>
                                    <DetailBox>
                                        <ChargeText>담당</ChargeText>
                                        <TeamDetailText>UI 디자인</TeamDetailText>
                                    </DetailBox>
                                </TextBox>
                                <ProgressText>65%</ProgressText>
                                <BarWapper>
                                    <ProgressBar>
                                        <BarFill $progress={getProgress} />
                                    </ProgressBar>
                                </BarWapper>
                                <DetailText onClick={() => navigate("/detail-page")}>자세히 보기</DetailText>
                            </TeamBarContainer>
                        </TeamBox>
                        <CreateButton onClick={() => navigate("/team-create")}>
                            <CreateIcon src={createIcon} />
                        </CreateButton>
                    </ContentBox>
                </PageLayout>
        </>
    )
}