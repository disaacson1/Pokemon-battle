'use client'
import React, {useState, useEffect} from "react";
import Card from "./Card";

const Pokemon = () => {
    const [pokemon1, setPokemon1] =useState()
    const [pokemon2, setPokemon2] = useState()
    const [player1, setPlayer1] = useState()
    const [player2, setPlayer2] = useState()
    const [winner, setWinner] = useState()

useEffect(() => {
 if(pokemon1?.stats?.[0]?.base_stat === pokemon2?.stats?.[0]?.base_stat) {
    setWinner('DRAW')
 } else if(pokemon1?.stats?.[0]?.base_stat > pokemon2?.stats?.[0]?.base_stat) {
    setWinner(`${player1} Wins!`)
} else {
    setWinner(`${player2}  Wins!`)
}
    
}, [pokemon1, pokemon2, player1, player2])
   


const handleRandom = () => {
    let randomNumber1 = Math.floor(Math.random(1, 2000) * 100)+1
    let randomNumber2 = Math.floor(Math.random(1, 2000) * 100)+1



    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber1}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        setPokemon1(data)
    })
    .catch((error) => {
        console.log(error.message)
    })
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber2}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        setPokemon2(data)
    })
    .catch((error) => {
        console.log(error.message)
    })
}

const handlePlayer1Change = (e) => {
    setPlayer1(e.target.value)
}
const handlePlayer2Change = (e) => {
    setPlayer2(e.target.value)
}

    return (
        <div className="all" >
            <div><h1 className="head">I Challenge YOU...</h1></div>
             <div className="inputs">
                <input value={player1} onChange={handlePlayer1Change}></input>
                <input value={player2} onChange={handlePlayer2Change}></input> 
            </div>
            &nbsp;
        <div className="container">
           

           <div className="card1"> <Card pokemon={pokemon1} /> </div>
          <div className="battlebutton"> <button onClick={handleRandom}>Battle</button> </div>
          <div className="card2"> <Card pokemon={pokemon2} /> </div>

        </div>
        <h1 className="winner">{winner}</h1>
        </div>
    )
}



export default Pokemon;