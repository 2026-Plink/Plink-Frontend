//packages
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

//assets, components
import { GlobalStyle } from "./team_page";
import search from "../assets/search_icon.png";
import detail_down_icon from "../assets/state_down.svg";
import menu from "../assets/menu.svg";

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
`;
const StateDot = styled.div`
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
`;
const HorizontalLine = styled.div`
    width: ${({$length}) => $length}px;
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
    top: 290px;
    left: 135px;
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
    height: 60px;
`;
const ChatBox = styled.div`

`;
const UserBox = styled.div`

`;
const UserWapper = styled.div`
    display: flex;
`;
const UserName = styled.span`
    color: var(--black-1, #000);
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
const UserCharge = styled.span`
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


const states = [
    { color: "3AB92C", label: "활동 중", value: "ONLINE"},
    { color: "F0CF19", label: "자리비움", value: "IDLE"},
    { color: "F04419", label: "방해 금지", value: "DND"},
    { color: "B9B9B9", label: "오프라인", value: "OFFLINE"},
];

export default function ChatPage(){
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
                                <StateText>{currentState.label}</StateText>
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
                        <HorizontalLine $length={370} />
                        <UserBox>
                            <UserIcon $size={60} />
                        </UserBox>
                    </SideBox>
                    <VerticalLine />
                    <TopBox>
                        <UserWapper>
                            <UserIcon $size={60} style={{margin: "40px", marginLeft: "100px"}} />
                            <UserName>이름</UserName>
                            <UserCharge>역할</UserCharge>
                        </UserWapper>
                        <MenuIcon src={menu} />
                    </TopBox>
                    <HorizontalLine $length={400} />
                    <ChatBox>

                    </ChatBox>
                </Layout>
        </>
    )
}