import { staticUrlCard } from "../../helpers/StaticUrlCard";
import { playerAttack } from "../../helpers/BattleHandlers";

// Dependencies
import { Button } from "@mui/material";

//themes
import { buttonThemeTeamSelection } from "../../styles/teamSelection/teamSelectionStyle";

export function createEnemyTeamCard(card: {
  name: string,
  hp: number,
  attack: number,
  defense: number,
  evasion: number
}) {
  return (
    <div className="enemy-battle-card">
      <img
          src={staticUrlCard(card.name)}
      />
      <div className="enemy-battle-card-info">
        <div>{`HP: ${card.hp}`}</div>
        <div>{`Ataque: ${card.attack}`}</div>
        <div>{`Defensa: ${card.defense}`}</div>
        <div>{`Evasion: ${card.evasion}`}</div>
      </div>
    </div>
  );
}

export function createBattleTeamCard(
  card: {
    name: string,
    hp: number,
    attack: number,
    defense: number,
    evasion: number
  },
  choiceTurnStatus: boolean,
  choiceTurn: (status: boolean) => void,
  attackTurn: (status: boolean) => void,
  playerAttackValue: (value: number) => void,
  turnInfo: (text: string) => void,
) {
  return (
    <div className="team-battle-card">
      <img
          src={staticUrlCard(card.name)}
          onClick={() => {
            if (choiceTurnStatus) {
              playerAttackValue(card.attack);
              choiceTurn(false);
              attackTurn(true);
              turnInfo("Jugador ataca!");
            }
          }}
      />
      <div className="team-battle-card-info">
        <div>{`HP: ${card.hp}`}</div>
        <div>{`Ataque: ${card.attack}`}</div>
        <div>{`Defensa: ${card.defense}`}</div>
        <div>{`Evasion: ${card.evasion}`}</div>
      </div>
    </div>
  );
}

export function battleInfoOption(
  attackTurn: boolean,
  defenseTurn: boolean,
  setPlayerAttackTurn: (value: boolean) => void,
  setDiceValue: (value: number) => void,
  setTurnInfo: (value: string) => void,
  playerAttackValue: number,
  enemyTeamState: {name: string; hp: number; attack: number; defense: number; evasion: number }[],
  setEnemyTeamState: (state: {name: string, hp: number, attack: number, defense: number, evasion: number} []) => void,
  setPlayerDefenseTurn: (value: boolean) => void,
  playerDefenseValue: number,
  battleTeamState: {name: string; hp: number; attack: number; defense: number; evasion: number }[],
  setBattleTeamState: (state: {name: string, hp: number, attack: number, defense: number, evasion: number} []) => void,
  setPlayerChoiceTurn: (value: boolean) => void,
  diceValue: number,
) {
  if (attackTurn) {
    return (
      <div className="battle-information-option">
          <div className="battle-information-dice">
            <Button
            variant="contained"
            sx={buttonThemeTeamSelection}
            onClick={() => {
              setPlayerAttackTurn(false);
              playerAttack(setDiceValue, setTurnInfo, playerAttackValue, enemyTeamState, setEnemyTeamState, setPlayerDefenseTurn, playerDefenseValue, battleTeamState, setBattleTeamState, setPlayerChoiceTurn);
            }}
            >
              Tirar dado
            </Button>
            <div className="battle-information-dice-result">{diceValue}</div>
          </div>
      </div>
    );
  }
}