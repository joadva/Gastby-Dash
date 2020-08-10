import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"

import "../style/graficas.css"

const ChartData = () => {
  const [whatever, setWhatever] = useState({})

  const chart = () => {
    setWhatever({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          label: "Days",
          level: "Days",
          data: [32, 55, 33, 47, 13],
          borderColor: ["#3F51B5"],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF5733",
            "#BEFF33",
          ],
        },
      ],
    })
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <div>
      <h1>Person with covid</h1>
      <div className="container">
        <Line data={whatever} />
      </div>
    </div>
  )
}

export default ChartData
