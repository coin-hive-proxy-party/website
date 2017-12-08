import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import "isomorphic-fetch";
import PartyOver from "./PartyOver";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<PartyOver />, document.getElementById("root"));
registerServiceWorker();
