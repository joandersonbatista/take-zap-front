import styled from 'styled-components';

import { Button } from '@/common/components/button/button';
import { DropDown } from '@/common/components/drop-down/drop-down';
import { Input } from '@/common/components/input/input';

export const Container = styled.div`
  background: #ffffff;
  height: 100%;
  width: 100%;
  box-shadow: 0px 2px 9px rgba(50, 71, 92, 0.06),
    0px 4px 9px 1px rgba(50, 71, 92, 0.04),
    0px 2px 6px 4px rgba(50, 71, 92, 0.02);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const IdContent = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.15px;
  color: #696cff;
  padding: 17px 0px;
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageProfile = styled.img`
  height: 34px;
  width: 34px;
  border-radius: 50%;
`;

export const ContactName = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 157%;
  letter-spacing: 0.1px;
  color: rgba(50, 71, 92, 0.87);
`;

export const InfoContact = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.15px;
  padding: 17px 0px;
  color: rgba(50, 71, 92, 0.6);
`;

export const StatusBlock = styled.span`
  margin: 17px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.16px;
  text-transform: uppercase;
  background: rgba(114, 225, 40, 0.12);
  border-radius: 16px;
  padding: 3px 10px;
  color: #71dd37;
`;

export const SeacrhInput = styled(Input)`
  width: 250px;
`;

export const ActionsDropDown = styled(DropDown)`
  margin-left: 13px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px;
`;

export const CreateContactButton = styled(Button)`
  margin-right: 20px;
  margin-left: auto;
`;

export const ImportContactButton = styled(Button)``;

export const FilterButton = styled(Button).attrs({ iconName: 'filter_icon' })``;
