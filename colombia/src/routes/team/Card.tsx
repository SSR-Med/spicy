// Dependencies
import { Button } from "@mui/material"
import { useState } from "react"
// Css
import "/src/static/css/team/card.css"
// Components
import { createHomeFooter } from "../../components/home/HomeComponent"
import { getImage, getName, LevelUp } from "../../components/team/CardComponent"
// Styles
import { buttonLevelCard } from "../../styles/team/CardStyle"
export default function Card(){
    const [showLevelUp,setShowLevelUp] = useState(false);
    return (
        <div className="team">
            <div className="team-main">
                <div className="team-main-container">
                    <div className="card-secondary-container">
                        <div className="card-image">
                            <img src={getImage()}></img>
                        </div>
                        <div className="card-data">
                            <div className="card-name">
                                <h1>Nombre: {getName()}</h1>
                                <h1>Lvl: 1</h1>
                            </div>
                            <div className="card-attributes">
                                <div className="card-attribute-game">
                                    <h1>Ataque: 15</h1>
                                    <h1>Defensa: 5</h1>
                                    <h1>Vida: 50</h1>
                                    <h1>Evasión: 22</h1>
                                </div>
                                <Button variant="contained" onClick = {() => setShowLevelUp(true)} sx = {{ ...buttonLevelCard, marginLeft: "2.5%" }}>Subir de Nivel</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {showLevelUp && (<LevelUp onCloseLevelUp={() => setShowLevelUp(false)} />)}
            </div>
            {createHomeFooter()}
        </div>
    )
}