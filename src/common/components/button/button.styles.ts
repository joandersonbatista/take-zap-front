import styled, { css } from 'styled-components';

import { Icon as DefaultIcon } from '@/common/components/icon/icon';

import { type ButtonPropsStyles, ButtonTypes } from './button.types';

export const Button = styled.button<ButtonPropsStyles>`
  border: none;
  cursor: pointer;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 23px;
  border-radius: 6px;
  color: #ffffff;

  ${({ $type }) => buttonTypeMapper[$type]}

  ${({ $disabled }) =>
    $disabled &&
    css`
      background: rgba(50, 71, 92, 0.1);
    `};
`;

const labelStyle = css`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
`;

const buttonTypeMapper: Record<string, ReturnType<typeof css>> = {
  [ButtonTypes.default]: css`
    box-shadow: 0px 1px 6px 2px rgba(50, 71, 92, 0.06),
      0px 2px 6px 1px rgba(50, 71, 92, 0.04),
      0px 1px 4px 2px rgba(50, 71, 92, 0.02);
    background: #696cff;

    ${labelStyle}
  `,
  [ButtonTypes.outline]: css`
    border: 1px solid rgba(109, 120, 141, 0.5);
    color: #8592a3;

    ${labelStyle}
  `,
  [ButtonTypes.danger]: css`
    background: #ff3e1d;
    box-shadow: 0px 1px 6px 2px rgba(50, 71, 92, 0.06),
      0px 2px 6px 1px rgba(50, 71, 92, 0.04),
      0px 1px 4px 2px rgba(50, 71, 92, 0.02);

    ${labelStyle}
  `,
  [ButtonTypes.tertiary]: css`
    color: #696cff;
    padding: 0px;

    ${labelStyle};
  `,
};

export const Icon = styled(DefaultIcon)`
  margin-right: 7px;
  width: 15px;
`;
