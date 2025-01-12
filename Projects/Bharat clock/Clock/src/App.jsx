import "./App.css";
import Heading from "./Heading";
import Slogan from "./Slogan";
import Time from "./Time";

function App() {
  let time = new Date();
  return (
    <center>
      
      <div className="container">
      <Heading></Heading>
        <Slogan></Slogan>
        <Time></Time>

        
      </div>
    </center>
  );
}
export default App;
