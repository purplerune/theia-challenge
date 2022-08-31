import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function InvestorsChart() {
  const options = {
    chart: {
      backgroundColor: "#121729",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      height: 280,
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          style: {
            color: "#fff",
          },
        },
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Investor A",
            y: 95,
            sliced: true,
            selected: true,
          },
          {
            name: "Investor B",
            y: 5,
            sliced: true,
            selected: true,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
