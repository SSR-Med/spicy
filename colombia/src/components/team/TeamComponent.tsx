// Dependencies
import { staticUrlCard } from "../gacha/GachaComponent"

// Create card
export function createTeamCard(urlImage: string){
    return (
        <div className="team-card">
            <img src={staticUrlCard(urlImage)}></img>
        </div>
    )
}


// Create all cards
export function createTeamCardGroup(page: number){
    // Fake pages
    const pages: { [key: number]: { info: { name: string }[] } } = {
        1: {
            info: [
                { name: "monita.png" },
                { name: "platano.jfif" },
                { name: "burra.jfif" },
                { name: "aguardiente.jfif" }
            ]
        },
        2: {
            info: [
                { name: "vive100.jfif" },
                { name: "torta_envinada.jfif" },
                { name: "te_valeriana.jfif" },
                { name: "perrito.jpg" }
            ]
        }
    };

    return (
        <div className="team-secondary-container">
            {pages[page].info.map((element: Record<string,string>) => createTeamCard(element.name))}
        </div>
    )
}