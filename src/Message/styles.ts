import styled from "styled-components";

interface MessageContainerProps {
  isMy: boolean;
}

export const MessageStyled = styled.div``;

export const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  justify-content: ${({ isMy }) => (isMy ? "flex-end" : "flex-start")};
`;

export const MessageContent = styled.div<MessageContainerProps>`
  margin: 10px 0;
  height: auto;
  padding: 5px;
  background-color: ${({ isMy }) => (isMy ? "#897eff" : "#d9d9d969")};
  color: ${({ isMy }) => (isMy ? "#fff" : "#000")};
  border-radius: ${({ isMy }) =>
    isMy ? "15px 15px 3% 15px" : "15px 15px 15px 3%"};
  font-size: 14px;
`;

export const MessageContainerText = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  min-width: 100px;
  max-width: 400px;
`;
