import styled from 'styled-components';

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
