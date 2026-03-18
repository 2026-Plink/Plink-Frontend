//packages
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

//assets
import Backbtn from '../assets/back-button.svg';
import logo from '../assets/logo.svg';


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
    height: 60px;
    padding: 32px 24px;
    align-items: center;
    gap: 10px;

    border-radius: 12px;
    background: #FFF;
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.09);
    border: none;

    &:hover{
        box-shadow: 0 0 30px 2px rgba(192, 218, 88, 0.30);
    }
`;
const DateInput = styled.input`
    display: flex;
    width: 538px;
    height: 60px;
    padding: 32px 24px;
    align-items: center;
    gap: 10px;

    border-radius: 12px;
    background: #FFF;
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.09);
    border: none;

    &:hover{
        box-shadow: 0 0 30px 2px rgba(192, 218, 88, 0.30);
    }
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
    height: 80px;
    padding: 31px 232px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 12px;
    background: #C0DA58;
    box-shadow: 0 0 29.5px 2px rgba(0, 0, 0, 0.08);
    border: none;
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


    return(
        <>
            <GlobalStyle />
                <BackButton>
                    <Icon src={Backbtn} />
                </BackButton>
                <Container>
                    <Logo src={logo} />
                    <Title>생성하기</Title>
                    <Form>
                        <TeamNameInput placeholder="이름" />
                        <DateInput placeholder="일정 종료 일" />
                        <SumbitButton>생성하기</SumbitButton>
                    </Form>
                </Container>
        </>
    )
}