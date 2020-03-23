/* import React, { Component } from "react";

import { InputLabel, Select } from "@scuf/common";

import "./MonitorNetwork.css";

class MonitorNetwork extends Component {
  render() {
    const networkOptions = [
      { value: "AA", text: "QA" },
      { value: "BB", text: "Staging" },
      { value: "CC", text: "Dev" }
    ];

    const channelOptions = [
      { value: "AA", text: "myChannel1" },
      { value: "BB", text: "myChannel2" },
      { value: "CC", text: "myChannel3" }
    ];

    return (
      <React.Fragment>
        <div className="MonitorNetwork-container">
          <InputLabel label="Select Network" />
          <Select placeholder="Select a Network" options={networkOptions} />
        </div>
        <div className="MonitorNetwork-container">
          <InputLabel label="Select Channel" />
          <Select placeholder="Select a Channel" options={channelOptions} />
        </div>
      </React.Fragment>
    );
  }
}

export default MonitorNetwork;
 */
import React, { Component } from "react";

import CanvasJSReact from "../../lib/canvasjs.react";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class MonitorNetwork extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light1", // "light1", "light2", "dark1", "dark2"
      title: {
        text: "Blockchain Hub",
        fontSize: 26
      },

      data: [
        {
          type: "bubble",
          size: 60,
          indexLabel: "{label}",
          toolTipContent:
            "<b>{label}</b><br>Distance From Sun: {x}mn miles<br>Avg. Surface Temp: {y} Kelvin<br>Diameter: {z} miles",
          dataPoints: [
            { label: "Mercury", x: 36, y: 452, z: 3031 },
            { label: "Venus", x: 67.2, y: 726, z: 7521 },
            { label: "Earth", x: 93, y: 285, z: 7926 },
            { label: "Mars", x: 141.6, y: 230, z: 4222 },
            { label: "Jupiter", x: 483.6, y: 120, z: 88729 },
            { label: "Saturn", x: 886.7, y: 88, z: 74600 },
            { label: "Uranus", x: 1784.0, y: 59, z: 32600 },
            { label: "Neptune", x: 2794.4, y: 48, z: 30200 }
          ]
        }
      ]
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default MonitorNetwork;
