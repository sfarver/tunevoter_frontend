import React from "react";
import { Bar } from "react-chartjs-2";
import { randomColor } from "randomcolor";

function TopArtists({ artists }) {
  const data = {
    labels: Object.keys(artists),
    datasets: [
      {
        label: "Top Artists",
        backgroundColor: Object.keys(artists).map(artist => {
          return randomColor();
        }),
        borderColor: "rgb(0,0,0)",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(255,99,132)",
        hoverBorderColor: "rgb(255,99,132)",
        data: Object.values(artists)
      }
    ]
  };

  return (
    <div>
      <Bar
        data={data}
        width={800}
        height={300}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          title: {
            display: true,
            text: "Top Artists"
          }
        }}
      />
    </div>
  );
}

export default TopArtists;
