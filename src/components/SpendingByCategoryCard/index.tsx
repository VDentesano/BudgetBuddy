import React from 'react';
import { Card, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Rent', 'Food', 'Entertainment', 'Transportation'],
  datasets: [
    {
      data: [400, 300, 200, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    }
  ]
};

const SpendingByCategoryCard: React.FC = () => {
  return (
    <Card className="dashboard-card">
      <Typography variant="h6">Spending by Category</Typography>
      <Typography variant="subtitle1">
        Track your spending across different categories
      </Typography>
      <Doughnut data={data} />
    </Card>
  );
};

export default SpendingByCategoryCard;
