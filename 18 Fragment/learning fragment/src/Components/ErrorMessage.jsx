const ErrorMessage = ({food}) => {
    // let fooditems = ["Dal", "Rice", "Green veggy", "Milk", "Roti"];

  return (<>{food.length == 0 && <h1>I am still hungrey</h1>}</>
  );
};

export default ErrorMessage;
