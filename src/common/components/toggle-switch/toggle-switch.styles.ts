import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + span {
    background-color: #696cff;
  }

  :focus + span {
    box-shadow: 0 0 1px #696cff;
  }

  :checked + span:before {
    -webkit-transform: translateX(17px);
    -ms-transform: translateX(17px);
    transform: translateX(17px);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  ::before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;
