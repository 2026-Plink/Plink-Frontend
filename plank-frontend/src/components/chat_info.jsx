//packages
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
//assets
import menu from "../assets/menu.svg";
import search from "../assets/search_icon.png";
import user_icon from "../assets/default_user_icon.svg";
import detail_down_icon from "../assets/down_icon.svg";
import back_icon from "../assets/back_icon.svg";
import alarm_off_icon from "../assets/alarm_off.svg";

import symbol from "../assets/symbol.svg";
import home from "../assets/home.svg";
import in_home from "../assets/in_home.svg";
import calendar from "../assets/calendar.svg";
import in_calendar from "../assets/in_calendar.svg";
import pen from "../assets/pen.svg";
import in_pen from "../assets/in_pen.svg";
import chat from "../assets/chat.svg";
import in_chat from "../assets/in_chat.svg";
import icon from "../assets/icon.svg";
import in_icon from "../assets/in_icon.svg";
import alarm from "../assets/alarm.svg";
import setting from "../assets/setting.svg";
import logo from "../assets/logo.svg";
//components
import { Menu } from "../pages/homePage";
import { Symbol } from "../pages/homePage";
import { Logo } from "../pages/homePage";
import { Item } from "../pages/homePage";
import { Background } from "../pages/homePage";
import { Icon } from "../pages/homePage";
import { Text } from "../pages/homePage";
import { Line } from "../pages/homePage";

import { GlobalStyle } from "../pages/homePage";
import { PageLayout } from "./schedule_page";
import { ContentBox } from "./schedule_page";
import { Layout } from "./chat_page";
import { SideBox } from "./chat_page";
import { RightBox } from "./chat_page";
import { TopBox } from "./chat_page";
import { SearchWapper } from "./chat_page";
import { SearchBox } from "./chat_page";
import { SearchIcon } from "./chat_page";
import { InfoWapper } from "./chat_page";
import { NameWapper } from "./chat_page";
import { NameText } from "./chat_page";
import { UserCharge } from "./chat_page";
import { StateBox } from "./chat_page";
import { StateDot } from "./chat_page";
import { StateText } from "./chat_page";
import { DetailIcon } from "./chat_page";
import { StateMenu } from "./chat_page";
import { StateLine } from "./chat_page";
import { StateWapper } from "./chat_page";
import { MenuIcon } from "./chat_page";
import { HorizontalLine } from "./chat_page";
import { VerticalLine } from "./chat_page";
import { UserBox } from "./chat_page";
import { ChatItem } from "./chat_page";
import { ChatItemIconWrapper } from "./chat_page";
import { UserIcon } from "./chat_page";
import { ChatItemInfo } from "./chat_page";
import { ChatItemTop } from "./chat_page";
import { ChatItemName } from "./chat_page";
import { ChatItemBottom } from "./chat_page";
import { ChatItemMsg } from "./chat_page";
import { UserName } from "./chat_page";
import { states } from "./chat_page";
//css
const UserWapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding: 0;
`;
const BackIcon = styled.img`
  width: 48px;
  height: 48px;
  aspect-ratio: 1/1;
  stroke-width: 2px;
  stroke: var(--Gray-8, #575856);
  cursor: pointer;
`;
const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
const AlarmWapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const AlarmIcon = styled.img`
  width: 42px;
  height: 42px;
  aspect-ratio: 1/1;
`;
const AlarmText = styled.span`
  margin-top: 18px;
  align-self: stretch;
  color: var(--Gray-7, #70716f);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const OutButton = styled.button`
  margin-top: 20%;
  display: flex;
  width: 80%;
  height: 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid var(--Light-Green-2, #c0da58);
  background: var(--white-1, #fff);
  box-shadow: 0 0 30px 2px rgba(192, 218, 88, 0.2);
  cursor: pointer;
`;

export default function ChatInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedChat = location.state?.selectedChat || chatList[0];
  const chatList = location.state?.chatList || [];

  const menus = [
    { path: "/homePage", icon: home, activeIcon: in_home, label: "HOME" },
    {
      path: "/schedule",
      icon: calendar,
      activeIcon: in_calendar,
      label: "SCHEDULE",
    },
    { path: "/project", icon: pen, activeIcon: in_pen, label: "PROJECT" },
    { path: "/chat", icon: chat, activeIcon: in_chat, label: "CHATTING" },
    { path: "/mypage", icon: icon, activeIcon: in_icon, label: "MY PAGE" },
  ];

  const isAlarmActive = location.pathname === "/alarm";
  const isSettingActive = location.pathname === "/setting";

  const [openMenu, setOpenMenu] = useState(false);
  const [currentState, setCurrentState] = useState(states[0]);
  const menuRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const handleStateChange = (state) => {
    setCurrentState(state);
    setOpenMenu(false);
  };

  const handleOut = () => {
    const updatedList = chatList.filter((item) => item.id !== selectedChat.id);
    navigate("/chat", { state: { chatList: updatedList } });
  };

  return (
    <>
        <GlobalStyle />
        <PageLayout>
            <Menu>
            <Symbol className="symbol" src={symbol} />
            <Logo className="logo" src={logo} />

            {menus.map((menu) => {
                const isActive = location.pathname === menu.path;

                return (
                <Item key={menu.path} onClick={() => navigate(menu.path)}>
                    <Background $active={isActive} />

                    <Icon src={isActive ? menu.activeIcon : menu.icon} />

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
                <Layout>
                    <SideBox>
                    <SearchWapper>
                        <SearchBox type="search" />
                        <SearchIcon src={search} />
                    </SearchWapper>
                    <InfoWapper>
                        <UserIcon $size={126} src={user_icon} />
                        <NameWapper>
                        <NameText>이민지</NameText>
                        <UserCharge>디자이너</UserCharge>
                        </NameWapper>
                        <StateBox onClick={() => setOpenMenu((prev) => !prev)}>
                        <StateDot $color={currentState.color} />
                        <StateText style={{ cursor: "pointer" }}>
                            {currentState.label}
                        </StateText>
                        <DetailIcon src={detail_down_icon} />
                        </StateBox>
                    </InfoWapper>
                    {openMenu && (
                        <StateMenu ref={menuRef}>
                        {states
                            .filter((s) => s.label !== currentState.label)
                            .map((state, i, arr) => (
                            <>
                                <StateWapper
                                key={state.label}
                                onClick={() => handleStateChange(state)}
                                style={{ cursor: "pointer" }}
                                >
                                <StateDot $color={state.color} />
                                <StateText>{state.label}</StateText>
                                </StateWapper>
                                {i < arr.length - 1 && <StateLine />}
                            </>
                            ))}
                        </StateMenu>
                    )}
                    <HorizontalLine $length={100} />

                    {/* 이게 chatlist 변경시 바뀌는 내용 */}
                    <UserBox>
                        {chatList.map((item) => (
                        <ChatItem key={item.id} onClick={() => setSelectedChat(item)}>
                            <ChatItemIconWrapper>
                            <UserIcon $size={60} src={user_icon} />
                            </ChatItemIconWrapper>
                            <ChatItemInfo>
                            <ChatItemTop>
                                <StateDot
                                $color={
                                    states.find((s) => s.value === item.state)?.color
                                }
                                />
                                <ChatItemName>{item.name}</ChatItemName>
                            </ChatItemTop>
                            <ChatItemBottom>
                                <ChatItemMsg>
                                {item.lastMsg} · {item.time}
                                </ChatItemMsg>
                            </ChatItemBottom>
                            </ChatItemInfo>
                        </ChatItem>
                        ))}
                    </UserBox>
                    </SideBox>
                    <VerticalLine />
                    <RightBox>
                    {/* 여기가 채팅 사용자의 정보가 들어가야됨. */}
                    <TopBox>
                        <BackIcon src={back_icon} onClick={() => navigate("/chat")} />
                        <MenuIcon src={menu} />
                    </TopBox>
                    <HorizontalLine $length={100} />
                    <MainBox>
                        <UserIcon $size={200} src={user_icon} />
                        <UserWapper>
                        <UserName>{selectedChat.name}</UserName>
                        <UserCharge>{selectedChat.charge}</UserCharge>
                        </UserWapper>
                        <StateWapper>
                        <StateDot
                            $color={
                            states.find((s) => s.value === selectedChat.state)?.color
                            }
                        />
                        <StateText>
                            {states.find((s) => s.value === selectedChat.state)?.label}
                        </StateText>
                        </StateWapper>
                        <AlarmWapper>
                        <AlarmIcon src={alarm_off_icon} />
                        <AlarmText>알림 해제</AlarmText>
                        </AlarmWapper>
                        <OutButton onClick={handleOut}>채팅방에서 나가기</OutButton>
                    </MainBox>
                    </RightBox>
                </Layout>
            </ContentBox>
        </PageLayout>
    </>
  );
}
