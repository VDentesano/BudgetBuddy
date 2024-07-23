import React from 'react';
import IncomeCard from '../IncomeCard';
import ExpensesCard from '../ExpensesCard';
import SavingsCard from '../SavingsCard';

const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 bg-muted/40 px-4 py-6 sm:px-6">
      <div className="container grid gap-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <IncomeCard />
          <ExpensesCard />
          <SavingsCard />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
