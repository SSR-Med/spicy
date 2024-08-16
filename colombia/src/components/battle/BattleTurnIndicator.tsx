//CSS
import "/src/static/css/battle/battle.css";

//hooks
import { useBattle } from "../../hooks/useBattle";

const BattleTurnIndicator = () => {
    const { choiceTurn, attackChoiceTurn, attackTurn, attackValue, enemyDefenseTurn, damage, defenseChoice, enemyAttackTurn, defenseChoiceTurn, defenseDiceTurn, defenseTurn } = useBattle();
    
    let info = "";

    if (choiceTurn) {
        info = "Elige con quien atacar";
    } else if (attackChoiceTurn) {
        info = "Ataca al enemigo!";
    } else if (attackTurn) {
        info = `Atacaste al enemigo con ${attackValue}!`;
    } else if (enemyDefenseTurn) {
        if (defenseChoice === "defendió" && damage > 0) {
            info = `El enemigo defendió y recibió ${damage}`;
        } else if (defenseChoice === "defendió") {
            info = `El enemigo defendió y no recibió daño`;
        } else if (defenseChoice === "evadió" && damage > 0) {
            info = `El enemigo trató de evadir y recibió sendo coñazo de ${damage}`;
        } else if (defenseChoice === "evadió") {
            info = `El enemigo evadió y no recibió daño`;
        }
    } else if (enemyAttackTurn) {
        info = `El enemigo te está atacando con ${attackValue}!!`;
    } else if (defenseChoiceTurn) {
        info = "Elige como defenderte";
    } else if (defenseDiceTurn) {
        info = "Tira el dado!";
    } else if (defenseTurn) {
        if (defenseChoice === "defendió" && damage > 0) {
            info = `Defendiste y recibiste ${damage} de daño`;
        } else if (defenseChoice === "defendió") {
            info = `Defendiste y no recibiste daño`;
        } else if (defenseChoice === "evadió" && damage > 0) {
            info = `Trataste de evadir y recibiste sendo coñazo de ${damage}`;
        } else if (defenseChoice === "evadió") {
            info = `Evadiste y no recibiste daño`;
        }
    }

    return (
        <div className="battle-turn-indicator">
          {info}
        </div>
    );
}

export default BattleTurnIndicator;