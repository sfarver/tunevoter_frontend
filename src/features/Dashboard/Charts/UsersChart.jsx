import React from "react";
import { Bar } from "react-chartjs-2";
import { randomColor } from "randomcolor";

function UsersChart({ userGrowth }) {
  const data = {
    labels: Object.keys(userGrowth),
    datasets: [
      {
        label: "User Growth",
        backgroundColor: Object.keys(userGrowth).map(date => {
          return randomColor();
        }),
        borderColor: "rgb(0,0,0)",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(255,99,132)",
        hoverBorderColor: "rgb(255,99,132)",
        data: Object.values(userGrowth)
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
            text: "User Growth"
          }
        }}
      />
    </div>
  );
}

export default UsersChart;
