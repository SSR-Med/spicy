//Dependencies
import { Button } from '@mui/material';
// Components
import { handleRedirect } from '../map/MapComponent';
// Themes
import { buttonThemeGacha } from "../../styles/gacha/GachaStyle"
export function createGachaElement(name:string, path:string,id:number){
    return(
        <div className="gacha-popular">
            <h1>{name}</h1>
            <img src={path}></img>
            <div className="gacha-buttons">
                <Button type="submit" variant="contained" sx= {buttonThemeGacha} onClick={() => handleRedirect("/gacha/",1)}>1 Tiro</Button>
                <Button variant="contained" sx= {buttonThemeGacha} onClick={() => handleRedirect("/gacha/",10)}>10 Tiros</Button>
            </div>
        </div>
    )
}
// Return card with only its name
export function staticUrlCard(image: string) {
    return "/src/static/images/cards/" + image + ".png";	
}
// Moves to left or right of the array
export function handleClick(orientation: string, currentIndex: number, list: Array<Record<string, any>>, setIndex: React.Dispatch<React.SetStateAction<number>>, setElement: React.Dispatch<React.SetStateAction<any>>) {
    const nextIndex = (currentIndex + (orientation === "left" ? -1 : +1) + list.length) % list.length;
    setIndex(nextIndex);
    setElement(list[nextIndex]);
}