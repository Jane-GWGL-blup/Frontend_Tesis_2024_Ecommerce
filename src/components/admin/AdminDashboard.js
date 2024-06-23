import React from 'react';
import { ConversionRateChart, MonthlySalesChart, InventoryStatusChart } from '../../components/'

import '../../styles/components/admin.css';

/* import { useEffect, useRef } from 'react';
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
  ); */


/* export const chartOptions = {
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
  }; */

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className='row'>
        <div className='col'>
          <div className="statistics">
            <h3>Estadísticas de Ventas</h3>
            <div className="chart-container">
              <MonthlySalesChart />
            </div>
            <p>Total de ventas este año: $5000</p>
          </div>
          <div className="statistics">
            <h3>Tasa de Conversión</h3>
            <div className="chart-container">
              <ConversionRateChart />
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="statistics">
            <h3>Estado del Inventario</h3>
            <div className="chart-container">
              <InventoryStatusChart />
            </div>
          </div>
          <div className="other-elements">
            <h3>Otras Funcionalidades</h3>
            {/* Aquí puedes agregar más elementos, como tablas de datos, estadísticas adicionales, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

