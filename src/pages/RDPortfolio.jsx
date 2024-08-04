/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom"

function RouteDinamicPortfolio ({cardPortfolio}) {
    const {id} = useParams();
    
    return(
        <section>
            <h1>{cardPortfolio[id].title}</h1>
            <Link to='/portfolio'>Trabajos</Link>
        </section>
    )
}

export default RouteDinamicPortfolio