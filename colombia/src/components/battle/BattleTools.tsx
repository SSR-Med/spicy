// Dependencies
import { Button } from "@mui/material";

//themes
import { buttonThemeTeamSelection } from "../../styles/teamSelection/teamSelectionStyle";

//hooks
import { useBattle } from "../../hooks/useBattle";

//helpers
import { playerAttack, enemyAttack, playerDefense } from "../../helpers/BattleHelper";

const BattleTools = () => {
    const {setChoiceTurn, attackChoiceTurn, setAttackChoiceTurn, diceValue, attackTurn, setAttackTurn, playerChoice, setDiceValue, attackValue, setAttackValue, enemyTeam, setEnemyTeam, setEnemyDefenseTurn, setDefenseChoice, setDamage, setEnemyAttackTurn, defenseChoiceTurn, setDefenseChoiceTurn, defenseTurn, setDefenseTurn, defenseDiceTurn, setDefenseDiceTurn, defenseChoice, playerTeam, setPlayerTeam, setVictory } = useBattle();

    if (attackChoiceTurn || attackTurn) {
        return (
            <div className="battle-tools-option">
                <div className="battle-tools-dice">
                    <Button
                    variant="contained"
                    sx={buttonThemeTeamSelection}
                    disabled={attackTurn}
                    onClick={() => {
                        setAttackChoiceTurn(false);
                        setAttackTurn(true);
                        playerAttack(playerChoice, setDiceValue, setAttackValue, setAttackTurn, enemyTeam,setEnemyTeam, setEnemyDefenseTurn, setDefenseChoice, setDamage, setVictory);
                        setTimeout(enemyAttack, 2000, setAttackValue, enemyTeam, setEnemyDefenseTurn, setEnemyAttackTurn, setDefenseChoiceTurn);
                    }}
                    >
                        Tirar dado
                    </Button>
                    <div className="battle-tools-dice-result">{diceValue}</div>
                </div>
            </div>
        );
    } else if (defenseChoiceTurn) {
        return (
            <div className="battle-tools-option">
                <div className="battle-tools-defense-options">
                <Button
                variant="contained"
                sx={buttonThemeTeamSelection}
                onClick={() => {
                    setDefenseChoiceTurn(false);
                    setDefenseDiceTurn(true);
                    setDefenseChoice("defendió");
                }}
                >
                    Defender
                </Button>
                <Button
                variant="contained"
                sx={buttonThemeTeamSelection}
                onClick={() => {
                    setDefenseChoiceTurn(false);
                    setDefenseDiceTurn(true);
                    setDefenseChoice("evadió");
                }}
                >
                    Evadir
                </Button>
                </div>
            </div>
        );
    } else if (defenseDiceTurn || defenseTurn ) {
        return (
            <div className="battle-tools-option">
                <div className="battle-tools-dice">
                    <Button
                    variant="contained"
                    sx={buttonThemeTeamSelection}
                    disabled={defenseTurn}
                    onClick={() => {
                        setDefenseDiceTurn(false);
                        playerDefense(defenseChoice, playerTeam, setPlayerTeam, attackValue, diceValue, setDamage, setDefenseTurn, setChoiceTurn, setVictory);
                    }}
                    >
                        Tirar dado
                    </Button>
                    <div className="battle-tools-dice-result">{diceValue}</div>
                </div>
            </div>
        );
    }
}

export default BattleTools;