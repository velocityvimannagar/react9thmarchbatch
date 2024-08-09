import React, { useState } from "react";

export const ReactMemoExample = () => {
  const [value, setValue] = useState(0);
  const [anotherValue, setAnotherValue] = useState(1);
  console.log("Parent component is render");
  return (
    <div>
      <h3>React.Memo example</h3>
      <button onClick={() => setAnotherValue(anotherValue + 1)}>
        Change Parent state
      </button>
     <button onClick={() => setValue(value + 1)}>
        Change Prop passed to child
     </button>
      <MemoizedComponent value={value}></MemoizedComponent>
      <NonMemoizedComponent value={value}></NonMemoizedComponent>
    </div>
  );
};

const MemoizedComponent = React.memo(({ value }) => {
    console.log("Memoized child component is rendered");
    return <> Value: {value}</>;
  });
  
const NonMemoizedComponent = ({ value }) => {
  console.log("NonMemoizedComponent Child component is rendered");
  return <> Value: {value}</>;
};