import Fooditems from "./Components/Fooditems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./Components/ErrorMessage";
function App() {
  // let fooditems=[];
  let fooditems = ["Dal", "Rice", "Green veggy", "Milk", "Roti"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage food={fooditems}></ErrorMessage>
      <Fooditems food={fooditems}></Fooditems>
    </>
  );
}

export default App;
