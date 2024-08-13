// Dependencies
import { Button } from "@mui/material";

//themes
import { buttonThemeTeamSelection } from "../../styles/teamSelection/teamSelectionStyle";

//hooks
import { useBattle } from "../../hooks/useBattle";

//helpers
import { playerAttack, enemyDefense, enemyAttack } from "../../helpers/BattleHelper";

const BattleTools = () => {
    const {attackChoiceTurn, setAttackChoiceTurn, diceValue, attackTurn, setAttackTurn, playerChoice, setDiceValue, attackValue, setAttackValue, enemyTeam, setEnemyTeam, setEnemyDefenseTurn, setDefenseChoice, setDamage, setEnemyAttackTurn} = useBattle();

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
                        playerAttack(playerChoice, setDiceValue, setAttackValue);
                        setTimeout(enemyDefense, 2000, setAttackTurn, attackValue, enemyTeam, setEnemyTeam, setEnemyDefenseTurn, setDefenseChoice, setDamage);
                        setTimeout(enemyAttack, 4000, setAttackValue, enemyTeam, setEnemyDefenseTurn, setEnemyAttackTurn);
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