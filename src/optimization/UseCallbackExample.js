import React, { useState, useCallback } from 'react';

export const MemoizedCounter = () => {
  const [count, setCount] = useState(0);

  // Memoized increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // No dependencies, so always the same function reference

//   const increment = () =>{
//     setCount((prevCount) => prevCount + 1);
//   }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

