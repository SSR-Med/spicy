//CSS
import "/src/static/css/battle/battle.css";

//Components
import { createBattleTeamCard } from "../../components/teamSelection/TeamSelectionComponent";
import { createEnemyTeamCard } from "../../components/battle/battleComponent";
import BattleTurnIndicator from "../../components/battle/BattleTurnIndicator";

export default function Battle() {
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

  const enemyTeam = [
    {
      name: "maria_juana",
      hp: 300,
      attack: 25,
      defense: 10,
      evasion: 5,
    },
  ];

  return (
    <main className="battle-main">
      <div className="battle-secondary">
        <BattleTurnIndicator />

        <div className="enemy-character-container">
          {enemyTeam.map((card) =>
            createEnemyTeamCard(
              card.name,
              card.hp,
              card.attack,
              card.defense,
              card.evasion
            )
          )}
        </div>

        <div className="battle-character-container">
          {battleTeam.map((card) =>
            createBattleTeamCard(
              false,
              card.name,
              card.hp,
              card.attack,
              card.defense,
              card.evasion
            )
          )}
        </div>
      </div>
    </main>
  );
}
