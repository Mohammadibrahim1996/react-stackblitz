import React, { useState, useEffect } from 'react';
import Child from './Child.jsx';
import Child1 from './Child1.jsx';
import './style.css';

export default function App() {
  const [disp, setDisp] = useState('');
  const handleDisp = (disp1) => {
    setDisp(disp1);
  };
  return (
    <div>
      <Child handleDisp={handleDisp} />
      <Child1 disp={disp} />
    </div>
  );
}
