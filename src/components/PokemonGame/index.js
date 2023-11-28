import { useState } from "react";
import Card from "../Card";
import style from "./style.module.css";
const pokemons = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
] 

export default function PokemonGame({cardsCount}) {
  const cards = Array.from({length: cardsCount});
  console.log(cards);
  const [props, setProps] = useState(pokemons);
  let hand1 = 0; 
  console.log(props[5].base_experience);
  for (let i in cards) {
   hand1 += props[i].base_experience;
  }
  let hand2 = 0;
  for (let i in cards) {
  hand2 += props[Number(i)+4].base_experience;
  }
  function play () {
    const indexArray = [];
for (let i =0; i<8; i++) {
  const randomIndex = Math.floor(Math.random() * pokemons.length);
  if (indexArray.length >=8) {
    break;
  } else if (!indexArray.includes(randomIndex)) {
  indexArray.push(randomIndex);
  }  else {
    i--;
    continue;
  } 
 const newPokemons = [];
  for (let i of indexArray) {
  newPokemons.push(pokemons[i]);
  }
  setProps(newPokemons);
}
}

  return (
   <div className={style.wrapper}>
   <button className = {style.button} onClick={play}>Play</button>
   <h1 id="first_h1" className={hand1>hand2 ? style.winText : style.loseText}>{hand1>hand2 ? " Winning Hand": "Losing hand"}</h1>
   <p>Total Experience: {hand1}</p>
   <div className={style.cards}>
   {cards.map((a , index) => (<Card key={index}>{props[index]}</Card>))}
   </div>
   <h1 id="second_h1" className={hand2>hand1 ? style.winText : style.loseText}>{hand2>hand1 ? " Winning Hand": "Losing hand"}</h1>
   <p>Total Experience:{hand2}</p>
   <div className={style.cards}>
   {cards.map((a , index) => (<Card key={index}>{props[index+4]}</Card>))}
   </div>
   </div>
  );
}
