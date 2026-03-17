//packages
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

//assets
import Backbtn from '../assets/back-button.svg';
import logo from '../assets/logo.svg';

const GlobalStyle = createGlobalStyle`
    *{
        font-family: Pretendard;
        margin : 0;
        padding : 0;
        box-sizing: border-box;
        background-color: #FFF;
    }
`;

const Container = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Form = styled.form`

`;

const TeamNameInput = styled.input`
    margin: 40px;
    display: flex;
    width: 538px;
    height: 60px;
    padding: 32px 24px;
    align-items: center;
    gap: 10px;

    border-radius: 12px;
    background: #FFF;
    box-shadow: 0 0 11.9px 2px rgba(0, 0, 0, 0.09);
`;

const Title = styled.span`
    margin: 40px;
    color: #959794;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const BackButton = styled.button`
    width: 96px;
    height: 100%;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.img`
    width: 32px;
    height: 64px;
`;

const Logo = styled.img`
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
                        <TeamNameInput />
                    </Form>
                </Container>
        </>
    )
}