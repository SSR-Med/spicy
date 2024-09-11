// Dependencies
import { Button } from "@mui/material"
import { useState, useEffect } from "react"
// Css
import "/src/static/css/team/card.css"
// Components
import { createHomeFooter } from "../../components/home/HomeComponent"
import { getImage, getName, LevelUp } from "../../components/team/CardComponent"
// Styles
import { buttonLevelCard } from "../../styles/team/CardStyle"
//Helpers
import { getUserCard } from "./actions"
import { staticUrlCard } from "../../helpers/StaticUrlCard"

export default function Card(){
    const [showLevelUp,setShowLevelUp] = useState(false);
    const [userCard, setUserCard] = useState<{id: string, level: number, xp: number, attack: number, evasion: number, defense: number, health: number, card: { name: string }}>();

    useEffect(() => {
        const userCardId = Number(window.location.pathname.split("/")[2]);
        if (!userCard) {
            getUserCard(userCardId).then((card) => {
                setUserCard(card);
            })
        }
    }, [])

    return (
        <div className="team">
            <div className="team-main">
                <div className="team-main-container">
                    <div className="card-secondary-container">
                        <div className="card-image">
                            <img src={staticUrlCard(userCard?.card.name)}></img>
                        </div>
                        <div className="card-data">
                            <div className="card-name">
                                <h1>Nombre: {userCard?.card.name}</h1>
                                <h1>Lvl: {userCard?.level}</h1>
                            </div>
                            <div className="card-attributes">
                                <div className="card-attribute-game">
                                    <h1>Ataque: {userCard?.attack}</h1>
                                    <h1>Defensa: {userCard?.defense}</h1>
                                    <h1>Vida: {userCard?.health}</h1>
                                    <h1>Evasión: {userCard?.evasion}</h1>
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