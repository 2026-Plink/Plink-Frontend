//packages
import styled from "styled-components"

//assets
import next_arrow from "../assets/arrow_right.svg";
import previous_arrow from "../assets/arrow_previous.svg";
import down_icon from "../assets/down_icon.svg";

//components
import { GlobalStyle } from "./team_page";

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
const Icon = styled.img`

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
const DateCell = styled.div`
    width: 110px;
    height: 120px;
    color: var(--Gray-7, #70716F);
    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    color: ${({ isCurrent }) =>
        isCurrent
            ? "var(--Gray-7, #70716F)"
            : "var(--Gray-5, #C9C9C8)"};

    &:hover{
        border-radius: 16px;
        border: 1px solid var(--Light-Green-2, #C0DA58);
        background: var(--white-1, #FFF);
        box-shadow: 0 0 30px 2px rgba(192, 218, 88, 0.20);
    }
`;
const ScheduleText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
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

    return(
        <>
            <GlobalStyle />
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
                        <DateCell key={i} isCurrent={d.isCurrent} >
                            {d.day}
                        </DateCell>
                    ))}
                </DateGrid>
            </CalendarWrapper>
        </>
    )
}