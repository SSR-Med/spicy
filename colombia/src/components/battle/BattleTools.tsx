// Dependencies
import { Button } from "@mui/material";

//themes
import { buttonThemeTeamSelection } from "../../styles/teamSelection/teamSelectionStyle";

//hooks
import { useBattle } from "../../hooks/useBattle";

//helpers
import { playerAttack } from "../../helpers/BattleHelper";

const BattleTools = () => {
    const {attackChoiceTurn, setAttackChoiceTurn, diceValue, setAttackTurn} = useBattle();

    if (attackChoiceTurn) {
        return (
            <div className="battle-tools-option">
                <div className="battle-tools-dice">
                    <Button
                    variant="contained"
                    sx={buttonThemeTeamSelection}
                    onClick={() => {
                        setAttackChoiceTurn(false);
                        console.log("Casi playerAttack");
                        playerAttack();
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