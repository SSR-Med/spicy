import { handleRedirect } from "../../helpers/HandleRedirect";
import { staticUrlCard } from "../../helpers/StaticUrlCard";
//Hooks
import { useBattle } from "../../hooks/useBattle";

interface BattleTeamProps {
  isSelection: boolean;
  urlImage: string;
  hp: number;
  attack: number;
  defense: number;
  evasion: number;
}

export function CreateBattleTeamCard({
  isSelection,
  urlImage,
  hp,
  attack,
  defense,
  evasion,
} : BattleTeamProps) {
  const { choiceTurn, setChoiceTurn, setPlayerChoice, setAttackChoiceTurn } =
    useBattle();

  return (
    <div
      className="team-battle-card"
      style={{ cursor: choiceTurn ? "pointer" : "inherited" }}
    >
      {isSelection ? (
        <img
          src={staticUrlCard(urlImage)}
          onClick={() => handleRedirect("/team", "")}
        />
      ) : (
        <img
          src={staticUrlCard(urlImage)}
          onClick={() => {
            if (choiceTurn) {
              setChoiceTurn(false);
              setPlayerChoice({
                name: urlImage,
                hp,
                attack,
                defense,
                evasion,
              });
              setAttackChoiceTurn(true);
            }
          }}
        />
      )}
      <div className="team-battle-card-info">
        <div>{`HP: ${hp}`}</div>
        <div>{`Ataque: ${attack} / Defensa: ${defense} / Evasion: ${evasion}`}</div>
      </div>
    </div>
  );
}
