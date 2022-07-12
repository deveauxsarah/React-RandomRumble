import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux/es/exports';

// const [players, setPlayers] = useState([
//   {name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1},
//   {name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2},
//   {name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3},
//   {name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4}
// ]);
const PlayerList = () => {

  const players = useSelector(state => state.fight.players)

  const displayPlayers = () => {
    return Object.keys(players).map(key => (
      <PlayerCard key={players[key].id} player={players[key]} />
    ));
  }
    return (
      <div className='row'>
        {displayPlayers()}
      </div>
    );
  }

export default PlayerList;