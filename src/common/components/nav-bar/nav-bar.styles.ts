import styled from 'styled-components';

import { Icon as DefaultIcon } from '@/common/components/icon/icon';
import { Select as DefaultSelect } from '@/common/components/select/select';

export const SelectLanguage = styled(DefaultSelect)`
  margin-left: auto;
  margin-right: 7px;
`;

export const Container = styled.div`
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 7px 0px;
`;

export const NotificationIcon = styled(DefaultIcon).attrs({
  name: 'notification',
})`
  height: 22px;
  width: 22px;
  margin-right: 25px;
  cursor: pointer;
`;

export const CurrentScreen = styled.span`
  color: rgba(50, 71, 92, 0.68);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const InfoPerfilContainer = styled.div`
  display: flex;
  height: 100%;
  margin-left: 22px;
  align-items: center;
`;

export const InfoPerfilContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 42px;
`;

export const ProfileName = styled.span`
  color: rgba(50, 71, 92, 0.87);
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.15px;
`;

export const UserType = styled.span`
  color: rgba(50, 71, 92, 0.68);
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.15px;
`;

export const Hr = styled.hr`
  align-self: center;
  height: 100%;
  width: 2px;
  opacity: 0.2;
  background-color: rgba(50, 71, 92, 0.68);
  border: none;
  transform: rotate(-180deg);
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  height: 30px;
  margin-right: 10px;
`;
