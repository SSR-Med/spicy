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
    setAttackTurn: (value: boolean) => void,
    enemyTeam: {name: string, hp: number, attack: number, defense: number, evasion: number}[],
    setEnemyTeam: (team: {name: string, hp: number, attack: number, defense: number, evasion: number}[]) => void,
    setEnemyDefenseTurn: (value: boolean) => void,
    setDefenseChoice: (value: string) => void,
    setDamage: (value: number) => void,
) => {
    const dice = randomBetween(1,20);
    setDiceValue(dice);
    const attack = playerChoice.attack + dice;
    setAttackValue(attack);
    setTimeout(() => {
        const defenseOption = randomBetween(1, 2);
        const enemyDiceResult = randomBetween(1,20);
        switch (defenseOption) {
                case 1:
                    const defenderIndex = randomCardIndex(enemyTeam.length);
                    const defenseValue = enemyTeam[defenderIndex].defense;
                    setDefenseChoice("defendió");
                    if (attack > (defenseValue + enemyDiceResult)) {
                        const damage = attack - (defenseValue + enemyDiceResult);
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
                    if (attack <= (enemyEvasion + enemyDiceResult)) {
                        setDamage(0);
                    } else {
                        let newEnemyTeamState = [...enemyTeam];
                        newEnemyTeamState[evadorIndex].hp -= attack;
                        setEnemyTeam(newEnemyTeamState);
                        setDamage(attack);
                    }
            }
            setAttackTurn(false);
            setEnemyDefenseTurn(true);
    }, 2000)
}


export const enemyAttack = (
    setAttackValue: (value: number) => void,
    enemyTeam: {name: string, hp: number, attack: number, defense: number, evasion: number}[],
    setEnemyDefenseTurn: (value: boolean) => void,
    setEnemyAttackTurn: (value: boolean) => void,
    setDefenseChoiceTurn: (value: boolean) => void,
) => {
    const dice = randomBetween(1,20);
    const enemyIndex = randomCardIndex(enemyTeam.length);
    const attack = enemyTeam[enemyIndex].attack + dice;
    setAttackValue(attack);
    setEnemyDefenseTurn(false);
    setEnemyAttackTurn(true);
    setTimeout(() => {
        setEnemyAttackTurn(false);
        setDefenseChoiceTurn(true);
    }, 6000);
}

export const playerDefense = (
    defenseChoice: string,
    playerTeam: {name: string, hp: number, attack: number, defense: number, evasion: number}[],
    setPlayerTeam: (team: {name: string, hp: number, attack: number, defense: number, evasion: number}[]) => void,
    attackValue: number,
    diceValue: number,
    setDamage: (value: number) => void,
) => {
    switch(defenseChoice) {
        case "defendió":
            const defenderIndex = randomCardIndex(playerTeam.length);
            const defenseValue = playerTeam[defenderIndex].defense;
            if (attackValue > (defenseValue + diceValue)) {
                const damage = attackValue - (defenseValue + diceValue);
                let newPlayerTeamState = [...playerTeam];
                newPlayerTeamState[defenderIndex].hp -= damage;
                setPlayerTeam(newPlayerTeamState);
                setDamage(damage);
            } else {
                setDamage(0);
            }
            break;
        case "evadió":
            const evaderIndex = randomCardIndex(playerTeam.length);
            const evasionValue = playerTeam[evaderIndex].evasion;
    }
}