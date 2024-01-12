import React, { useState } from "react";
import ApexCharts from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Rejected",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "Verified",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Former",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
        {
          name: "Un Verified",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
        {
          name: "On Hold",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            // text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ApexCharts
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}
export default ApexChart;
