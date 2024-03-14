// Dependencies
import { useLocation } from "react-router-dom";
// Components
import { staticUrlCard } from "../gacha/GachaComponent";


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