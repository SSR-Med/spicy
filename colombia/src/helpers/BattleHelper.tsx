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
    setVictory: (value: boolean) => void,
) => {
    const dice = randomBetween(1,20);
    setDiceValue(dice);
    const attack = playerChoice.attack + dice;
    setAttackValue(attack);
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
                    if ((newEnemyTeamState[defenderIndex].hp - damage) < 0) {
                        newEnemyTeamState[defenderIndex].hp = 0;
                    } else {
                        newEnemyTeamState[defenderIndex].hp -= damage;
                    }
                    setEnemyTeam(newEnemyTeamState);
                    let defeatedMembers = 0;
                    newEnemyTeamState.forEach((member) => {
                        if (member.hp == 0) {
                            defeatedMembers += 1;
                        }
                    });
                    if (defeatedMembers == enemyTeam.length) {
                        setVictory(true);
                        window.location.href = "/victory";
                    }
                    setDamage(damage);
                } else {
                    setDamage(0);
                }
                break;
            case 2:
                const evadorIndex = randomCardIndex(enemyTeam.length);
                const enemyEvasion = enemyTeam[evadorIndex].evasion;
                setDefenseChoice("evadió");
                if (attack <= (enemyEvasion + enemyDiceResult)) {
                    setDamage(0);
                } else {
                    let newEnemyTeamState = [...enemyTeam];
                    if ((newEnemyTeamState[evadorIndex].hp - attack) < 0) {
                        newEnemyTeamState[evadorIndex].hp = 0;
                    } else {
                        newEnemyTeamState[evadorIndex].hp -= attack;
                    }
                    setEnemyTeam(newEnemyTeamState);
                    setDamage(attack);
                    let defeatedMembers = 0;
                    newEnemyTeamState.forEach((member) => {
                        if (member.hp == 0) {
                            defeatedMembers += 1;
                        }
                    });
                    if (defeatedMembers == enemyTeam.length) {
                        setVictory(true);
                        window.location.href = "/victory";
                    }
                }
    }
    setTimeout(() => {
        setAttackTurn(false);
        setEnemyDefenseTurn(true);
    }, 1000);
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
    }, 3000);
}

export const playerDefense = (
    defenseChoice: string,
    playerTeam: {name: string, hp: number, attack: number, defense: number, evasion: number}[],
    setPlayerTeam: (team: {name: string, hp: number, attack: number, defense: number, evasion: number}[]) => void,
    attackValue: number,
    diceValue: number,
    setDamage: (value: number) => void,
    setPlayerDefenseTurn: (value: boolean) => void,
    setPlayerChoiceTurn: (value: boolean) => void,
    setVictory: (value: boolean) => void,
) => {
    switch(defenseChoice) {
        case "defendió":
            const defenderIndex = randomCardIndex(playerTeam.length);
            const defenseValue = playerTeam[defenderIndex].defense;
            if (attackValue > (defenseValue + diceValue)) {
                const damage = attackValue - (defenseValue + diceValue);
                let newPlayerTeamState = [...playerTeam];
                if ((newPlayerTeamState[defenderIndex].hp - damage) < 0) {
                    newPlayerTeamState[defenderIndex].hp = 0;
                } else {
                    newPlayerTeamState[defenderIndex].hp -= damage;
                }
                setPlayerTeam(newPlayerTeamState);
                setDamage(damage);
                let defeatedMembers = 0;
                newPlayerTeamState.forEach((member) => {
                    if(member.hp == 0) {
                        defeatedMembers += 1;
                    }
                });
                if (defeatedMembers == playerTeam.length) {
                    setVictory(false);
                    window.location.href = "/victory";
                }
            } else {
                setDamage(0);
            }
            break;
        case "evadió":
            const evaderIndex = randomCardIndex(playerTeam.length);
            const evasionValue = playerTeam[evaderIndex].evasion;
            if (attackValue > (evasionValue + diceValue)) {
                let newPlayerTeamState = [...playerTeam];
                if ((newPlayerTeamState[evaderIndex].hp - attackValue) < 0) {
                    newPlayerTeamState[evaderIndex].hp = 0;
                } else {
                    newPlayerTeamState[evaderIndex].hp -= attackValue;
                }
                setPlayerTeam(newPlayerTeamState);
                setDamage(attackValue);
                let defeatedMembers = 0;
                newPlayerTeamState.forEach((member) => {
                    if(member.hp == 0) {
                        defeatedMembers += 1;
                    }
                });
                if (defeatedMembers == playerTeam.length) {
                    setVictory(false);
                    window.location.href = "/victory";
                }
            } else {
                setDamage(0);
            }
    }
    setPlayerDefenseTurn(true);
    setTimeout(() => {
        setPlayerDefenseTurn(false);
        setPlayerChoiceTurn(true);
    }, 4000);
}