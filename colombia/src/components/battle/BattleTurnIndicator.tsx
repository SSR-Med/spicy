//CSS
import "/src/static/css/battle/battle.css";

//hooks
import { useBattle } from "../../hooks/useBattle";

const BattleTurnIndicator = () => {
    const { choiceTurn, attackChoiceTurn } = useBattle();
    
    let info = "";

    if (choiceTurn) {
        info = "Elige con quien atacar";
    } else if (attackChoiceTurn) {
        info = "Ataca al enemigo!";
    } else {
        info = "Turno desconocido";
    }

    return (
        <div className="battle-turn-indicator">
          {info}
        </div>
    );
}

export default BattleTurnIndicator;