//CSS
import "/src/static/css/battle/battle.css";

//Components
import { CreateBattleTeamCard } from "../../components/teamSelection/TeamSelectionComponent";
import { CreateEnemyTeamCard } from "../../components/battle/battleComponent";
import BattleTurnIndicator from "../../components/battle/BattleTurnIndicator";
import BattleTools from "../../components/battle/BattleTools";

//Hooks
import { useBattle } from "../../hooks/useBattle";

export default function Battle() {
  const { playerTeam, enemyTeam } = useBattle();

  return (
    <main className="battle-main">
      <div className="battle-secondary">
        <BattleTurnIndicator />

        <div className="enemy-character-container">
          {enemyTeam.map((card) => 
            <CreateEnemyTeamCard
            key={card.name} 
            urlImage={card.name}
            hp={card.hp}
            attack={card.attack}
            defense={card.defense}
            evasion={card.evasion}
            />
          )}
        </div>

        <BattleTools />

        <div className="battle-character-container">
          {playerTeam.map((card) =>
            <CreateBattleTeamCard
              key={card.name}
              isSelection={false}
              urlImage={card.name}
              hp={card.hp}
              attack={card.attack}
              defense={card.defense}
              evasion={card.evasion}
             />
          )}
        </div>
      </div>
    </main>
  );
}
