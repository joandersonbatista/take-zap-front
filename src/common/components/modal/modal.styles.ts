import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  box-shadow: 0px 2px 9px rgba(50, 71, 92, 0.06),
    0px 4px 9px 1px rgba(50, 71, 92, 0.04),
    0px 2px 6px 4px rgba(50, 71, 92, 0.02);
  border-radius: 8px;
  background-color: white;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
