//Dependencies
import { Button } from '@mui/material';
// Themes
import { buttonThemeGacha } from "../../styles/gacha/GachaStyle"
export function createGachaElement(name:string, path:string,id:number){
    return(
        <div className="gacha-popular">
            <h1>{name}</h1>
            <img src={path}></img>
            <div className="gacha-buttons">
                <Button type="submit" variant="contained" sx= {buttonThemeGacha}>1 Tiro</Button>
                <Button variant="contained" sx= {buttonThemeGacha}>10 Tiros</Button>
            </div>
        </div>
    )
}
export function staticUrlCard(image: string) {
    return "/src/static/images/cards/" + image;
}