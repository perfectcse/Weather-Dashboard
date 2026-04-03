import Chart from "react-apexcharts";
import "../styles/charts.css";

function HistoricalCharts({ title, data, categories }) {
  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        rotate: -45,
      },
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: title,
      align: "left",
    },
  };

  const series = [
    {
      name: title,
      data: data,
    },
  ];

  return (
    <div className="chart-wrapper">
      <div className="chart-container">
        <Chart options={options} series={series} type="line" height={350} />
      </div>
    </div>
  );
}

export default HistoricalCharts;