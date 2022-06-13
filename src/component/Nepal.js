import "./Nepal.css";

function Nepal(props) {
  let age = Math.trunc(Math.random() * 20 + 1);
  return (
    <div className="nepal">
      <h1>I Am from {props.name}</h1>
      <p>Hello Nepal Component</p>
      <p>I am {age} years old</p>
    </div>
  );
}
export default Nepal;
