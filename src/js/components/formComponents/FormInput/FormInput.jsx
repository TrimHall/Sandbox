import React from 'react';
import { 
  FormInputComponent,
  Wrapper,
  Unit
} from './FormInput.styled.jsx';

const FormInput = ({
  value,
  height = '30px',
  width = '100px',
  backgroundColor = '#fff',

  unitValue,

  onChange,
  onBlur,
}) => (
  <Wrapper
    height={height}
    width={width}
    backgroundColor={backgroundColor}
  >
    <FormInputComponent 
      value={value}
      onChange={onChange}
      onBlur={onBlur}

      hasUnit={unitValue}
    />
    { unitValue && <Unit>{unitValue}</Unit> }
  </Wrapper>
);

export default FormInput;
