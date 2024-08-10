import { staticUrlCard } from "../../helpers/StaticUrlCard";

interface EnemyTeamProps {
  urlImage: string,
  hp: number,
  attack: number,
  defense: number,
  evasion: number
}

export function CreateEnemyTeamCard(
  {
    urlImage,
    hp,
    attack,
    defense,
    evasion
  } : EnemyTeamProps) {
  return (
    <div className="enemy-battle-card">
      <img src={staticUrlCard(urlImage)} />
      <div className="enemy-battle-card-info">
        <div>{`HP: ${hp}`}</div>
        <div>{`Ataque: ${attack} / Defensa: ${defense} / Evasion: ${evasion}`}</div>
      </div>
    </div>
  );
}
