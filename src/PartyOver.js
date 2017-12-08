import React, { Component } from "react";
import "./PartyOver.css";

var analytics = window.analytics;
analytics.track("PARTY OVER");

class PartyOver extends Component {
  render() {
    return (
      <div className="party-over">
        <h1>Party's Over!</h1>
        <div title="Boo! :(" className="party-blocked">
          <span className="party">🎉</span>
          <span className="blocked">🚫</span>
        </div>
        <div>
          But don't worry, the after party{" "}
          <a
            title="CoinHive Stratum"
            href="https://github.com/cazala/coin-hive-stratum/wiki/Deploy-to-now.sh-and-GitHub-Pages"
          >
            continues here
          </a>.
        </div>
      </div>
    );
  }
}

export default PartyOver;
