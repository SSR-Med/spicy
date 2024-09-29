// Dependencies
import { useState, useEffect } from "react"
// Css
import "/src/static/css/gacha/prize.css"
// Components
import { createHomeFooter } from "../../components/home/HomeComponent"
// Helper for static URL
import { staticUrlCard } from "../../helpers/StaticUrlCard"; // Use this helper for card image paths

export default function Prize() {
    const [prizes, setPrizes] = useState<any[]>([]); // Store the prize data
    const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);

    // Retrieve prize data from sessionStorage on component mount
    useEffect(() => {
        const results = sessionStorage.getItem('draw'); // Use 'draw' to match the GachaHelper.tsx storage
        if (results) {
            setPrizes(JSON.parse(results));
        }
    }, []);

    const handlePrizeClick = () => {
        const nextPrizeIndex = currentPrizeIndex + 1;
        if (nextPrizeIndex === prizes.length) {
            window.location.href = "/team";
        } else {
            setCurrentPrizeIndex(nextPrizeIndex);
        }
    };

    const currentPrize = prizes[currentPrizeIndex];

    return (
        <div className="gacha">
            <main className="gacha-main">
                <div className="gacha-prize">
                    {/* Image for clicking and continuing to the next prize */}
                    <img onClick={handlePrizeClick} src="/src/static/images/gacha/platito.jfif" id="roulette" />
                    
                    {/* Display the card image without any text */}
                    {currentPrize && (
                        <img src={staticUrlCard(currentPrize.cardName)} id="card-roulette" />
                    )}
                </div>
            </main>
            {createHomeFooter()}
        </div>
    );
}