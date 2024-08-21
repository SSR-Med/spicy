import { createContext, FC, ReactNode, useState } from 'react';

const battleTeam = [
    {
      name: "Milo",
      hp: 100,
      attack: 40,
      defense: 30,
      evasion: 30,
    },
    {
      name: "mazamorra",
      hp: 100,
      attack: 40,
      defense: 30,
      evasion: 30,
    },
    {
      name: "changua",
      hp: 100,
      attack: 40,
      defense: 30,
      evasion: 30,
    },
    {
      name: "ensalada",
      hp: 100,
      attack: 40,
      defense: 30,
      evasion: 30,
    },
  ];

const enemyBattleTeam = [
  {
    name: "maria_juana",
    hp: 50,
    attack: 40,
    defense: 20,
    evasion: 10,
  },
];

interface BattleContextValue {
    choiceTurn: boolean,
    setChoiceTurn: (value:boolean) => void,
    playerTeam: {name: string, hp: number, attack: number, defense: number, evasion: number}[],
    setPlayerTeam: (team: {name: string, hp: number, attack: number, defense: number, evasion: number}[]) => void,
    playerChoice: {name: string, hp: number, attack: number, defense: number, evasion: number},
    setPlayerChoice: (team: {name: string, hp: number, attack: number, defense: number, evasion: number}) => void,
    attackChoiceTurn: boolean,
    setAttackChoiceTurn: (value: boolean) => void,
    diceValue: number,
    setDiceValue: (value: number) => void,
    attackTurn: boolean,
    setAttackTurn: (value: boolean) => void,
    attackValue: number,
    setAttackValue: (value: number) => void,
    enemyTeam: {name: string, hp: number, attack: number, defense: number, evasion: number}[],
    setEnemyTeam: (team: {name: string, hp: number, attack: number, defense: number, evasion: number}[]) => void,
    enemyDefenseTurn: boolean,
    setEnemyDefenseTurn: (value: boolean) => void,
    defenseChoice: string,
    setDefenseChoice: (value: string) => void,
    damage: number,
    setDamage: (value: number) => void,
    enemyAttackTurn: boolean,
    setEnemyAttackTurn: (value: boolean) => void,
    defenseChoiceTurn: boolean,
    setDefenseChoiceTurn: (value: boolean) => void,
    defenseTurn: boolean,
    setDefenseTurn: (value: boolean) => void,
    defenseDiceTurn: boolean,
    setDefenseDiceTurn: (value: boolean) => void,
    victory: boolean,
    setVictory: (value: boolean) => void,
}

export const BattleContext = createContext<BattleContextValue | null>(null);

export const BattleProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [choiceTurn, setChoiceTurn] = useState(true);
    const [playerTeam, setPlayerTeam] = useState<{name: string, hp: number, attack: number, defense: number, evasion: number}[]>(battleTeam);
    const [playerChoice, setPlayerChoice] = useState<{name: string, hp: number, attack: number, defense: number, evasion: number}>({name: "", hp: 0, attack: 0, defense: 0, evasion: 0});
    const [attackChoiceTurn, setAttackChoiceTurn] = useState(false);
    const [diceValue, setDiceValue] = useState(0);
    const [attackTurn, setAttackTurn] = useState(false);
    const [attackValue, setAttackValue] = useState(0);
    const [enemyTeam, setEnemyTeam] = useState(enemyBattleTeam);
    const [enemyDefenseTurn, setEnemyDefenseTurn] = useState(false);
    const [defenseChoice, setDefenseChoice] = useState("");
    const [damage, setDamage] = useState(0);
    const [enemyAttackTurn, setEnemyAttackTurn] = useState(false);
    const [defenseChoiceTurn, setDefenseChoiceTurn] = useState(false);
    const [defenseTurn, setDefenseTurn] = useState(false);
    const [defenseDiceTurn, setDefenseDiceTurn] = useState(false);
    const [victory, setVictory] = useState(false);

    return (
        <BattleContext.Provider
        value={{
            choiceTurn,
            setChoiceTurn: (choice) => {
                setChoiceTurn(choice);
            },
            playerTeam,
            setPlayerTeam: (team) => {
                setPlayerTeam(team);
            },
            playerChoice,
            setPlayerChoice: (card) => {
                setPlayerChoice(card);
            },
            attackChoiceTurn,
            setAttackChoiceTurn: (value) => {
                setAttackChoiceTurn(value);
            },
            diceValue,
            setDiceValue: (value) => {
              setDiceValue(value);
            },
            attackTurn,
            setAttackTurn: (value) => {
              setAttackTurn(value);
            },
            attackValue,
            setAttackValue: (value) => {
              setAttackValue(attackValue => attackValue = value);
            },
            enemyTeam,
            setEnemyTeam: (team) => {
              setEnemyTeam(team);
            },
            enemyDefenseTurn,
            setEnemyDefenseTurn: (value) => {
              setEnemyDefenseTurn(value);
            },
            defenseChoice,
            setDefenseChoice: (value) => {
              setDefenseChoice(value);
            },
            damage,
            setDamage: (value) => {
              setDamage(value);
            },
            enemyAttackTurn,
            setEnemyAttackTurn: (value) => {
              setEnemyAttackTurn(value);
            },
            defenseChoiceTurn,
            setDefenseChoiceTurn: (value) => {
              setDefenseChoiceTurn(value);
            },
            defenseTurn,
            setDefenseTurn: (value) => {
              setDefenseTurn(value);
            },
            defenseDiceTurn,
            setDefenseDiceTurn: (value) => {
              setDefenseDiceTurn(value);
            },
            victory,
            setVictory: (value) => {
              setVictory(value);
            }
        }}
        >
            {children}
        </BattleContext.Provider>
    );
}