import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Mary" />
      <Greeting name="Alex" />
      <Greeting name="Sarah" />
    </div>
  );
}

export default App;

