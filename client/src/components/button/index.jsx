import './styles.css';

export const Button =({type})=>{
    return(
        <button className="button" type="submit">{type}</button>
    )
}