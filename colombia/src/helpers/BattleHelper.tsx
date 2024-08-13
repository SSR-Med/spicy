export function randomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomCardIndex(length: number) {
    return Math.floor(Math.random() * length);
}

export const playerAttack = (
    playerChoice: {name: string, hp: number, attack: number, defense: number, evasion: number},
    setDiceValue: (value: number) => void,
    setAttackValue: (value: number) => void,
) => {
    const dice = randomBetween(1,20);
    setDiceValue(dice);
    const attack = playerChoice.attack + dice;
    setAttackValue(attack);
}

export const enemyDefense = (
    setAttackTurn: (value: boolean) => void,
    attackValue: number,
    enemyTeam: {name: string, hp: number, attack: number, defense: number, evasion: number}[],
    setEnemyTeam: (team: {name: string, hp: number, attack: number, defense: number, evasion: number}[]) => void,
    setEnemyDefenseTurn: (value: boolean) => void,
    setDefenseChoice: (value: string) => void,
    setDamage: (value: number) => void,
) => {
    const defenseOption = randomBetween(1, 2);
    const enemyDiceResult = randomBetween(1,20);
    switch (defenseOption) {
        case 1:
            const defenderIndex = randomCardIndex(enemyTeam.length);
            const defenseValue = enemyTeam[defenderIndex].defense;
            setDefenseChoice("defendió");
            if (attackValue > (defenseValue + enemyDiceResult)) {
                const damage = attackValue - (defenseValue + enemyDiceResult);
                let newEnemyTeamState = [...enemyTeam];
                newEnemyTeamState[defenderIndex].hp -= damage;
                setEnemyTeam(newEnemyTeamState);
                setDamage(damage);
            } else {
                setDamage(0);
            }
            break;
        case 2:
            const evadorIndex = randomCardIndex(enemyTeam.length);
            const enemyEvasion = enemyTeam[evadorIndex].evasion;
            setDefenseChoice("Evadió");
            if (attackValue <= (enemyEvasion + enemyDiceResult)) {
                setDamage(0);
            } else {
                let newEnemyTeamState = [...enemyTeam];
                newEnemyTeamState[evadorIndex].hp -= attackValue;
                setDamage(attackValue);
            }
    }
    setAttackTurn(false);
    setEnemyDefenseTurn(true);
}

export const enemyAttack = (
    setAttackValue: (value: number) => void,
    enemyTeam: {name: string, hp: number, attack: number, defense: number, evasion: number}[],
    setEnemyDefenseTurn: (value: boolean) => void,
    setEnemyAttackTurn: (value: boolean) => void,
) => {
    const dice = randomBetween(1,20);
    const enemyIndex = randomCardIndex(enemyTeam.length);
    const attack = enemyTeam[enemyIndex].attack + dice;
    setAttackValue(attack);
    setEnemyDefenseTurn(false);
    setEnemyAttackTurn(true);
}