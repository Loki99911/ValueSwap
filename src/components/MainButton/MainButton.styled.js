import styled from "styled-components";

const ButtonStyled = styled.button`
  color: #313131;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 63px;
  width: 100%;
  cursor: pointer;
  border: none;
  background: radial-gradient(50% 50% at 50% 50%, #fff 0%, #dedede 100%);
  transition: background-color 350ms linear;

  &:hover {
    background-color: red;
  }
`;
export default ButtonStyled;
