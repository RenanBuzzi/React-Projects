import React, { useState, useEffect } from 'react'
import './Game.css';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function getInitialState(){
    const state = {};
    for (let r=0; r < 3; r++){
        for(let c=0; c < 3; c++){
            state[`${r}-${c}`] = null;
        }
    }
    return state;
}

const getKeyfromIndex = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;

    return `${row}-${col}`;
}

const getLabel = (value) => {
    if(!value){
        return null;
    }
    return value > 0 ? 'O' : 'X';
}

function getWinner(v){
    for (let r=0; r < 3; r++){
        for(let c=0; c < 3; c++){
            
            const sumRow = v[`${r}-${c}`] +
                           v[`${r}-${c+1}`] +
                           v[`${r}-${c+2}`]

            const sumCol = v[`${r}-${c}`] +
                           v[`${r + 1}-${c}`] +
                           v[`${r + 2}-${c}`]  
                           
            const sumDiagonal = v[`${r}-${c}`] +
                                v[`${r + 1}-${c + 1}`] +
                                v[`${r + 2}-${c + 2}`]
             
            const sumReverseDiagonal =  v[`${r}-${c}`] +
                                v[`${r + 1}-${c - 1}`] +
                                v[`${r + 2}-${c - 2}`]

            if((sumRow === 3 || sumRow === -3) || 
               (sumCol === 3 || sumCol === -3) || 
               (sumDiagonal === 3 || sumDiagonal === -3) || 
               (sumReverseDiagonal === 3 || sumReverseDiagonal === -3))
            {
                return sumRow || sumCol || sumDiagonal || sumReverseDiagonal;   
            }
    }
}
    return null;
}

const Game = () => {
    const [values, setValues] = useState(getInitialState);
    const [player, setPlayer] = useState(1);
    const [winner, setWinner] = useState(null);
    const itsATie = Object
                .values(values)
                .filter(Boolean)
                .length === 9 && !winner;


function handleClick(Key){
    if (values[Key]){
        return;
    }
const newValues = {
    ...values,
    [Key]: player
};    
setValues(newValues);
setPlayer(player * -1);
const newWinner = getWinner(newValues);

if(newWinner){
    setWinner(newWinner > 0 ? 1 : -1)
}
}

function reset(){
    setWinner(null);
    setValues(getInitialState);
    setPlayer(1);
}

useEffect(() => {
    if (winner) {
      toast(<p>O Ganhador e {winner > 0 ? 'O' : 'X'}</p>)
    }

    if (itsATie) {
      toast(<p>Houve um empate</p>)
    }
  }, [winner, itsATie])


return(
        <div className="Game">
            <div className="Game__board">
                {Array.from({length: 9}).map((_, index) => {
                    const Key = getKeyfromIndex(index);
                       return (
                            <button className="buttoes" 
                                onClick={() => 
                                handleClick(Key)}
                                key={index} 
                                type="button"
                            >
                            {getLabel(values[Key])}
                            </button>    
                    )})};
            </div>
            {(winner || itsATie) && <button onClick={reset}>Reininiar</button>}
        </div>
    )
}
export default Game;