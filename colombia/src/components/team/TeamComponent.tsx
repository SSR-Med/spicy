// Helpers
import { staticUrlCard } from "../../helpers/StaticUrlCard";
import { handleRedirect } from "../../helpers/HandleRedirect";

//Hooks
import { useState, useEffect } from "react";

//Helpers
import { getCardsByUser } from "./actions";

//Get only the name of the image
export function getCardName(image: string) {
  return image.replace(".", "@");
}

// Create card
export function createTeamCard(urlImage: string, userCardId: string) {
  return (
    <div className="team-card" key={userCardId}>
      <img
        src={staticUrlCard(urlImage)}
        onClick={() => handleRedirect("/team/", userCardId)}
      ></img>
    </div>
  );
}

// Create all cards
export function createTeamCardGroup(page: number) {
  const [userCards, setUserCards] = useState<{id: string, level: number, xp: number, attack: number, evasion: number, defense: number, health: number, card: { name: string }}[]>([]);

  useEffect(() => {
    if (userCards.length === 0) {
      getCardsByUser().then((cards) => {
        setUserCards(cards);
      });
    }
  }, []);
  // Fake pages
  const pages: { [key: number]: { info: {id: string, level: number, xp: number, attack: number, evasion: number, defense: number, health: number, card: { name: string }}[] } } = {
    1: {
      info: userCards.slice(0, 4),
    },
    2: {
      info: userCards.slice(4),
    }
  };

  return (
    <div className="team-secondary-container">
      {pages[page].info.map((element: {id: string, level: number, xp: number, attack: number, evasion: number, defense: number, health: number, card: { name: string }}) =>
        createTeamCard(element.card.name, element.id)
      )}
    </div>
  );
}
