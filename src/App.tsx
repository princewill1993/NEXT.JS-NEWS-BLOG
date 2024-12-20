import { useState } from "react";
import "./App.css";
import PlayerCard from "./PlayerCard";

interface Prooduct {
  product_name: string;
  product_price: number;
  product_discount: number;
}

function App() {
  const [myAge, setMyAge] = useState<number>(0);
  const [product, setProduct] = useState<Prooduct>({
    product_name: "iphone",
    product_price: 6000,
    product_discount: 10.5,
  });

  const handleBuyPlayer = () => {
    alert("player purchase sealed");
  };

  return (
    <>
      <h1 style={{ fontSize: "5rem" }}>{myAge}</h1>
      <button onClick={() => setMyAge(56)}>Update age</button>

      <PlayerCard
        playerGoals={345}
        playerName={"Messi"}
        playerJerseyNumber={10}
        playerAge={38}
        playerNationality={"Argentina"}
        isPlayerRetired={false}
        handleBuyPlayer={handleBuyPlayer}
      />
    </>
  );
}

export default App;
