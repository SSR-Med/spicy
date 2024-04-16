import { handleRedirect } from "../../helpers/HandleRedirect";
import { staticUrlCard } from "../../helpers/StaticUrlCard";

export function createBattleTeamCard(
  isSelection: boolean,
  urlImage: string,
  hp: number,
  attack: number,
  defense: number,
  evasion: number
) {
  return (
    <div className="team-battle-card">
      {isSelection ? (
        <img
          src={staticUrlCard(urlImage)}
          onClick={() => handleRedirect("/team", "")}
        />
      ) : (
        <img src={staticUrlCard(urlImage)} />
      )}
      <div className="team-battle-card-info">
        <div>{`HP: ${hp}`}</div>
        <div>{`Ataque: ${attack} / Defensa: ${defense} / Evasion: ${evasion}`}</div>
      </div>
    </div>
  );
}
