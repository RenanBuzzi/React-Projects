import React, {useState} from 'react';
import './Game.css';



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

function getWinner(values){

}

const Game = () => {
    const [values, setValues] = useState(getInitialState);
    const [player, setPlayer] = useState(1);

function handleClick(Key){
    if (values[Key]){
        return;
    }
        setValues ({
            ...values,
            [Key]: player,
});
setPlayer(player * -1);
}


return(
        <div className="Game">
            <div className="Game__board">
                {Array.from({length: 9}).map((_, index) => {
                    const Key = getKeyfromIndex(index);
                       return (
                            <button 
                                onClick={() => 
                                handleClick(Key)}
                                key={index} 
                                type="button"
                            >
                            {getLabel(values[Key])}
                            </button>    
                    )})};
            </div>
        </div>
    )
}
export default Game;