import { createContext, FC, ReactNode, useState } from 'react';

const battleTeam = [
    {
      name: "Milo",
      hp: 100,
      attack: 20,
      defense: 15,
      evasion: 15,
    },
    {
      name: "mazamorra",
      hp: 100,
      attack: 20,
      defense: 15,
      evasion: 15,
    },
    {
      name: "changua",
      hp: 100,
      attack: 20,
      defense: 15,
      evasion: 15,
    },
    {
      name: "ensalada",
      hp: 100,
      attack: 20,
      defense: 15,
      evasion: 15,
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
}

export const BattleContext = createContext<BattleContextValue | null>(null);

export const BattleProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [choiceTurn, setChoiceTurn] = useState(true);
    const [playerTeam, setPlayerTeam] = useState<{name: string, hp: number, attack: number, defense: number, evasion: number}[]>(battleTeam);
    const [playerChoice, setPlayerChoice] = useState<{name: string, hp: number, attack: number, defense: number, evasion: number}>({name: "", hp: 0, attack: 0, defense: 0, evasion: 0});
    const [attackChoiceTurn, setAttackChoiceTurn] = useState(false);
    const [diceValue, setDiceValue] = useState(0);
    const [attackTurn, setAttackTurn] = useState(false);

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
            }
        }}
        >
            {children}
        </BattleContext.Provider>
    );
}