import "./App.css";

import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [counter, setCounter] = useState(0);
  const [drinks, setDrinks] = useState(null);

  async function getDrinks() {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
    );
    setDrinks(response.data.drinks);
  }

  useEffect(() => {
    getDrinks();
  }, []);

  // useEffect(() => {
  //   console.log(counter);
  // }, [counter]);

  return (
    <div className="App">
      <h1>Have some drinks!</h1>
      <ul>
        {drinks ? (
          drinks.map((drink) => {
            return <li key={drink.idDrink}>{drink.strDrink}</li>;
          })
        ) : (
          <div>Loading</div>
        )}
      </ul>

      {/* <h3>{counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click me to have fun!
      </button> */}
    </div>
  );
}

export default App;
