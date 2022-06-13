import "./Example.css";
import Nepal from "./Nepal";
function Example(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age:{props.age}</p>
      <p>{props.children}</p>
      <Nepal name="Nepal Component" />
    </div>
  );
}
export default Example;
