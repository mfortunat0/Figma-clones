import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 30%;
  margin-top: 5vh;
  cursor: pointer;
  top: 0;
  position: relative;
  :hover {
    top: -10px;
    box-shadow: 0 0 15px #f1f1f1;
  }
`;

export const Title = styled.h1`
  color: #f0f0f0;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;
