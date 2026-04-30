import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Backbtn from "../assets/back-button.svg";
import logo from "../assets/logo.svg";
import { GlobalStyle } from "../pages/homePage";

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
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.09);
    border: none;
    outline: none;
`;

const DateInput = styled.input`
    display: flex;
    width: 538px;
    height: 90px;
    padding: 32px 24px;
    align-items: center;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.09);
    border: none;
    outline: none;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 538px;
`;

export const Label = styled.label`
    position: absolute;
    left: 16px;
    top: 18px;
    color: #70716f;
    font-size: 14px;
    pointer-events: none;
`;

export const Title = styled.span`
    margin: 40px;
    color: #959794;
    font-size: 30px;
    font-weight: 600;
`;

export const SumbitButton = styled.button`
    display: flex;
    width: 538px;
    height: 92px;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    margin: 40px 0 16px;
    border-radius: 12px;
    background: #c0da58;
    box-shadow: 0 0 29.5px 2px rgba(0, 0, 0, 0.08);
    color: #fff;
    font-size: 28px;
    font-weight: 600;
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

const Message = styled.div`
    width: 538px;
    color: ${({ $error }) => ($error ? "#d9534f" : "#7e9640")};
    font-size: 14px;
    font-weight: 600;
`;

const DepartmentContainer = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    width: 538px;
    margin-bottom: 24px;
`;

const DepartmentButton = styled.button`
    padding: 12px 20px;
    border: 2px solid ${({ $selected }) => ($selected ? "#c0da58" : "#e0e0e0")};
    border-radius: 8px;
    background: ${({ $selected }) => ($selected ? "#c0da58" : "#fff")};
    color: ${({ $selected }) => ($selected ? "#fff" : "#666")};
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        border-color: #c0da58;
    }
`;

export default function TeamCreate() {
    const navigate = useNavigate();
    const [teamName, setTeamName] = useState("");
    const [deadline, setDeadline] = useState("");
    const [department, setDepartment] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const departments = ["프로젝트 기획", "UI 디자인", "개발", "품질 보증"];

    const sendTeamData = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            setError("로그인이 필요합니다.");
            return;
        }
        if (!teamName.trim() || !deadline) {
            setError("프로젝트 이름과 마감일을 입력해주세요.");
            return;
        }

        try {
            const response = await axios.post(
                "/api/teams/create",
                { name: teamName.trim(), deadline, department },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            localStorage.setItem("teamId", String(response.data.team.id));
            setMessage("프로젝트를 생성했어요.");
            setError("");
            navigate("/project");
        } catch (createError) {
            setError(createError.response?.data?.error || "프로젝트 생성에 실패했습니다.");
        }
    };

    return (
        <>
            <GlobalStyle />
            <BackButton onClick={() => navigate("/project")}>
                <Icon src={Backbtn} />
            </BackButton>
            <Container>
                <Logo src={logo} />
                <Title>프로젝트 생성</Title>
                <Form onSubmit={sendTeamData}>
                    <InputWrapper>
                        <Label>프로젝트 이름</Label>
                        <TeamNameInput type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>마감일</Label>
                        <DateInput type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                    </InputWrapper>
                    <div>
                        <Label style={{position: "static", display: "block", margin: "10px 0"}}>부서 선택</Label>
                        <DepartmentContainer>
                            {departments.map((dept) => (
                                <DepartmentButton
                                    key={dept}
                                    type="button"
                                    $selected={department === dept}
                                    onClick={() => setDepartment(dept)}
                                >
                                    {dept}
                                </DepartmentButton>
                            ))}
                        </DepartmentContainer>
                    </div>
                    {error ? <Message $error>{error}</Message> : null}
                    {!error && message ? <Message>{message}</Message> : null}
                    <SumbitButton type="submit">생성하기</SumbitButton>
                </Form>
            </Container>
        </>
    );
}
