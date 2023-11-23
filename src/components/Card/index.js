import style from "./style.module.css";
const Pokemon_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let take3Numb = (number) => ( number<=999 ? `00${number}`.slice(-3) : number);
export default function Card ({children}) {
    let imgSrc = `${Pokemon_API}${take3Numb(children.id)}.png`;
    return (
        <div className={style.card}>
        <h3>{children.name}</h3>
        <img  src = {imgSrc} alt={children.name} ></img>
        <p id="type">Type:{children.type}</p>
        <p id="exp">Exp:{children.base_experience}</p>
        </div>
    )
}