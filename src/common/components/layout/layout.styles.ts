import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #f5f4f9;
  padding: 10px 30px 10px 6px;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
`;

export const ChildrenContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 24px;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Public Sans', sans-serif;
  }
`;
