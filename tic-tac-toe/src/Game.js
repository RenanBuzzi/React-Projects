import React, {useState} from 'react';
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

            /*Checking Rows */
            const sumRow = v[`${r}-${c}`] +
                           v[`${r}-${c+1}`] +
                           v[`${r}-${c+2}`]
            if(sumRow == 3 || sumRow === -3)
            {
                return sumRow;
            }
            /*Checking Columns */
            const sumCol = v[`${r}-${c}`] +
                           v[`${r + 1}-${c}`] +
                           v[`${r + 2}-${c}`]
            if(sumCol == 3 || sumCol === -3)
            {
            return sumCol;
            }

              /*Checking Diagonal */
            const sumDiagonal = v[`${r}-${c}`] +
                                v[`${r + 1}-${c + 1}`] +
                                v[`${r + 2}-${c + 2}`]
            if(sumDiagonal == 3 || sumDiagonal === -3)
            {
            return sumDiagonal;
            }

            /*Checking Reverse Diagonal */
            const sumDiagonalReverse =  v[`${r}-${c}`] +
                                        v[`${r + 1}-${c - 1}`] +
                                        v[`${r + 2}-${c - 2}`]
            if(sumDiagonalReverse == 3 || sumDiagonalReverse === -3)
            {
            return sumDiagonalReverse;
            }
        }
    }
    return null;
}

const Game = () => {
    const [values, setValues] = useState(getInitialState);
    const [player, setPlayer] = useState(1);
    const [winner, setWinner] = useState(null);

function handleClick(Key){
    if (values[Key]){
        return;
    }
const newValues = {
    ...values,
    [Key]: player,
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

const itsAtie = Object
                .values(values)
                .filter(Boolean)
                .length === 9 && !winner;

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
            {(winner || itsAtie) && (
               <div className="Game__menu">
                    {winner ? (
                        toast(<p>O Ganhador e {winner > 0 ? 'O' : 'X'}</p>),
                        <button onClick={reset}>Reininiar</button>
                    ): (
                        toast(<p>Houve um empate</p>),
                        <button onClick={reset}>Reininiar</button>
                    )}
               
           </div>
            )}
           
        </div>
    )
}
export default Game;