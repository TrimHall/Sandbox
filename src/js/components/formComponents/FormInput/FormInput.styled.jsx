import styled from 'styled-components';
import theme from '../../../__helpers__/theme';

export const Unit = styled.span`
  text-align: center;
  border: none;
  padding-right: 6px;
`;

export const FormInputComponent = styled.input`
  box-sizing: border-box;

  margin: 0px;
  border: 0px;
  padding: 0 8px;

  height: 100%;
  width: ${(props) => props.hasUnit ? '88%' : '100%'};

  &:focus {
    outline: 0;
  };
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${(props) => props.height};
  width: ${(props) => props.width};
  
  background-color: ${(props) => props.backgroundColor};
  border-radius: 7px;
  
  ${props => props.borderProperties ? props.borderProperties :
    `border: ${theme.defaultBorders};`
  };

  & > * {
    border-radius: 7px;
  };
`;