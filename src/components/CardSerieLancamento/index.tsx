import { serieLancamentoProps } from "./CardSerieLancamentoType"


export const CardSerieLancamento = ({serieLancamento} : serieLancamentoProps) => {
    return(
        <div className="card">
            <img src={`https://www.themoviedb.org/t/p/original/${serieLancamento.poster_path}`} alt="serieLancamentoPoster" />
            <div className="cardInfo">
                <p>{serieLancamento.name}</p>
                <p>{serieLancamento.first_air_date}</p>
            </div>
        </div>
    )
}