import Example from "./component/Example";
//import React from "react";
function App() {
  //return React.createElement("div", { className: "nepal" }, "Hello");
  return (
    <div>
      <Example name="Geeta" age="22" />
      <Example name="Nabaraj" age="25">
        <h1>Hello I am a children</h1>
      </Example>
      <Example name="Rita" age="30" />
      <Example name="Rita" age="30" />
    </div>
  );
}
export default App;
