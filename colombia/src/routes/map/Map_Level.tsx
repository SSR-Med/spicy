//css
import "/src/static/css/map/map_level.css"
// Components
import { createSummaryLevel } from "../../components/map/MapLevelComponent"
function Map_Level(){
    const handleRedirectMap = () => {
        window.location.href = "/map";
    }
    return (
        <div className="city-map">
            <div className="home-city" onClick={handleRedirectMap}>
                <h1>Mapa</h1>
            </div>
            <div className="level-city">
                {createSummaryLevel("Fácil","1","Baja",1)}
                {createSummaryLevel("Medio","2","Aceptable",2)}
                {createSummaryLevel("Alto","3","Alta",3)}
                {createSummaryLevel("Extremo","4","Jefe",4)}
            </div>
        </div>
    )
}
export default Map_Level