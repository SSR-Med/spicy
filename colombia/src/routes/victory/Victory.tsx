// Dependencies
import { Button } from "@mui/material";

// Css
import "/src/static/css/team/team.css";
import "/src/static/css/team/card.css";
import "/src/static/css/teamSelection/teamSelection.css";
import "/src/static/css/victory/victory.css";

// Helpers
import { staticUrlCard } from "../../helpers/StaticUrlCard";

// Components
import { createHomeFooter } from "../../components/home/HomeComponent";

export default function Victory() {
  return (
    <div className="team">
      <div className="victory-main">
        <h1>Mayor daño: Milo</h1>
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
}
