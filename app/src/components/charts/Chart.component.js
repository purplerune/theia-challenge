import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

export default function Chart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const options = {
    chart: {
      backgroundColor: "#121729",
      zoomType: "x",
    },
    title: {
      text: "FAIR Offering Data",
      style: {
        color: "#FFF",
      },
    },
    subtitle: {
      text:
        document.ontouchstart === undefined
          ? "Click and drag in the plot area to zoom in"
          : "Pinch the chart to zoom in",
      style: {
        color: "#FFF",
      },
    },
    xAxis: {
      type: "datetime",
      labels: {
        style: {
          color: "#FFF",
        },
      }
    },
    yAxis: {
      title: {
        text: "Last transaction price",
        style: {
          color: "#FFF",
        },
      },
      labels: {
        style: {
          color: "#FFF",
        },
      }
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },

    series: [
      {
        type: "area",
        name: "Last transaction price",
        data: data,
      },
    ],
  };

  return (
    <div style={{ padding: "0.25rem" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
