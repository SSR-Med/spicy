import { useContext } from "react";
import { BattleContext } from "../context/BattleContext";

export const useBattle = () => {
    const context = useContext(BattleContext);
    if (context) return context;
    throw new Error("el proveedor del contexto no está ajustado");
}