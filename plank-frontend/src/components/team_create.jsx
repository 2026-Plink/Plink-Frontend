//packages
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//assets, components
import Backbtn from '../assets/back-button.svg';
import logo from '../assets/logo.svg';
import { GlobalStyle } from "./team_page";

//css
export const Container = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const Form = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;
export const TeamNameInput = styled.input`
    display: flex;
    width: 538px;
    height: 90px;
    padding: 32px 24px;
    align-items: center;
    gap: 10px;

    border-radius: 12px;
    background: #FFF;
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.09);
    border: none;
    outline: none;
    &:focus {
        border-color: #C0DA58;
        box-shadow: 0 0 30px 2px rgba(192, 218, 88, 0.30);
    }
    &:focus + label,
    &:not(:placeholder-shown) + label {
        top: 8px;
        font-size: 12px;
        color: var(--Gray-7, #70716F);
        box-shadow: 0 0 30px 2px rgba(192, 218, 88, 0.30);
    }
`;
const DateInput = styled.input`
    display: flex;
    width: 538px;
    height: 90px;
    padding: 32px 24px;
    align-items: center;
    gap: 10px;

    border-radius: 12px;
    background: #FFF;
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.09);
    border: none;
    outline: none;
    &:focus {
        border-color: #C0DA58;
        box-shadow: 0 0 30px 2px rgba(192, 218, 88, 0.30);
    }
    &:focus + label,
    &:not(:placeholder-shown) + label {
        top: 8px;
        font-size: 12px;
        color: var(--Gray-7, #70716F);
        box-shadow: 0 0 30px 2px rgba(192, 218, 88, 0.30);
    }
`;
export const InputWrapper = styled.div`
    position: relative;
    width: 538px;
`;
export const Label = styled.label`
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--Gray-7, #70716F);
    font-size: 16px;
    pointer-events: none;
    transition: all 0.2s ease;
`;
export const Title = styled.span`
    margin: 40px;
    color: #959794;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
export const SumbitButton = styled.button`
    display: flex;
    width: 538px;
    height: 92px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;

    border-radius: 12px;
    background: var(--Light-Green-2, #C0DA58);
    box-shadow: 0 0 29.5px 2px rgba(0, 0, 0, 0.08);

    color: var(--white-1, #FFF);
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
export const BackButton = styled.button`
    width: 96px;
    height: 100%;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Icon = styled.img`
    width: 32px;
    height: 64px;
`;
export const Logo = styled.img`
    width: 324px;
    height: 136px;
`;



export default function TeamCreate(){
    const navigate = useNavigate();

    const [teamName, setTeamName] = useState("");
    const [endDate, setDate] = useState("");

    //일정 입력 통일되게 맞추는 함수
    const formatDate = (value) => {
        if (!value) return null;
      
        const normalized = value.replace(/[./]/g, "-");
        const parts = normalized.split("-");
        if (parts.length !== 3) return null;
      
        let [year, month, day] = parts;
      
        if (!year || !month || !day) return null;
      
        month = month.padStart(2, "0");
        day = day.padStart(2, "0");
      
        const formatted = `${year}-${month}-${day}`;
        const date = new Date(formatted);
      
        return isNaN(date.getTime()) ? null : formatted;
      };

    const sendTeamData = async (e) => {
        e.preventDefault();

        if(!teamName.trim() || !endDate.trim()){
            alert("프로젝트 이름과 기간을 작성해 주세요!");
            return;
        }

        const formattedDate = formatDate(endDate);

        if (!formattedDate) {
            alert("날짜 형식이 올바르지 않습니다! (예: 2026-10-15)");
            return;
          }

        // 🔥 오늘 날짜 (시간 제거)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const selectedDate = new Date(formattedDate);

        if (selectedDate < today) {
            alert("기간은 오늘 이후 날짜만 가능합니다!");
            return;
        }
        
        try{
            const res = await fetch("host이름/team", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    teamName,
                    formattedDate
                }),
            });

            if(!res.ok){
                console.log("팀 생성 실패!");
                alert("팀 생성 실패");
            }else{
                console.log("팀 생성 완료!");
                alert("팀 생성 성공");
            }
        }catch(err){
            console.error(err);
        }
    }

    return(
        <>
            <GlobalStyle />
                <BackButton onClick={() => navigate("/team-page")}>
                    <Icon src={Backbtn} />
                </BackButton>
                <Container>
                    <Logo src={logo} />
                    <Title>생성하기</Title>
                    <Form onSubmit={sendTeamData}>
                        <InputWrapper>
                            <TeamNameInput type="text" placeholder="" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                            <Label>프로젝트 이름</Label>
                        </InputWrapper>
                        <InputWrapper>
                            <DateInput type="text" placeholder="" value={endDate} onChange={(e) => setDate(e.target.value)} />
                            <Label>기간</Label>
                        </InputWrapper>
                        <SumbitButton type="submit">생성하기</SumbitButton>
                    </Form>
                </Container>
        </>
    )
}