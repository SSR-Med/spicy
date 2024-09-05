//css
import "/src/static/css/map/map_level.css"
// Components
import { createSummaryLevel } from "../../components/map/MapLevelComponent"
//Hooks
import { useState, useEffect } from "react";
//Helpers
import { getMissionByWorld } from "./actions";

function Map_Level(){
    const [missions, setMissions] = useState<{id: number, name: string, level: string}[]>([]);

    useEffect(() => {
        const worldId = Number(window.location.pathname.split("/")[2]);
        if (missions.length === 0) {
            getMissionByWorld(worldId).then((response) => setMissions(response));
        }
    }, []);

    const handleRedirectMap = () => {
        window.location.href = "/map";
    }

    return (
        <div className="city-map">
            <div className="home-city" onClick={handleRedirectMap}>
                <h1>Mapa</h1>
            </div>
            <div className="level-city">
                {missions.map((mission) => createSummaryLevel(mission.name, mission.level, mission.id))}
            </div>
        </div>
    )
}
export default Map_Level