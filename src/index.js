import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher />
      <p>Hello poliglost</p>
    </div>
  )
}

const HookSwitcher = () => {

  const [color, setColor] = useState('black');
  const [fontSize, setFontSize] = useState(14);
  return (
    <div style={{
      padding: '10px', 
      backgroundColor: color,
      fontSize: `${fontSize}px`}}>
        Hellouchik
      <button onClick={()=> setColor('gray')}>Dark</button>
      <button onClick={()=> setColor('white')}>Light</button>
      <button onClick={()=> setFontSize((state) => state + 2)}>+Size</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
