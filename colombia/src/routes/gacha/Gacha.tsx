// Dependencies
import { ArrowRight, ArrowLeft} from '@mui/icons-material';
import { useState } from "react";
// Css
import "/src/static/css/gacha/gacha.css"
// Components
import { createHomeFooter } from "../../components/home/HomeComponent"
import { createGachaElement, staticUrlCard } from "../../components/gacha/GachaComponent"
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
    const handleArrowClick = (arrowOrientation: string) => {
        const nextElementIndex = (currentGacha.id 
            + (arrowOrientation === "left" ? -1 : +1) 
            + availableGacha.length) % availableGacha.length;
        const nextGacha = availableGacha[nextElementIndex];
        setCurrentGacha(nextGacha);
    };

    return (
        <div className="gacha">
            <main className="gacha-main">
                {createGachaElement(currentGacha.name,currentGacha.path, currentGacha.id)}
                <div className="gacha-arrows">
                    <ArrowLeft sx= {arrowThemeGacha}  onClick={() => handleArrowClick("left")}/>
                    <ArrowRight sx= {arrowThemeGacha} onClick={() => handleArrowClick("right")}/>
                </div>
                <div className="gacha-probabilities">
                    <p>Info de probabilidades: Es el día del platanooo, chi cheñorrrr</p>
                </div>
            </main>
            {createHomeFooter()}
        </div>
    )
}