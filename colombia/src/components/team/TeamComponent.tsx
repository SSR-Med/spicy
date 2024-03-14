// Components
import { staticUrlCard } from "../gacha/GachaComponent"
import { handleRedirect } from "../map/MapComponent"

//Get only the name of the image
function getCardName(image: string){
    return image.replace(".","@");
}

// Create card
export function createTeamCard(urlImage: string){
    return (
        <div className="team-card">
            <img src={staticUrlCard(urlImage)} onClick={() => handleRedirect("/team/",getCardName(urlImage))}></img>
        </div>
    )
}


// Create all cards
export function createTeamCardGroup(page: number){
    // Fake pages
    const pages: { [key: number]: { info: { name: string }[] } } = {
        1: {
            info: [
                { name: "monita" },
                { name: "platano" },
                { name: "burra" },
                { name: "aguardiente" }
            ]
        },
        2: {
            info: [
                { name: "vive_100" },
                { name: "torta_envinada" },
                { name: "te_valeriana" },
                { name: "perrito" }
            ]
        }
    };

    return (
        <div className="team-secondary-container">
            {pages[page].info.map((element: Record<string,string>) => createTeamCard(element.name))}
        </div>
    )
}