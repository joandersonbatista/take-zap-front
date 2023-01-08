import styled from 'styled-components';

import { Button as DefaultButton } from '@/common/components/button/button';
import { Input as DefaultInput } from '@/common/components/input/input';
import { Modal as DefaultModal } from '@/common/components/modal/modal';
import { RadioInput as DefaultRadioInput } from '@/common/components/radio-input/radio-input';
import { ToggleSwitch } from '@/common/components/toggle-switch/toggle-switch';

export const Modal = styled(DefaultModal)`
  width: 450px;
  top: 350px;
`;

export const TitleModal = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: rgba(50, 71, 92, 0.8);
  text-align: center;
  width: 100%;
  padding: 10px 0px;
`;

export const Hr = styled.hr`
  height: 1px;
  background-color: #e1e5ea;
  border: none;
`;

export const FormContent = styled.div`
  width: 100%;
  padding: 0px 32px;
  margin-top: 15px;
`;

export const Input = styled(DefaultInput)<{ $isDate?: boolean }>`
  margin-top: 20px;
  width: ${({ $isDate }) => ($isDate === true ? '170px' : '100%')};
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
  border-top: 1px solid #e1e5ea;
  margin-top: 50px;
`;

export const Button = styled(DefaultButton)`
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  color: rgba(50, 71, 92, 0.6);
  font-weight: 600;
  margin-top: 25px;
`;

export const RadioInput = styled(DefaultRadioInput)`
  margin-top: 9px;
`;

export const FilterDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  font-size: 16px;
  color: rgba(50, 71, 92, 0.6);
  font-weight: 600;
`;

export const Toggle = styled(ToggleSwitch)``;
