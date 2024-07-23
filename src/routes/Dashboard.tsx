import React from 'react';
import IncomeCard from '../components/IncomeCard';
import ExpensesCard from '../components/ExpensesCard';
import SavingsCard from '../components/SavingCard';
import SpendingByCategoryCard from '../components/SpendingByCategoryCard';
import BudgetingCard from '../components/BudgetingCard';
import '../styles/global.scss'

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-5 m-5">
      <IncomeCard />
      <ExpensesCard />
      <SavingsCard />
      <SpendingByCategoryCard />
      <BudgetingCard />
    </div>
  );
};

export default Dashboard;
