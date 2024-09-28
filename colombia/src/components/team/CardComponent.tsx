// Dependencies
//import { useLocation } from "react-router-dom";
import { Button } from "@mui/material"
import { useEffect, useState } from "react";
// Helpers
import { staticUrlCard } from "../../helpers/StaticUrlCard";
// Styles
import { buttonLevelCard } from "../../styles/team/CardStyle"

import { getItemsByUser, getUserCard } from "./actions";

function getNameUrl(){
    return window.location.pathname.split("/").pop();
}
// Return the url of the image
export function getImage(){
    return staticUrlCard(getNameUrl() || "");
}


// Replace _ for ""
function replaceFakeSpace(name: string){
    return name.replace("_"," ");
}
// Upper case the first letter of each word
function upperCaseFirstLetter(name: string){
    return name.replace(/\b\w/g, l => l.toUpperCase());
}
// Return the name with style for the card
export function getName(){
    return upperCaseFirstLetter(replaceFakeSpace(getNameUrl() || ""));
}

// Return level up component

export function LevelUp(props: any){
    const [userCard, setUserCard] = useState<{id: string, level: number, xp: number, attack: number, evasion: number, defense: number, health: number, id_user: string, card: { name: string }}>();
    const [items, setItems] = useState<{id: number, name: string, xp: number}[]>([]);
    useEffect(() => {
        if (!userCard) {
            getUserCard(Number(getNameUrl())).then((card) => {
                setUserCard(card);
            });
        }
        if (items.length === 0) {
            getItemsByUser(Number(getNameUrl())).then((items) => {
                setItems(items);
            });
        }
    }, []);
    
    //console.log(userCard);
    console.log(items);
    const handleCloseLevelUp = () =>
    {
        props.onCloseLevelUp()
    }
    return (
        <div className="level-up-container">
            <div className="level-up-container-attributes">
                <img src={staticUrlCard(userCard?.card.name)} alt={`Card of ${userCard?.card.name}`} />
                <div className="level-up-container-attributes-element-container">
    
                    {/* Nivel actual */}
                    <div className="level-up-container-attributes-element">
                        <h1>Nivel actual:{userCard?.level}</h1>
                        
                    </div>
    
                    {/* Items a usar (puedes rellenar este campo más tarde si tienes los items) */}
                    <div className="level-up-container-attributes-element">
                        <h1>Items a usar</h1>
                        {/* Aquí podrías mapear los items o agregar lógica para seleccionar items */}
                    </div>
    
                    {/* Estadísticas finales */}
                    <div className="level-up-container-attributes-element">
                        <h1>Estadísticas finales: A:{userCard?.attack} D: {userCard?.defense} V: {userCard?.health} E: {userCard?.evasion}</h1>
                    </div>
    
                    {/* Botones */}
                    <div className="level-up-buttons">
                        <Button variant="contained" sx={buttonLevelCard} onClick={handleCloseLevelUp}>Cancelar</Button>
                        <Button variant="contained" sx={{ ...buttonLevelCard, marginLeft: "2.5%" }} onClick={handleCloseLevelUp}>Confirmar</Button>
                    </div>
                </div>
            </div>
        </div>
    );
    
}
