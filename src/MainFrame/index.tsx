import React, { useState } from "react";
import Message from "../Message";
import { IMessage } from "../Message/interface";
import Button from "@mui/material/Button";
import {
  MainFrameStyled,
  FrameChatHeader,
  FrameChatHeaderMainText,
  FrameChatContent,
  MessageInputContainer,
  MessageFieldStyles,
} from "./styles";
interface MainFrameProps {
  user: string;
}
const MainFrame = ({user}: MainFrameProps) => {
  const [myMessage, setMyMessage] = useState("");
  const getMessage: IMessage[] = JSON.parse(localStorage[user]).message
  const [messageList, setMessageList] = useState<IMessage[]>(getMessage ? getMessage : []);
  const addMyMessage = () => {
    setMyMessage("");
    setMessageList([
      ...messageList,
      { id: messageList.length, text: myMessage, isMy: true },
    ]);
    const userData: any = JSON.parse(localStorage[user]);
    userData.message = [
      ...messageList,
      { id: messageList.length, text: myMessage, isMy: true },
    ];
    localStorage.setItem(user, JSON.stringify(userData));
  };
  return (
    <MainFrameStyled>
      <FrameChatHeader>
        <FrameChatHeaderMainText>Имя собеседника</FrameChatHeaderMainText>
      </FrameChatHeader>
      <FrameChatContent>
        <Message messageList={messageList} />
        <MessageInputContainer>
          <MessageFieldStyles
            value={myMessage}
            onChange={(e) => setMyMessage(e.target.value)}
          />
          <Button variant="contained" onClick={addMyMessage}>
            Send
          </Button>
        </MessageInputContainer>
      </FrameChatContent>
    </MainFrameStyled>
  );
}

export default MainFrame;
