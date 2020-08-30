import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export default function Chart(data) {
  const [periodData, setPeriodData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      //setPeriodData(await fetchPeriodData());
    };

    fetchAPI();
  }, [setPeriodData]);

  return (
    <div>
      <Line>
        data=
        {{
          labels: [],
          datasets: [{ data: {} }],
        }}
      </Line>
    </div>
  );
}
