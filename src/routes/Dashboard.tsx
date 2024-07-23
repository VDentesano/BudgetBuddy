import React from 'react';
import IncomeCard from '../components/IncomeCard';
import ExpensesCard from '../components/ExpensesCard';
import SavingsCard from '../components/SavingsCard';
import SpendingByCategoryCard from '../components/SpendingByCategoryCard';
import BudgetingCard from '../components/BudgetingCard';
import TransactionsCard from '../components/TransactionsCard';
import FinancialReportsCard from '../components/FinancialReportsCard';

const DashboardPage: React.FC = () => {
  return (
    <main className="flex-1 bg-muted/40 px-4 py-6 sm:px-6">
      <div className="container grid gap-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <IncomeCard />
          <ExpensesCard />
          <SavingsCard />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SpendingByCategoryCard />
          <BudgetingCard />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <TransactionsCard />
          <FinancialReportsCard />
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
