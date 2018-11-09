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

  return (
    <div>
      <Pie
        data={data}
        width={800}
        height={250}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          title: {
            display: true,
            text: "Top Genres"
          }
        }}
      />
    </div>
  );
}

export default TopGenres;
