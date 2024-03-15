// Dependencies
import { ArrowRight, ArrowLeft} from '@mui/icons-material';
import { useState } from "react";
// Css
import "/src/static/css/gacha/gacha.css"
// Components
import { createHomeFooter } from "../../components/home/HomeComponent"
import { createGachaElement, staticUrlCard, handleClick } from "../../components/gacha/GachaComponent"
// Themes
import { arrowThemeGacha } from "../../styles/gacha/GachaStyle"
export default function Gacha(){
    const availableGacha = [
        {name: "Monita china destacada", path: staticUrlCard("monita"), id: 0},
        {name: "Chi cheñor", path: staticUrlCard("platano"), id: 1}
    ];
    const [currentGacha, setCurrentGacha] = useState(
        availableGacha[0]
    );
    const [currentGachaIndex, setCurrentGachaIndex] = useState(0);
    return (
        <div className="gacha">
            <main className="gacha-main">
                {createGachaElement(currentGacha.name,currentGacha.path, currentGacha.id)}
                <div className="gacha-arrows">
                    <ArrowLeft sx= {arrowThemeGacha}  onClick={() => handleClick("left",currentGachaIndex,availableGacha,setCurrentGachaIndex,setCurrentGacha)}/>
                    <ArrowRight sx= {arrowThemeGacha} onClick={() => handleClick("right",currentGachaIndex,availableGacha,setCurrentGachaIndex,setCurrentGacha)}/>
                </div>
                <div className="gacha-probabilities">
                    <p>Info de probabilidades: Es el día del platanooo, chi cheñorrrr</p>
                </div>
            </main>
            {createHomeFooter()}
        </div>
    )
}