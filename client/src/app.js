var React = require("react");
var ReactDOM = require("react-dom");

var ChartBox = require("./containers/ChartBox.jsx");

window.onload = function () {
  ReactDOM.render(
    <ChartBox />,
    document.getElementById("app")
  );
}