import styled from 'styled-components';

import { Icon } from '@/common/components/icon/icon';
import { Select as DefaultSelect } from '@/common/components/select/select';

export const SelectRowsPerPage = styled(DefaultSelect)``;

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background: rgba(245, 245, 245, 0.55);
`;

export const Tbody = styled.tbody`
  display: block;
  overflow: auto;
  height: 100%;
  width: 100%;

  /* Designing for scroll-bar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #999999;
    border-radius: 5px;
  }
`;

export const Tfoot = styled.tfoot`
  padding: 17px;
`;

export const Tr = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

export const Th = styled.th<{
  $isShortHeader: boolean;
}>`
  text-align: left;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.17px;
  color: rgba(50, 71, 92, 0.87);
  padding: 15px 20px;
  width: ${({ $isShortHeader }) => ($isShortHeader ? '7%' : '')};
`;

export const Td = styled.td<{ $isShortRow: boolean }>`
  border-top: 1px solid rgba(50, 71, 92, 0.12);
  padding: 10px 20px;
  width: ${({ $isShortRow }) => ($isShortRow ? '7%' : '')};
`;

export const TdFoot = styled.td`
  border-top: 1px solid rgba(50, 71, 92, 0.12);
  padding: 17px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ThContent = styled.div<{ $withoutBorder: boolean }>`
  border-right: ${({ $withoutBorder }) =>
    $withoutBorder ? 'none' : '1.5px solid'};
  border-color: rgba(50, 71, 92, 0.12);
  display: flex;
  align-items: center;
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
  margin-left: 12px;
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

export const RowsPerPage = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.15px;
  margin-right: 10px;
  color: rgba(50, 71, 92, 0.6);
`;

export const RowsPerPageInfo = styled.span`
  font-style: normal;
  font-weight: 400;
  margin-left: 33px;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.15px;
  color: rgba(50, 71, 92, 0.87);
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

export const ActionsContent = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const DeleteDataButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  height: max-content;
`;

export const TrashIcon = styled(Icon).attrs({ name: 'trash_icon' })`
  height: 24px;
  size: 24px;
`;

export const SettingsIcon = styled(Icon).attrs({ name: 'settings_contact' })`
  height: 28px;
  size: 28px;
  margin-top: 4px;
`;

export const ChevronTable = styled(Icon).attrs({ name: 'chevron_table' })<{
  $rotate?: boolean;
  $disabled: boolean;
}>`
  cursor: pointer;
  height: 24px;
  size: 24px;
  fill: rgba(50, 71, 92, 0.87);
  fill-opacity: ${({ $disabled }) => ($disabled ? '0.54' : '')};
  margin-left: 42px;
  transform: ${({ $rotate }) =>
    $rotate === undefined ? 'rotate(0)' : 'rotate(-180deg)'};
`;

export const SettinsIconContent = styled.button`
  border: none;
  background: none;
  padding: 2px 12px;
  margin-left: 4px;
  cursor: pointer;
`;

export const NextPage = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const SelectInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  cursor: pointer;
  border: 2px solid rgba(50, 71, 92, 0.38);
  height: 18px;
  width: 18px;
  border-radius: 4px;
  display: grid;
  place-content: center;

  :checked {
    background-color: #696cff;
    border-color: #696cff;
    box-shadow: 0px 2px 4px rgba(105, 108, 255, 0.4);

    ::after {
      content: url('check-box.svg');
      margin-left: 1px;
      margin-bottom: 1px;
    }
  }
`;
