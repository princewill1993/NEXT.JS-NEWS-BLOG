interface PlayerProps {
  playerName: string;
  playerJerseyNumber: number;
  playerAge: number;
  playerNationality: string;
  isPlayerRetired: boolean;
  playerGoals?: number;
  handleBuyPlayer: () => void;
}

function PlayerCard(props: PlayerProps) {
  async function fetchPlayerDetails(): Promise<void> {
    try {
      // fetch data
      const response = await fetch("url");
      const data = await response.json();
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>{props.playerName}</h1>
      <h2>{props.playerJerseyNumber}</h2>
      <h3>{props.playerAge}</h3>
      <p>{props.playerNationality}</p>
      <p>{props.playerGoals }</p>
      <p>{props.isPlayerRetired === true ? "retired" : "active"}</p>
      <button onClick={props.handleBuyPlayer}>Buy player</button>
      <button onClick={fetchPlayerDetails}>Get player info</button>
    </div>
  );
}

export default PlayerCard;
