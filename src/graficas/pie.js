import React, { Component } from "react"
import { Pie } from "react-chartjs-2"

const data = {
  labels: ["Production", "TI", "OBREROS"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
}

class PieExample extends Component {
  render() {
    return (
      <div className="flex flex-col items-center w-full max-w-md graficas ">
        <h2>Areas </h2>
        <Pie data={data} />
      </div>
    )
  }
}

export default PieExample
