/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom"
import TitleSectionComponent from "../components/TitleSectionComponent";

function RouteDinamicPortfolio ({cardPortfolio}) {
    const {id} = useParams();
    
    return(
        <section>
            <TitleSectionComponent 
            subtitle={cardPortfolio[id].category}
            title={cardPortfolio[id].title}
            parrafo={cardPortfolio[id].parrafo}
            />
            {/* <h1>{cardPortfolio[id].title}</h1> */}
            <Link to='/portfolio'>Trabajos</Link>
        </section>
    )
}

export default RouteDinamicPortfolio