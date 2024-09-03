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
    const [worlds, setWorlds] = useState<{id: string, name: string, urlImage: string, hidden: boolean}[]>([]);

    useEffect(() => {
        let _worlds : {id: string, name: string, urlImage: string, hidden: boolean}[] = [];
        getWorlds().then((result) => _worlds.push(...result));
        setWorlds(_worlds);
    }, []);

    console.log(...worlds);

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
    // return (
    //     <div className="colombia-map">
    //         <div className="level-map">
    //             <div className="home-map" onClick={handleRedirectHome}>
    //                 <h1>Inicio</h1>
    //             </div>
    //             {worlds.map((world: {id: string, name: string, urlImage: string, hidden: boolean}) => createMapDiv(world.urlImage, world.name, world.hidden))}
    //         </div>
    //     </div>
    // );
}

export default Map;