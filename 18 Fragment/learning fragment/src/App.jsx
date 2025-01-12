import Fooditems from "./Components/Fooditems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./Components/ErrorMessage";
function App() {
  // let fooditems=[];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage></ErrorMessage>
      <Fooditems></Fooditems>
    </>
  );
}

export default App;
