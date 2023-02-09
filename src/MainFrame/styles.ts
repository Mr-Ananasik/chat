import styled from "styled-components";
export const MainFrameStyled = styled.div`
  width: 500px;
  height: 400px;
  padding: 10px;
  margin: auto;
  border: 1px solid rgba(149, 157, 165, 0.2);
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
`;

export const FrameChatHeader = styled.div`
  border-bottom: 1px solid lightgray;
`;

export const FrameChatHeaderMainText = styled.div`
  font-size: 18px;
  color: #8d8c8c;
`;

export const FrameChatContent = styled.div`
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MessageInputContainer = styled.div``;

export const MessageFieldStyles = styled.input`
  min-height: 36px;
  border-radius: 15px;
  border: 1px solid lightblue;
  padding: 0 8px;
  font-size: 16px;
`;
