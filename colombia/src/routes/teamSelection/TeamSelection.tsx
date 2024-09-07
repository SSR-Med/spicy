// Dependencies
import { Button } from "@mui/material";

// Css
import "/src/static/css/teamSelection/teamSelection.css";

//themes
import { buttonThemeTeamSelection } from "../../styles/teamSelection/teamSelectionStyle";

//Components
import { CreateBattleTeamCard } from "../../components/teamSelection/TeamSelectionComponent";

//Page
export default function TeamSelection() {
  const battleTeam = [
    {
      name: "Milo",
      hp: 100,
      attack: 20,
      defense: 15,
      evasion: 15,
    },
    {
      name: "mazamorra",
      hp: 100,
      attack: 20,
      defense: 15,
      evasion: 15,
    },
    {
      name: "changua",
      hp: 100,
      attack: 20,
      defense: 15,
      evasion: 15,
    },
    {
      name: "ensalada",
      hp: 100,
      attack: 20,
      defense: 15,
      evasion: 15,
    },
  ];

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
          {battleTeam.map((card) =>
            <CreateBattleTeamCard
            isSelection={true}
            urlImage={card.name}
            hp={card.hp}
            attack={card.attack}
            defense={card.defense}
            evasion={card.evasion}
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
