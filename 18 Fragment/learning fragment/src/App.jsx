

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let fooditems=[];
  let fooditems=["Dal","Rice","Green veggy","Milk","Roti"];

  // if(fooditems.length==0)
  // {
  //   return (
  //    <h1>I am still hungrey</h1>
  //   )
  // }
return (

  
     <>
   
    <h1>Healthy Food</h1>
    {fooditems.length==0 && <h1>I am still hungrey</h1> }
<ul className="list-group">
{fooditems.map((item)=>(
  <li key={item}className="list-group-item">{item}</li>
)
)
}
  
  
</ul>
</>

  );
};

export default App;
