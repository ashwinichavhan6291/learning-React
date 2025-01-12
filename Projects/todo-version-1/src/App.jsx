import AppName from "./Components/AppName";
import FirstRow from "./Components/FirstRow";
import SecondRow from "./Components/SecondRow";
import ThirdRow from "./Components/ThirdRow";
import "./App.css";

function App() {
  return (
    <div className="todo-container" style={{ textAlign: "center" }}>
      <AppName />
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
}

export default App;
