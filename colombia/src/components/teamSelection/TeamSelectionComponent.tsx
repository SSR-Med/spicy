import { staticUrlCard } from "../../helpers/StaticUrlCard";

export function createBattleTeamCard(
  urlImage: string,
  hp: number,
  attack: number,
  defense: number,
  evasion: number
) {
  return (
    <div className="team-battle-card">
      <img src={staticUrlCard(urlImage)} />
      <div className="team-battle-card-info">
        <div>{`HP: ${hp}`}</div>
        <div>{`Ataque: ${attack} / Defensa: ${defense} / Evasion: ${evasion}`}</div>
      </div>
    </div>
  );
}
