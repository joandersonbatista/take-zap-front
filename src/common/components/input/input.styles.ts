import styled from 'styled-components';

import { Icon } from '@/common/components/icon/icon';

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input<{ $isWithIcon: boolean }>`
  padding: 8px 14px;
  padding-right: ${({ $isWithIcon }) => ($isWithIcon ? '50px' : '14px')};
  border: 1px solid rgba(50, 71, 92, 0.22);
  background-color: transparent;
  outline-color: rgba(50, 71, 92, 0.22);
  border-radius: 6px;
  transition: 0.5s;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(50, 71, 92, 0.87);
  width: 100%;

  :focus {
    outline-color: #696cff;
  }

  ::placeholder {
    color: rgba(50, 71, 92, 0.4);
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
  }
`;

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const RightIcon = styled(Icon)<{ $onPress: boolean }>`
  position: absolute;
  right: 17px;
  height: 20px;
  fill-opacity: 0.4;
  width: 20px;
  cursor: ${({ $onPress }) => ($onPress ? 'pointer' : '')};
  transition: 0.3s;

  :hover {
    fill-opacity: 0.6;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  color: rgba(50, 71, 92, 0.6);
  font-weight: 600;
  margin-bottom: 5px;
`;
