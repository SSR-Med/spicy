// Dependencies
import { Button } from "@mui/material";

// Css
import "/src/static/css/teamSelection/teamSelection.css";

//themes
import { buttonThemeTeamSelection } from "../../styles/teamSelection/teamSelectionStyle";

//Components
import { CreateBattleTeamCard } from "../../components/teamSelection/TeamSelectionComponent";

//Hooks
import { useState, useEffect } from "react";
import { createTeamCard, getTeamCards } from "./actions";
import { getCardsByUser } from "../../components/team/actions";

//Page
export default function TeamSelection() {
  const [userTeam, setUserTeam] = useState<{id: number, cardxuser: {attack: number, evasion: number, defense: number, health: number, card: { name: string }}}[]>([]);

  useEffect(() => {
    if (userTeam.length === 0) {
      getTeamCards().then((cards) => {
        if (cards.length > 0) {
          setUserTeam(cards);
        } else {
          getCardsByUser().then((cards) => {
            let teamSize = 0;
            cards.forEach((card: {id: string, id_user: string}) => {
              if (teamSize < 4) {
                createTeamCard({userId: Number(card.id_user), userCardId: Number(card.id)}).then((response) => console.log(response));
                teamSize += 1;
              }
            });
          });
        }
      })
    }
  }, []);

  const handleRedirectMap = () => {
    window.location.href = "/map";
  };

  const handleRedirectBattle = () => {
    const missionId = Number(window.location.pathname.split("/")[3]);
    window.location.href = `/battle/${missionId}`;
  };

  return (
    <main className="team-selection">
      <div className="team-selection-container">
        <div className="team-selection-secondary-container">
          {userTeam.map((teamCard) => 
            <CreateBattleTeamCard 
            isSelection={true}
            urlImage={teamCard.cardxuser.card.name}
            hp={teamCard.cardxuser.health}
            attack={teamCard.cardxuser.attack}
            defense={teamCard.cardxuser.defense}
            evasion={teamCard.cardxuser.evasion}
            id={teamCard.id}
            key={teamCard.id}
            />
          )}
        </div>
      </div>
      <div className="team-selection-buttons">
        <Button
          variant="contained"
          sx={buttonThemeTeamSelection}
          onClick={handleRedirectMap}
        >
          Regresar
        </Button>
        <Button
          variant="contained"
          sx={buttonThemeTeamSelection}
          onClick={handleRedirectBattle}
        >
          Iniciar
        </Button>
      </div>
    </main>
  );
}
