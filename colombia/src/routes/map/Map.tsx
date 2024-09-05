//css
import "/src/static/css/map/map.css"
// Components
import {createMapDiv} from "../../components/map/MapComponent"
import { useState, useEffect } from "react"
//Helpers
import { getWorlds } from "./actions"
import { create } from "@mui/material/styles/createTransitions"

const handleRedirectHome = () => {
    window.location.href = "/home"

}

function Map(){
    const [worlds, setWorlds] = useState<{id: number, name: string, urlImage: string, hidden: boolean}[]>([]);

    useEffect(() => {
        getWorlds().then((result) => {
            if (worlds.length === 0) {
                setWorlds(result)
            }
        });
    }, []);

    return (
        <div className="colombia-map">
            <div className="level-map">
                <div className="home-map" onClick={handleRedirectHome}>
                    <h1>Inicio</h1>
                </div>
                {worlds.map((world: {id: number, name: string, urlImage: string, hidden: boolean}) => createMapDiv(world.urlImage, world.name, world.hidden, world.id))}
            </div>
        </div>
    );
}

export default Map;