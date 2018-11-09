import React from "react";
import { Pie } from "react-chartjs-2";
import { randomColor } from "randomcolor";

function TopGenres({ genres }) {
  const data = {
    labels: Object.keys(genres),
    datasets: [
      {
        label: "Top Genres",
        backgroundColor: Object.keys(genres).map(genres => {
          return randomColor();
        }),
        borderColor: "rgb(0,0,0)",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(255,99,132)",
        hoverBorderColor: "rgb(255,99,132)",
        data: Object.values(genres)
      }
    ]
  };

  console.log(data.datasets);

  return (
    <div>
      <Pie data={data} width={250} height={500} />
    </div>
  );
}

export default TopGenres;
