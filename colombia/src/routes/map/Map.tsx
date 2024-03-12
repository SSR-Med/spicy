//css
import "/src/static/css/map/map.css"
// Styles
import { createMapDiv } from "../../components/MapComponent"

function Map(){
    return (
        <div className="colombia-map">
            <div className="level-map">
                <div className="home-map">
                    <h1>Inicio</h1>
                </div>
                {createMapDiv("/src/static/images/map/bellokistan.jfif","Bellokistán")}
                {createMapDiv("/src/static/images/map/bogotrash.jfif","Bogotrash",true)}

            </div>
        </div>
    )
}

export default Map