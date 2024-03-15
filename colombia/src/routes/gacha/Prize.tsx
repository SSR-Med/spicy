// Dependencies
import { useState } from "react"
// Css
import "/src/static/css/gacha/prize.css"
// Components
import { createHomeFooter } from "../../components/home/HomeComponent"
// Helpers
import { staticUrlCard } from "../../helpers/StaticUrlCard";
export default function Prize(){
    const prize = [
        {path: staticUrlCard("milhoja")},
        {path: staticUrlCard("maria_juana")},
        {path: staticUrlCard("avena")},
    ];
    const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);
    const [currentPrize, setCurrentPrize] = useState(
        prize[0]
    );
    const handlePrizeClick = () => {
        let nextPrizeIndex = (currentPrizeIndex + 1)
        if (nextPrizeIndex === prize.length) {
            window.location.href = "/team";
        }
        else{
            setCurrentPrizeIndex(nextPrizeIndex);
            setCurrentPrize(prize[nextPrizeIndex]);
        }
    }
    return (
        <div className="gacha">
            <main className="gacha-main">
                <div className="gacha-prize">
                    <img onClick={handlePrizeClick} src="/src/static/images/gacha/platito.jfif" id="roulette"></img>
                    <img src={currentPrize.path} id="card-roulette"></img>
                </div>
            </main>
            {createHomeFooter()}
        </div>
    )
}