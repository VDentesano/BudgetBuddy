import React from 'react';
import { Card, Typography, LinearProgress, Box } from '@mui/material';

const categories = [
  { name: 'Rent', limit: 500, spent: 400 },
  { name: 'Food', limit: 300, spent: 250 },
  { name: 'Entertainment', limit: 200, spent: 150 },
  { name: 'Transportation', limit: 100, spent: 50 }
];

const BudgetingCard: React.FC = () => {
  return (
    <Card className="dashboard-card">
      <Typography variant="h6">Budgeting</Typography>
      <Typography variant="subtitle1">
        Set spending limits and track your progress
      </Typography>
      {categories.map((category, index) => (
        <Box key={index} mb={2}>
          <Typography variant="body2">
            {category.name}: ${category.spent} / ${category.limit}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(category.spent / category.limit) * 100}
          />
        </Box>
      ))}
    </Card>
  );
};

export default BudgetingCard;
