import React, { useState } from 'react';

const CounterButton: React.FC = () => {
  const [count, setCount] = useState<number>(5);

  const incrementCount = () => {
    setCount(count + 50);
  };

  return (
    <div className="counter-container">
      <button className="increment-button" onClick={incrementCount}>
        {count}
      </button>
    </div>
  );
};

export default CounterButton;
