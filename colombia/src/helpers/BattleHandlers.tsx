export function randomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomCardIndex(length: number) {
    return Math.floor(Math.random() * length);
}

export const playerAttack = (
    diceValue: (value: number) => void,
    turnInfo: (info: string) => void,
    playerAttack: number,
    enemyState: {name: string, hp: number, attack: number, defense: number, evasion: number} [],
    setEnemyState: (state: {name: string, hp: number, attack: number, defense: number, evasion: number} []) => void,
    playerDefenseTurn: (value: boolean) => void,
    playerDefenseChoice: number,
    playerState: {name: string, hp: number, attack: number, defense: number, evasion: number} [],
    setPlayerState: (state: {name: string, hp: number, attack: number, defense: number, evasion: number} []) => void,
    choiceTurn: (value: boolean) => void,
  ) => {
    const diceResult = randomBetween(1,20);
    diceValue(diceResult);
    const attackValue = playerAttack + diceResult;
    turnInfo(`Atacaste al enemigo (${playerAttack} + ${diceResult})`);
    const defenseOption = randomBetween(1,2);
    let realDamage:number;
    const enemyDiceResult = randomBetween(1,20);
    switch (defenseOption) {
      case 1:
        const defenderIndex = randomCardIndex(enemyState.length);
        const enemyDefense = enemyState[defenderIndex].defense;
        if (attackValue > (enemyDefense + enemyDiceResult)) {
          realDamage = attackValue - (enemyDefense + enemyDiceResult);
          let newEnemyTeamState = [...enemyState];
          newEnemyTeamState[defenderIndex].hp -= realDamage;
          setTimeout(turnInfo, 1000, `El enemigo defendió y recibió ${realDamage} de daño!`);
          setEnemyState(newEnemyTeamState);
        } else {
          realDamage = 0;
          setTimeout(turnInfo, 1000, `El enemigo defendió y no recibió daño!`);
        }
        break;
      case 2:
        const evaderIndex = randomCardIndex(enemyState.length);
        const enemyEvasion = enemyState[evaderIndex].evasion;
        if (attackValue <= (enemyEvasion + enemyDiceResult)) {
          setTimeout(turnInfo, 1000, `El enemigo evadió tu ataque`);
        } else {
          setTimeout(turnInfo, 1000, `El enemigo trató de evadir y recibió ${attackValue} de daño!`);
          let newEnemyTeamState = [...enemyState];
          newEnemyTeamState[evaderIndex].hp -= attackValue;
          setEnemyState(newEnemyTeamState);
        }
        break;
    }
    setTimeout(enemyAttack, 1500, diceValue, turnInfo, enemyState, playerDefenseTurn, playerDefenseChoice, playerState, setPlayerState, choiceTurn);
  }

export const enemyAttack = (
  diceValue: (value: number) => void,
  turnInfo: (info: string) => void,
  enemyState: {name: string, hp: number, attack: number, defense: number, evasion: number} [],
  playerDefenseTurn: (value: boolean) => void,
  playerDefenseChoice: number,
  playerState: {name: string, hp: number, attack: number, defense: number, evasion: number} [],
  setPlayerState: (state: {name: string, hp: number, attack: number, defense: number, evasion: number} []) => void,
  choiceTurn: (value: boolean) => void,
) => {
  const diceResult = randomBetween(1,20);
  diceValue(diceResult);
  const enemyIndex = randomCardIndex(enemyState.length);
  const enemyAttack = enemyState[enemyIndex].attack;
  const attackValue = enemyAttack + diceResult;
  turnInfo(`El enemigo te atacó (${enemyAttack} + ${diceResult})`);
  playerDefense(attackValue, playerDefenseTurn, playerDefenseChoice, playerState, turnInfo, setPlayerState, choiceTurn);
}

export const playerDefense = (
  enemyAttack: number,
  playerDefenseTurn: (value: boolean) => void,
  playerDefenseChoice: number,
  playerState: {name: string, hp: number, attack: number, defense: number, evasion: number} [],
  turnInfo: (info: string) => void,
  setPlayerState: (state: {name: string, hp: number, attack: number, defense: number, evasion: number} []) => void,
  choiceTurn: (value: boolean) => void,
) => {
  switch (playerDefenseChoice) {
    case 1:
      const defenseIndex = randomCardIndex(playerState.length);
      const defense = playerState[defenseIndex].defense;
      if (enemyAttack > defense) {
        const realDamage = enemyAttack - defense;
        let newPlayerTeamState = [...playerState];
        newPlayerTeamState[defenseIndex].hp -= realDamage;
        setTimeout(() => {
          turnInfo(`Defendiste y recibiste ${realDamage} de daño!`);
          setPlayerState(newPlayerTeamState);
        }, 1000);
      } else {
        setTimeout(() => {
          turnInfo(`Defendiste y no recibiste daño!`);
        },1000)
      }
      break;
    case 2:
      const evasionIndex = randomCardIndex(playerState.length);
      const evasion = playerState[evasionIndex].evasion;
      if (enemyAttack <= evasion) {
        setTimeout(() => {
          turnInfo(`Evadiste el ataque del enemigo`);
        }, 1000)
      } else {
        setTimeout(() => {
          turnInfo(`Intentaste evadir y recibiste ${enemyAttack} de daño!`);
          let newPlayerTeamState = [...playerState];
          newPlayerTeamState[defenseIndex].hp -= enemyAttack;
          setPlayerState(newPlayerTeamState);
        }, 1000)
      }
      break;
  }
  setTimeout(() => {
    playerDefenseTurn(false);
    choiceTurn(true);
    turnInfo(`Elije con quien atacar`);
  }, 1500);
}