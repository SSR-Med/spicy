// Dependencies
import { Button } from "@mui/material";

// Css
import "/src/static/css/teamSelection/teamSelection.css";

//themes
import { buttonThemeTeamSelection } from "../../styles/teamSelection/teamSelectionStyle";

//Components
import { createBattleTeamCard } from "../../components/teamSelection/TeamSelectionComponent";

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
    window.location.href = "/battle";
  };

  return (
    <main className="team-selection">
      <div className="team-selection-container">
        <div className="team-selection-secondary-container">
          {battleTeam.map((card) =>
            createBattleTeamCard(
              true,
              card.name,
              card.hp,
              card.attack,
              card.defense,
              card.evasion
            )
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
