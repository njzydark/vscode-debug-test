import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("test message");
    say();
  }, []);
  const say = () => {
    console.log("hello react");
  };
  return <div>Hello React</div>;
}
