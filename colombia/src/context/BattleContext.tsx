import { createContext, FC, ReactNode, useState } from 'react';

interface BattleContextValue {
    choiceTurn: boolean,
    setChoiceTurn: (value:boolean) => void,
}

export const BattleContext = createContext<BattleContextValue | null>(null);

export const BattleProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [choiceTurn, setChoiceTurn] = useState(true);

    return (
        <BattleContext.Provider
        value={{
            choiceTurn,
            setChoiceTurn: (choice) => {
                setChoiceTurn(choice);
            }
        }}
        >
            {children}
        </BattleContext.Provider>
    );
}