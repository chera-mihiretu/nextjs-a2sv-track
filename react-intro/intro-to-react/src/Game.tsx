import React, { useState } from 'react'
import Board from './components/Board';

const Game = () => {

  const [IsNext, setIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill("")]);
  const currentState = history[history.length - 1]
  function handleClick(square: string[]){
      setHistory([...history, square])
      setIsNext(!IsNext)
  }


  function popUntil(move : number) {
    return () => {
      setHistory(history.slice(0, move + 1))
      setIsNext(move % 2 === 0)
    }
  }

  const moves = history.map((square, move) => {
    let desc;

    if (move > 0) {
      desc = "Go back to move #" + move;
    } else  {
      desc = "Go back to start";
    }


    return (
      <ol>Ashesi University: 
        <button key={move} onClick={popUntil(move)}>{desc}</button>
      </ol>
    );

  })


  return (
    <div className='game'>
        <div className='game-board'>
            <Board isNext={IsNext} squares={currentState} handleClick={handleClick}/>
        </div>
        <div>
          <ol>{moves}</ol>
        </div>
    </div>
  )
}

export default Game
