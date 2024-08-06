//CSS
import "/src/static/css/battle/battle.css";

//Components
import { createBattleTeamCard } from "../../components/teamSelection/TeamSelectionComponent";
import { createEnemyTeamCard } from "../../components/battle/battleComponent";
import BattleTurnIndicator from "../../components/battle/BattleTurnIndicator";

//Hooks
import { useBattle } from "../../hooks/useBattle";

export default function Battle() {
  const { playerTeam } = useBattle();

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
          {playerTeam.map((card) =>
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
