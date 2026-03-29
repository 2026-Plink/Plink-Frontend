//packages
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//assets, components
import backIcon from "../assets/detail_back_icon.svg";
import { GlobalStyle } from "./team_page";

//css
const Line = styled.div`
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
const Icon = styled.img`
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

    return(
        <>
            <GlobalStyle />
                <BackWapper onClick={() => navigate("/team-page")}>
                    <Icon src={backIcon} />
                    <BackText>돌아가기</BackText>
                </BackWapper>
                <Line />
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
                <Line $margin_size={30} />
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