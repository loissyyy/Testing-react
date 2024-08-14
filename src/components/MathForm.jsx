import React, { useState } from 'react';

function MathForm() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Enter first number" 
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Enter second number" 
      />
      <button type="submit">Calculate Sum</button>
      {result !== null && <p>Sum: {result}</p>}
    </form>
  );
}

export default MathForm;
