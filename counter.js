import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={resetCount} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
