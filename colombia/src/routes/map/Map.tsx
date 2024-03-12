//css
import "/src/static/css/map/map.css"
// Components
import { createMapDiv } from "../../components/map/MapComponent"

const handleRedirectHome = () => {
    window.location.href = "/home"

}

function Map(){
    return (
        <div className="colombia-map">
            <div className="level-map">
                <div className="home-map" onClick={handleRedirectHome}>
                    <h1>Inicio</h1>
                </div>
                {createMapDiv("/src/static/images/map/bellokistan.jfif","Bellokistán")}
                {createMapDiv("/src/static/images/map/bogotrash.jfif","Bogotrash",true)}

            </div>
        </div>
    )
}

export default Map