// Dependencies
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material"
// Helpers
import { staticUrlCard } from "../../helpers/StaticUrlCard";
// Styles
import { buttonLevelCard } from "../../styles/team/CardStyle"
function getNameUrl(){
    const location = useLocation();
    return location.pathname.split("/").pop();
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
    const handleCloseLevelUp = () =>
    {
        props.onCloseLevelUp()
    }
    return (
        <div className="level-up-container">
                <div className="level-up-container-attributes">
                    <img src={getImage()}></img>
                    <div className="level-up-container-attributes-element-container">
                        <div className="level-up-container-attributes-element">
                            <h1>Nivel actual: 1</h1>
                        </div>
                        <div className="level-up-container-attributes-element">
                            <h1>Items a usar</h1>
                        </div>
                        <div className="level-up-container-attributes-element">
                            <h1>Estadísticas finales</h1>
                        </div>
                        <div className="level-up-buttons">
                            <Button variant="contained" sx = {buttonLevelCard} onClick={handleCloseLevelUp} >Cancelar</Button>
                            <Button variant="contained" sx = {{ ...buttonLevelCard, marginLeft: "2.5%" }} onClick={handleCloseLevelUp} >Confirmar</Button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
