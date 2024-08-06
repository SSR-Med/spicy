//CSS
import "/src/static/css/battle/battle.css";

//hooks
import { useBattle } from "../../hooks/useBattle";

const BattleTurnIndicator = () => {
    const { choiceTurn } = useBattle();
    
    let info = "";

    if (choiceTurn) {
        info = "Elige con quien atacar";
    } else {
        info = "Ataca al enemigo!";
    }

    return (
        <div className="battle-turn-indicator">
          {info}
        </div>
    );
}

export default BattleTurnIndicator;