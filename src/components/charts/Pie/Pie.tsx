import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// 🔴 IMPORTANT: named import
import { ecommerceMetrics } from "../../ecommerce/EcommerceMetrics";

export default function SessionsByAudienceChart() {
  const series = ecommerceMetrics.map(item => item.value);
  const labels = ecommerceMetrics.map(item => item.label);

  const options: ApexOptions = {
    chart: {
      type: "donut",
      fontFamily: "Outfit, sans-serif",
      toolbar: { show: false },
    },

    labels,

    colors: ["#465FFF", "#9CB9FF", "#E4ECFF"],

    legend: {
      position: "bottom",
    },

    dataLabels: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },

    // tooltip: {
    //   y: {
    //     formatter: (val: number) => val.toLocaleString(),
    //   },
    // },
tooltip: {
  theme: "light",
  style: {
    fontSize: "12px",
    fontFamily: "Outfit, sans-serif",
  },
  marker: {
    show: true,
  },
},


  };

  return (
    <div className="bg-white p-6 rounded-xl w-full">
      <h3 className="text-sm font-semibold mb-4">
        Sessions By Audience
      </h3>

      <Chart
        options={options}
        series={series}
        type="donut"
        height={320}
      />
    </div>
  );
}
