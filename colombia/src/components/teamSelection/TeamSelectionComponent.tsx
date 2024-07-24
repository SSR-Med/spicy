import { handleRedirect } from "../../helpers/HandleRedirect";
import { staticUrlCard } from "../../helpers/StaticUrlCard";

export function createSelectionTeamCard(
  card: {
    name: string,
    hp: number,
    attack: number,
    defense: number,
    evasion: number
  }
) {
  return (
    <div className="team-battle-card">
      <img
          src={staticUrlCard(card.name)}
          onClick={() => handleRedirect("/team", "")}
      />
      <div className="team-battle-card-info">
        <div>{`HP: ${card.hp}`}</div>
        <div>{`Ataque: ${card.attack} / Defensa: ${card.defense} / Evasion: ${card.evasion}`}</div>
      </div>
    </div>
  );
}
