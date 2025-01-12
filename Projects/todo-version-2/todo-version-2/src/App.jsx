import AppName from "./Components/AppName";
import FirstRow from "./Components/FirstRow";

import Items from "./Components/items";

import "./App.css";

function App() {
  const todoitems=[{
    name:"Buy Milk",
    date :"4/10/2024",
  },
  {
    name:"Go to college",
    date :"4/10/2024",
  },
  {
    name:"Namkeen",
    date :"4/10/2024",
  }

]
  return (
    <div className="todo-container" style={{ textAlign: "center" }}>
      <AppName />
      <FirstRow />
      <Items items={todoitems}></Items>
    </div>
  );
}

export default App;
