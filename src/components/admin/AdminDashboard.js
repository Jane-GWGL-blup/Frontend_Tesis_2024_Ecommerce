import React from 'react';
import { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

export const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

const AdminDashboard = () => {
  // Datos de ejemplo para el gráfico
  const chartData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Ventas mensuales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  // Opciones del gráfico
/*   const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }; */
/*   const chartOptions = {
    indexAxis: 'y',
  } */

  // Referencia al elemento del gráfico
 /*  const chartRef = useRef(null); */

  // Función para destruir el gráfico anterior antes de renderizar uno nuevo
/*   useEffect(() => {
    if (chartRef && chartRef.current) {
      chartRef.current.chartInstance.destroy();
    }
  }, []); 
  useEffect(() => {
    const chart = chartRef.current;
    if(chart){
        console.log('ChartJS', chart)
    }
  })*/

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {/* Contenido de estadísticas */}
      <div className="statistics">
        <h3>Estadísticas de Ventas</h3>
        <div className="chart-container">
          <Line  data={chartData} options={chartOptions}/>
        </div>
        <p>Total de ventas este año: $5000</p>
      </div>
      {/* Otros elementos del dashboard */}
      <div className="other-elements">
        <h3>Otras Funcionalidades</h3>
        {/* Aquí puedes agregar más elementos, como tablas de datos, estadísticas adicionales, etc. */}
      </div>
    </div>
  );
};

/*   return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="statistics">
        <h3>Estadísticas de Ventas</h3>
        <div className="chart-container">
          <Line ref={chartRef} data={chartData} options={chartOptions}/>
        </div>
        <p>Total de ventas este año: $5000</p>
      </div>
 
      <div className="other-elements">
        <h3>Otras Funcionalidades</h3>
      </div>
    </div>
  );
}; */

export default AdminDashboard;
