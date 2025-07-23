import { useState } from "react";

function GreetingCard({ name }) {
  const [clicks, setClicks] = useState(0);
  const [greeted, setGreeted] = useState(false);

  const handleClick = () => {
    setClicks(clicks + 1);
    setGreeted(true);
  };

  const resetAll = () => {
    setClicks(0);
    setGreeted(false);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      margin: '1rem 0',
      borderRadius: '8px',
      backgroundColor: 'rgb(20,50,100)'
    }}>
      <h2>Hello <b>{name}</b> React Developer</h2>
      

      <button onClick={handleClick}>Counter</button>
      <button onClick={resetAll} style={{ marginLeft: '10px' }}>Reset</button>

      <h3>You clicked {clicks} times</h3>

      {greeted && <p>👋 You’ve greeted {name}!</p>}
    </div>
  );
}

export default GreetingCard;
