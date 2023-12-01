import styled from "styled-components";
export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const MainVideo = styled.video`
  display: flex;
  position: absolute;
  object-fit: cover;
  z-index: -1;
  height: 100%;
  width: 100%;
`;
