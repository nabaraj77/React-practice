import "./Example.css";

function Example(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age:{props.age}</p>
    </div>
  );
}
export default Example;
