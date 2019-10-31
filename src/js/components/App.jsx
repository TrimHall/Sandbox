import React from 'react';
import {
  FormInput,
  TextArea
} from './formComponents';

const App = () => {
  return(
    <>
      <TextArea />
      <FormInput
        backgroundColor={'#fff'}
        unitValue={'px'}
      />
    </>
  )
};

export default App;
