//Dependencies
import { Button } from '@mui/material';
// Helpers
import { handleRedirect } from "../../helpers/HandleRedirect";
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
