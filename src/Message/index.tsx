import { IMessage } from "./interface";
import {
  MessageStyled,
  MessageContainer,
  MessageContent,
  MessageContainerText,
} from "./styles";
interface MessageProps {
  messageList: IMessage[];
}
const Message = ({ messageList }: MessageProps) => {
  return (
    <MessageStyled>
      {messageList.map((message) => {
        return (
          <MessageContainer isMy={message.isMy} key={message.id}>
            <MessageContent isMy={message.isMy}>
              <MessageContainerText>{message.text}</MessageContainerText>
            </MessageContent>
          </MessageContainer>
        );
      })}
    </MessageStyled>
  );
};

export default Message;
