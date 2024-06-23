import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Estado del Inventario',
    },
  },
};

const chartData = {
  labels: ['Disponible', 'Vendido', 'Pendiente'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
    },
  ],
};

const InventoryStatusChart = () => {
  return <Doughnut data={chartData} options={chartOptions} />;
};

export default InventoryStatusChart;
