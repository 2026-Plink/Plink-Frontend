//packages
import styled from "styled-components"
import { useNavigate, useLocation } from "react-router-dom";

//assets
import next_arrow from "../assets/arrow_right.svg";
import previous_arrow from "../assets/arrow_previous.svg";
import down_icon from "../assets/down_icon.svg";

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
import { GlobalStyle } from "./team_page";
import { Menu } from "../pages/homePage";
import { Symbol } from "../pages/homePage";
import { Logo } from "../pages/homePage";
import { Item } from "../pages/homePage";
import { Background } from "../pages/homePage";
import { Icon } from "../pages/homePage";
import { Text } from "../pages/homePage";
import { Line } from "../pages/homePage";

//css
const HeaderBar = styled.header`
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
`;
const HeraderTextBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const YearBox = styled.div`
    display: flex;
    align-items: center;
`;
const YearText = styled.span`
    color: var(--Gray-7, #70716F);
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const HeaderMonthText = styled.span`
    color: var(--Light-Green-2, #C0DA58);
    text-align: center;
    font-family: Pretendard;
    font-size: 44px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
const IconDiv = styled.div`
    display: flex;
    align-items: center;
`;
const DownIcon = styled.img`
    margin: 3px 3px 0px 3px;
`;
const CalendarWrapper = styled.div`
    margin-top: 25px;
    width: 50%:
`;
const WeekRow = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 10px;
`;
const DayText = styled.div`
    width: 110px;
    height: 60px;
    color: var(--Gray-8, #575856);
    text-align: center;
    font-family: Pretendard;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
const DateGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 20px 0;
`;
export const PageLayout = styled.div`
    display: flex;
    height: 100vh;
`;
export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
`;
const DateCell = styled.div`
    color: ${({ isCurrent }) =>
        isCurrent
            ? "var(--Gray-7, #70716F)"
            : "var(--Gray-5, #C9C9C8)"};
    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;

    /* hover를 DateCellWrapper로 이동 */
`;

const DateCellWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding-top: 10px;
    width: 110px;
    height: 120px;
    cursor: pointer;

    &:hover {
        border-radius: 16px;
        border: 1px solid var(--Light-Green-2, #C0DA58);
        background: var(--white-1, #FFF);
        box-shadow: 0 0 30px 2px rgba(192, 218, 88, 0.20);
    }
`;
const ScheduleTextBox = styled.div`
    display: inline-flex;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: var(--Light-Green-2, #C0DA58);
`;
const ScheduleText = styled.span`
    color: var(--white-1, #FFF);
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: var(--Light-Green-2, #C0DA58);
`;


export default function SchedulePage(){
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const days = [
        "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
    ]

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const today = date.getDate();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();
    
    const dates = [];
    
    // 1️⃣ 이전 달 채우기
    for (let i = firstDay - 1; i >= 0; i--) {
        dates.push({
            day: prevLastDate - i,
            isCurrent: false
        });
    }
    
    // 2️⃣ 현재 달 채우기
    for (let i = 1; i <= lastDate; i++) {
        dates.push({
            day: i,
            isCurrent: true
        });
    }
    
    // 3️⃣ 다음 달 채우기 (42칸 맞추기)
    const nextDays = 42 - dates.length;
    for (let i = 1; i <= nextDays; i++) {
        dates.push({
            day: i,
            isCurrent: false
        });
    }
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
                    <HeaderBar>
                        <IconDiv>
                            <Icon src={previous_arrow} />
                        </IconDiv>
                        <HeraderTextBox>
                            <YearBox>
                                <YearText>{year}</YearText>
                                <DownIcon src={down_icon} />
                            </YearBox>
                            <HeaderMonthText>{months[month]}</HeaderMonthText>
                        </HeraderTextBox>
                        <IconDiv>
                            <Icon src={next_arrow} />
                        </IconDiv>
                    </HeaderBar>
                    <CalendarWrapper>
                        {/* 요일 */}
                        <WeekRow>
                            {days.map((d, i) => (
                                <DayText key={i}>{d}</DayText>
                            ))}
                        </WeekRow>

                        {/* 날짜 */}
                        <DateGrid>
                            {dates.map((d, i) => (
                                <DateCellWrapper key={i}>
                                    <DateCell isCurrent={d.isCurrent}>
                                        {d.day}
                                    </DateCell>
                                    {/* 특정 날짜에 일정 표시 예시 - d.day === 5 등 조건으로 제어 */}
                                    {d.day === 5 && d.isCurrent && (
                                        <ScheduleTextBox>
                                            <ScheduleText>UI 디자인</ScheduleText>
                                        </ScheduleTextBox>
                                    )}
                                </DateCellWrapper>
                            ))}
                        </DateGrid>
                    </CalendarWrapper>
                </ContentBox>
            </PageLayout>
        </>
    )
}