// Dependencies
import { Button } from "@mui/material";
import { useState } from "react";

//CSS
import "/src/static/css/battle/battle.css";

//Components
import { createBattleTeamCard } from "../../components/battle/battleComponent";
import { createEnemyTeamCard, battleInfoOption } from "../../components/battle/battleComponent";

//themes
import { buttonThemeTeamSelection } from "../../styles/teamSelection/teamSelectionStyle";
import { Battery0Bar } from "@mui/icons-material";

//handlers
//import {randomBetween, randomCardIndex} from "../../helpers/BattleHandlers";
import { playerAttack } from "../../helpers/BattleHandlers";

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

export default function Battle() {
  const [battleTeamState, setBattleTeamState] = useState(battleTeam);
  const [enemyTeamState, setEnemyTeamState] = useState(enemyTeam);
  const [playerAttackChoiceTurn, setPlayerChoiceTurn] = useState(true);
  const [playerAttackTurn, setPlayerAttackTurn] = useState(false);
  const [playerDefenseTurn, setPlayerDefenseTurn] = useState(false);
  const [playerAttackValue, setPlayerAttackValue] = useState(0);
  const [playerDefenseValue, setPlayerDefenseValue] = useState(0);
  const [diceValue, setDiceValue] = useState(0);
  const [turnInfo, setTurnInfo] = useState("Elige con quien atacar");

  return (
    <main className="battle-main">
      <div className="battle-secondary">
        <div className="battle-turn-indicator">
          {turnInfo}
        </div>

        <div className="enemy-character-container">
          {enemyTeamState.map((card) =>
            createEnemyTeamCard(card)
          )}
        </div>

        {battleInfoOption(playerAttackTurn, playerDefenseTurn, setPlayerAttackTurn, setDiceValue, setTurnInfo, playerAttackValue, enemyTeamState, setEnemyTeamState, setPlayerDefenseTurn, playerDefenseValue, battleTeamState, setBattleTeamState, setPlayerChoiceTurn, diceValue)}

        <div className="battle-character-container">
          {battleTeamState.map((card) =>
            createBattleTeamCard(card, playerAttackChoiceTurn, setPlayerChoiceTurn, setPlayerAttackTurn, setPlayerAttackValue, setTurnInfo)
          )}
        </div>
      </div>
    </main>
  );
}
