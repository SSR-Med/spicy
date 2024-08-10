//hooks
import { useBattle } from "../hooks/useBattle";

export function randomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomCardIndex(length: number) {
    return Math.floor(Math.random() * length);
}

export const playerAttack = () => {
    const {playerTeam, playerChoice, setDiceValue} = useBattle();
    const dice = randomBetween(1,20)
    setDiceValue(dice);
    const attack = playerChoice.attack + dice;
    console.log(`Aqui atacarías con ${attack}`);
}