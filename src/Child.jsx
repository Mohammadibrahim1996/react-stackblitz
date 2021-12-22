import React, { useState } from 'react';

export default function Child(props) {
  const [inputData, setInputData] = useState('');
  const inputDataHandle = () => {
    props.handleDisp(inputData);
  };
  return (
    <div>
      <input onChange={(e) => setInputData(e.target.value)} />
      <button onClick={(e) => inputDataHandle()}> Click</button>
    </div>
  );
}
