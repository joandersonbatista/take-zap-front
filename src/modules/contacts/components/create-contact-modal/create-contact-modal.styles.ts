import styled from 'styled-components';

import { Button as DefaultButton } from '@/common/components/button/button';
import { Input as DefaultInput } from '@/common/components/input/input';
import { Modal as DefaultModal } from '@/common/components/modal/modal';

export const Modal = styled(DefaultModal)`
  width: 530px;
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

export const InfoMessage = styled.span`
  display: block;
  font-size: 15px;
  color: rgba(50, 71, 92, 0.68);
  text-align: center;
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

export const Input = styled(DefaultInput)`
  margin-top: 20px;
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
