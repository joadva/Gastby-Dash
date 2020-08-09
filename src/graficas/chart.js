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
          level: "eol",
          data: [32, 55, 33, 47, 64],
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
      <div className="flex flex-col items-center w-full max-w-md graficas">
        <Line data={whatever} />
      </div>
    </div>
  )
}

export default ChartData
