/* eslint-disable react/prop-types */
import '../css/components-css/title-section.css'
import { Icon } from "@iconify/react/dist/iconify.js"

function TitleSectionComponent(props) {
    return(
        <header className='title-wrapper-component'>
            <h2 className='montserrat-subtitle'>{props.subtitle}</h2>
            <h1 className='oswald-title'>{props.title} <span><Icon className='star' icon="streamline:star-2-solid" /></span> </h1>   
            <p className='poppins-regular'>{props.parrafo}</p>  
        </header>
    )
}

export default TitleSectionComponent