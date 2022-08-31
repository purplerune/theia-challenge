import "./content.styles.scss";
import Chart from "./charts/Chart.component";
import InvestorsChart from "./charts/InvestorsChart.component";
import {
  DEMO_LIVE_DATA_CARDS,
  DEMO_SAFE_PARAMETERS,
} from "../constants/demo.constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function Content() {
  return (
    <div
      className="container is-max-widescreen has-text-centered"
      style={{ width: "100%" }}
    >
      <p className="title is-size-4 has-text-left">Live Data</p>
      <div className="columns is-multiline">
        <div className="column is-full">
          <div className="card">
            <Chart />
          </div>
        </div>
      </div>
      <br />
      <div className="columns is-multiline">
        <div className="column is-one-third is-full-desktop is-one-third-widescreen">
          <div className="chart-card">
            <InvestorsChart />
          </div>
        </div>
        <div className="column">
          <div className="columns is-multiline">
            {DEMO_LIVE_DATA_CARDS.map((card) => (
              <div className="column is-full is-full-desktop is-half-widescreen">
                <div className="custom-card">
                  <div
                    className={`icon-container has-background-${card.variant}-dark`}
                  >
                    <FontAwesomeIcon
                      icon={card.icon}
                      className={`has-text-${card.variant}-light`}
                    />
                  </div>
                  <div className="card-content">
                    <p className="title is-size-4">{card.title}</p>
                    <p className="subtitle is-size-6">{card.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <p className="title is-size-4 has-text-left">
        FAIR Rolling SAFE Parameters
      </p>
      <div className="fair-params columns is-3 is-multiline">
        {DEMO_SAFE_PARAMETERS.map((card) => (
          <div className="column is-full is-half-tablet is-one-quarter-desktop is-one-fifth-widescreen">
            <div className="custom-card">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="has-text-info-dark"
              />
              <p className={`title is-size-4 has-text-${card.variant}`}>
                {card.title}
              </p>
              <p className="subtitle is-size-6 ">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <br/>
    </div>
  );
}
