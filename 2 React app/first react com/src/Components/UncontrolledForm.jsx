import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null); 

  const handleSubmit = (name) => {
    // alert("Typed Name: " + nameRef.current.value); 
    alert (`name  ${name}`)
  };

  return (
    <div>
      {/* <input type="text" ref={nameRef} />  */}
      {/* <button onClick={handleSubmit}>Submit</button> */}
      <button onClick={()=>handleSubmit("ash")}>click me</button>
    </div>
  );
}

export default UncontrolledForm;
