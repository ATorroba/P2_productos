import {Link} from "react-router-dom"; 

export default function NoMatch (props){
    return(
        <div>
            <h3 id="info">Ruta no encontrada</h3>
            <Link to="/"><button id="volver">Volver</button></Link>
        </div>
    )
}