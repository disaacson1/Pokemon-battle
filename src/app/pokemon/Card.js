import React from "react";

const Card = ({pokemon}) => {
    return (
        <div>
             <div> {pokemon?.name?.toUpperCase()}</div>
            <div><img  src={pokemon?.sprites?.front_shiny} /></div>
            <div> HP: {pokemon?.stats?.[0]?.base_stat}</div> 
            
        </div>
    )
}

export default Card;