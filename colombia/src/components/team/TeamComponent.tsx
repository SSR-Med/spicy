// Helpers
import { staticUrlCard } from "../../helpers/StaticUrlCard";
import { handleRedirect } from "../../helpers/HandleRedirect";
import Swal from "sweetalert2";

//Hooks
import { useState, useEffect } from "react";

//Helpers
import { deleteTeamCard, getCardsByUser } from "./actions";
import { getTeamCards, createTeamCard as newTeamCard } from "./../../routes/teamSelection/actions";

//Get only the name of the image
export function getCardName(image: string) {
  return image.replace(".", "@");
}

async function replaceCard(userCardId: number, userId: number) {
  const teamCards = await getTeamCards();
  let existingCard = teamCards.some((card: {id: string, userId: string, userCardId: string}) => Number(card.userCardId) === userCardId);
  if (existingCard) {
    Swal.fire({
      icon: 'info',
      title: 'La carta ya está en el equipo',
      text: ''
    });
    return;
  }
  await deleteTeamCard(Number(window.location.pathname.split("/")[3]));
  await newTeamCard({userId: userId, userCardId: userCardId});
  handleRedirect("/map", "");
}

// Create card
export function createTeamCard(urlImage: string, userCardId: string, isSelection: boolean, userId: string) {
  return (
    <div className="team-card" key={userCardId}>
      <img
        src={staticUrlCard(urlImage)}
        onClick={isSelection? () => replaceCard(Number(userCardId), Number(userId)) : () => handleRedirect("/team/", userCardId)}
      ></img>
    </div>
  );
}

// Create all cards
export function createTeamCardGroup(page: number, isSelection: boolean) {
  const [userCards, setUserCards] = useState<{id: string, level: number, xp: number, attack: number, evasion: number, defense: number, health: number, id_user: string, card: { name: string }}[]>([]);

  useEffect(() => {
    if (userCards.length === 0) {
      getCardsByUser().then((cards) => {
        setUserCards(cards);
      });
    }
  }, []);

  // Fake pages
  const pages: { [key: number]: { info: {id: string, level: number, xp: number, attack: number, evasion: number, defense: number, health: number, id_user: string, card: { name: string }}[] } } = {
    1: {
      info: userCards.slice(0, 4),
    },
    2: {
      info: userCards.slice(4, 8),
    },
    3: {
      info: userCards.slice(8, 12),
    },
    4: {
      info: userCards.slice(12),
    }
  };

  return (
    <div className="team-secondary-container">
      {pages[page].info.map((element: {id: string, level: number, xp: number, attack: number, evasion: number, defense: number, health: number, id_user: string, card: { name: string }}) =>
        isSelection? createTeamCard(element.card.name, element.id, true, element.id_user) : createTeamCard(element.card.name, element.id, false, element.id_user)
      )}
    </div>
  );
}
