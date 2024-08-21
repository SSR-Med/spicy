// Css
import "/src/static/css/team/team.css";
import "/src/static/css/team/card.css";
import "/src/static/css/teamSelection/teamSelection.css";
import "/src/static/css/victory/victory.css";

// Helpers
import { staticUrlCard } from "../../helpers/StaticUrlCard";

// Components
import { createHomeFooter } from "../../components/home/HomeComponent";

//hooks
import { useBattle } from "../../hooks/useBattle";

export default function Victory() {
  const { victory } = useBattle();

  console.log(victory);

  if (victory) {
    return (
      <div className="team">
        <div className="victory-main">
          <div className="victory-container">
            <div className="victory-card-image">
              <img src={staticUrlCard("Milo")} />
            </div>
            <div className="victory-main-container">
              <h1>V I C T O R I A !!!</h1>
              <div className="victory-secondary-container">Recompensas</div>
            </div>
          </div>
        </div>
        {createHomeFooter()}
      </div>
    );
  } else {
    return (
      <div className="team">
      <div className="victory-main">
        <div className="victory-container-lose">
          <h1>FUISTE DERROTADO!!</h1>
        </div>
      </div>
      {createHomeFooter()}
    </div>
    );
  }
}
