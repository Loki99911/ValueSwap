import styled from "styled-components";

export const FormLayout = styled.div`
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 402px;

  @media screen and (min-width: 768px) {
    width: 300px;
    padding: 55px 85px;
  }
  @media screen and (min-width: 1280px) {
    width: 425px;
  }
`;

export const Form = styled.form`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const LoginLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.16;
  text-align: left;
  color: var(--main-white);
  margin-bottom: 12px;
`;

export const LoginInput = styled.input`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  border-bottom: 1px solid rgba(228, 228, 228, 0.08);
  background: rgba(228, 228, 228, 0.04);
  height: 63px;
  padding-left: 18px;
  padding-right: 70px;
  margin-bottom: 28px;
  &:last-of-type {
    margin-bottom: 70px;
  }
`;

export const ErrorText = styled.span`
  font-size: 14px;
  display: flex;
  position: absolute;
  top: 63px;
  color: red;

  &:last-of-type {
    top: 157px;
  }
`;
