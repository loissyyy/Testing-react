// src/App.jsx
import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import DisplayComponent from './components/DisplayComponent';

const App = () => {
  const [submittedText, setSubmittedText] = useState('');

  return (
    <div>
      <FormComponent onSubmit={setSubmittedText} />
      <DisplayComponent text={submittedText} />
    </div>
  );
};

export default App;
