import React, { useMemo, useState } from "react";

export const UseMemoExample = () => {
  const [users, setUsers] = useState([
    { name: "John", active: true },
    { name: "Mike", active: false },
    { name: "Rohit", active: true },
  ]);
  const [someState, setSomeState] = useState(0);
  console.log("UseMemoExample Component Rendered");
  return (
    <div>
      <h3>useMemo example</h3>
      <button onClick={() => {
        setSomeState(someState + 1)
        // users.push({ name: "Virat", active: true },)
        // setUsers([...users]);
      }}>
        Change Parent State
      </button>
      <ComponentUsingMemo users={users}></ComponentUsingMemo>
      <ComponentWithoutMemo users={users}></ComponentWithoutMemo>
    </div>
  );
};

function ComponentUsingMemo({ users }) {
  console.log("ComponentUsingMemo is rendered")
  const activeUsers = useMemo(() => {
    console.log("Filtering users.")
    return users.filter((user) => user.active)
  }, [users]);

  return <div>Using Memo: User count {activeUsers.length}</div>;
}

function ComponentWithoutMemo({ users }) {
  console.log("ComponentWithoutMemo is rendered")
  const activeUsers = users.filter((user) => user.active)
  return <div>Without Memo: User count {activeUsers.length}</div>;
}